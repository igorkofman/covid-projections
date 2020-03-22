import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Chart from 'components/Chart/Chart';
import Callout from 'components/Callout/Callout';
import Newsletter from 'components/Newsletter/Newsletter';
import { Wrapper, Content } from './ModelPage.style';
import { STATES } from 'enums';

import { useModelDatas, Model } from 'utils/model';

const LastDatesToAct = ({ model }) => {
  function formatDate(date) {
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
      date,
    );
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
    return `${month} ${day}`;
  }

  const days = 1000 * 60 * 60 * 24;
  let earlyDate = new Date(model.dateOverwhelmed.getTime() - 14 * days);
  let lateDate = new Date(model.dateOverwhelmed.getTime() - 9 * days);

  return (
    <b>
      {formatDate(earlyDate)} to {formatDate(lateDate)}
    </b>
  );
};

let lowercaseStates = [
  'AK',
  'CA',
  'CO',
  'FL',
  'MO',
  'NM',
  'NV',
  'NY',
  'OR',
  'TX',
  'WA',
];
function ModelPage() {
  const { id: location } = useParams();
  const locationName = STATES[location];

  let locationNameForDataLoad = location;

  if (lowercaseStates.indexOf(location) > -1) {
    locationNameForDataLoad = location.toLowerCase();
  }
  let modelDatas = useModelDatas(locationNameForDataLoad);

  if (!modelDatas) {
    return <Header locationName={locationName} />;
  }

  // Initialize models
  let baseline = new Model(modelDatas[0], {
    intervention: 'No Action, Current Trends Continue',
    r0: 2.4,
  });
  let distancing = {
    now: new Model(modelDatas[1], {
      intervention: 'California-style "shelter-in-place"',
      durationDays: 90,
      r0: 1.2,
    }),
    /*twoWeek: new Model( modelDatas[2], {
        intervention: 'Social Distancing, Strict Enforcement',
        durationDays: 60,
        r0: 1.2,
        delayDays: 14
      }),
    fourWeek: new Model( modelDatas[3], {
        intervention: 'Social Distancing, Strict Enforcement',
        durationDays: 60,
        r0: 1.2,
        delayDays: 7
      }),*/
  };
  let distancingPoorEnforcement = {
    now: new Model(modelDatas[7], {
      intervention: 'Texas-style delay/social distancing',
      durationDays: 90,
      r0: 1.7,
    }),
  };
  let contain = {
    now: new Model(modelDatas[2], {
      intervention: 'Wuhan-style Lockdown',
      durationDays: 90,
      r0: 0.3,
    }),
    /*oneWeek: new Model( modelDatas[5], {
        intervention: 'Wuhan Level Containment',
        durationDays: 30,
        r0: 0.4,
        delayDays: 7
      }),
    twoWeek: new Model( modelDatas[6], {
        intervention: 'Wuhan Level Containment',
        durationDays: 30,
        r0: 0.4,
        delayDays: 7
      }),*/
  };

  // Prep datasets for graphs
  // short label: 'Distancing Today for 2 Months', 'Wuhan Level Containment for 1 Month'
  let scenarioComparisonOverTime = duration => [
    baseline.getDataset('hospitalizations', duration, 'red'),
    distancing.now.getDataset('hospitalizations', duration, 'blue'),
    distancingPoorEnforcement.now.getDataset(
      'hospitalizations',
      duration,
      'orange',
    ),
    contain.now.getDataset('hospitalizations', duration, 'green'),
    baseline.getDataset('beds', duration, 'black', 'Available Hospital Beds'),
  ];
  let scenarioComparison = scenarioComparisonOverTime(100);

  return (
    <Wrapper>
      <Header locationName={locationName} />
      <Content>
        <Panel>
          <Chart
            state={locationName}
            subtitle="Hospitalizations over time"
            data={scenarioComparison}
            dateOverwhelmed={baseline.dateOverwhelmed}
          />

          <Callout backgroundColor="rgba(255, 0, 0, 0.0784)" borderColor="red">
            <div style={{ fontWeight: 'normal', marginBottom: '1.2rem' }}>
              Point of no-return for intervention to prevent hospital overload:
            </div>
            <LastDatesToAct model={baseline} />
          </Callout>

          <Callout borderColor="black">
            {/*<div style={{  }}>
              Share Alaska's COVID trends:
            </div>*/}
            <div class="fb-share-button" data-href="https://covidactnow.org" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcovidactnow.org%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
            <script type="IN/Share" data-url="https://www.linkedin.com"></script>
          </Callout>

          <OutcomesTable
            title="Predicted Outcomes after 3 Months"
            models={[
              baseline,
              distancingPoorEnforcement.now,
              distancing.now,
              contain.now,
            ]}
            colors={['red', 'orange', 'blue', 'green']}
            asterisk={['', '*', '*', '**']}
            timeHorizon={100}
          />

          <ul style={{ textAlign: 'left', lineHeight: '2em' }}>
            <li style={{ listStyleType: 'none', marginBottom: 10 }}>
              *{' '}
              <b>
                A second spike in disease may occur after social distancing is
                stopped.
              </b>{' '}
              Interventions are important because they buy time to create surge
              capacity in hospitals and develop therapeutic drugs that may have
              potential to lower hospitalization and fatality rates from
              COVID-19.{' '}
              <a href="https://docs.google.com/document/d/1ETeXAfYOvArfLvlxExE0_xrO5M4ITC0_Am38CRusCko/edit#heading=h.vyhw42b7pgoj">
                See full scenario definitions here.
              </a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              ** Our models show that it would take at least 2 months of
              Wuhan-style Lockdown to achieve full containment. However, it is
              unclear at this time how you could manage newly introduced
              infections.{' '}
              <a href="https://docs.google.com/document/d/1ETeXAfYOvArfLvlxExE0_xrO5M4ITC0_Am38CRusCko/edit#heading=h.vyhw42b7pgoj">
                See full scenario definitions here.
              </a>
            </li>
          </ul>
        </Panel>
        <div style={{marginTop: '3rem'}}>
          <Newsletter />
        </div>
      </Content>
      <Footer />
    </Wrapper>
  );
}

function Panel({ children, title }) {
  return <div style={{}}>{children}</div>;
}

function formatNumber(num) {
  if (num > 1000) {
    return (Math.round(num / 1000) * 1000).toLocaleString();
  } else if (num > 0) {
    return '<1000';
  } else {
    return 0;
  }
}

function formatBucketedNumber(num, total) {
  let percent = num / total;
  if (percent < 0.01) {
    return '<1%';
  } else if (percent < 0.7) {
    return Math.round(percent * 100) + '%';
  } else {
    return '>70%';
  }
}

function LineGraph({ data, maxY, annotations, title }) {
  let annotationConfigs = [];
  annotations = annotations || {};
  for (let label in annotations) {
    annotationConfigs.push({
      type: 'line',
      mode: 'vertical',
      scaleID: 'x-axis-0',
      value: annotations[label].on,
      borderColor: 'gray',
      borderWidth: 1,
      label: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        fontStyle: 'normal',
        fontColor: 'black',
        enabled: true,
        position: 'top',
        content: label,
        xAdjust: annotations[label].xOffset || 0,
        yAdjust: annotations[label].yOffset || 0,
      },
    });
  }

  return (
    <>
      <h3> {title}</h3>
      <Line
        data={data}
        width={500}
        height={400}
        options={{
          annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: annotationConfigs,
          },
          hover: {
            intersect: false,
          },
          tooltips: {
            mode: 'index',
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                type: 'linear',
                scaleLabel: {
                  display: true,
                  labelString: 'Hospitalizations',
                },
                ticks: {
                  max: maxY,
                  callback: function(value, index, values) {
                    return formatNumber(value);
                  },
                },
              },
            ],
            xAxes: [
              {
                type: 'time',
                distribution: 'series',
                time: {
                  displayFormats: {
                    quarter: 'MMM YYYY',
                  },
                  tooltipFormat: 'MMMM DD',
                },
              },
            ],
          },
        }}
      />
    </>
  );
}

function OutcomesTable({ models, asterisk, timeHorizon, title, colors }) {
  return (
    <div style={{ overflow: 'scroll' }}>
      <h3>{title}</h3>
      <table
        style={{
          minWidth: 500,
          width: '100%',
          margin: 'auto',
          border: '1px solid #ccc',
          padding: 20,
          textAlign: 'left',
          tableLayout: 'fixed',
        }}
      >
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Estimated Cumulative Infected</th>
            <th>Estimated Date Hospitals Overloaded</th>
            <th>Estimated Deaths</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, idx) => (
            <OutcomesRow
              key={idx}
              model={model}
              label={`${model.label}${asterisk[idx]}`}
              color={colors[idx]}
              timeHorizon={timeHorizon}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
function OutcomesRow({ model, label, timeHorizon, color }) {
  return (
    <tr>
      <td style={{ fontWeight: 'bold', color }}>{label}</td>
      <td>
        {formatBucketedNumber(
          timeHorizon
            ? model.cumulativeInfectedAfter(timeHorizon)
            : model.cumulativeInfected,
          model.totalPopulation,
        )}
      </td>
      {timeHorizon ? (
        <td>
          {model.dateOverwhelmed &&
          model.dateOverwhelmed < model.dateAfter(timeHorizon)
            ? model.dateOverwhelmed.toDateString()
            : model.dateOverwhelmed
            ? 'outside time bound'
            : 'never'}
        </td>
      ) : (
        <td>
          {model.dateOverwhelmed
            ? model.dateOverwhelmed.toDateString()
            : 'never'}
        </td>
      )}

      <td>
        {formatNumber(
          timeHorizon
            ? model.cumulativeDeadAfter(timeHorizon)
            : model.cumulativeDead,
        )}
      </td>
    </tr>
  );
}

export default ModelPage;
