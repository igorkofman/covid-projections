import React, { useRef, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ChartContentWrapper, MainContentInner } from './ChartsHolder.style';
import NoCountyDetail from './NoCountyDetail';
import { Projections } from 'common/models/Projections';
import ShareModelBlock from 'components/ShareBlock/ShareModelBlock';
import LocationPageHeader from 'components/LocationPage/LocationPageHeader';
import ChartBlock from 'components/LocationPage/ChartBlock';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Metric, ALL_METRICS } from 'common/metric';
import CompareMain from 'components/Compare/CompareMain';
import Explore, { ExploreMetric } from 'components/Explore';
import { County } from 'common/locations';
import Recommend from 'components/Recommend';
import {
  getDynamicIntroCopy,
  getRecommendations,
  getShareQuote,
  getFedLevel,
  getHarvardLevel,
  getModalCopyWithFedLevel,
  getModalCopyWithHarvardLevel,
} from 'common/utils/recommend';
import { mainContent } from 'cms-content/recommendations';
import { getRecommendationsShareUrl } from 'common/urls';
import { useLocationPageRegion } from 'common/regions/region_hooks';

// TODO: 180 is rough accounting for the navbar and searchbar;
// could make these constants so we don't have to manually update
const scrollTo = (div: null | HTMLDivElement, offset: number = 180) =>
  div &&
  window.scrollTo({
    left: 0,
    top: div.offsetTop - offset,
    behavior: 'smooth',
  });

const ChartsHolder = (props: {
  projections: Projections;
  stateId: string;
  county: County;
  chartId: string;
  countyId: string;
}) => {
  const { chartId } = props;
  const projection = props.projections.primary;

  const region = useLocationPageRegion();

  const metricRefs = {
    [Metric.CASE_DENSITY]: useRef<HTMLDivElement>(null),
    [Metric.CASE_GROWTH_RATE]: useRef<HTMLDivElement>(null),
    [Metric.POSITIVE_TESTS]: useRef<HTMLDivElement>(null),
    [Metric.HOSPITAL_USAGE]: useRef<HTMLDivElement>(null),
    [Metric.CONTACT_TRACING]: useRef<HTMLDivElement>(null),
  };
  const shareBlockRef = useRef<HTMLDivElement>(null);
  const exploreChartRef = useRef<HTMLDivElement>(null);
  const recommendationsRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const { pathname, hash } = useLocation();
  const isRecommendationsShareUrl = pathname.includes('recommendations');

  const defaultExploreMetric =
    hash === '#explore-chart'
      ? ExploreMetric.HOSPITALIZATIONS
      : ExploreMetric.CASES;

  useEffect(() => {
    const scrollToChart = () => {
      const timeoutId = setTimeout(() => {
        if (chartId in metricRefs) {
          const metricRef = metricRefs[(chartId as unknown) as Metric];
          if (metricRef.current) {
            scrollTo(metricRef.current);
          }
        }
      }, 200);
      return () => clearTimeout(timeoutId);
    };

    const scrollToRecommendations = () => {
      const timeoutId = setTimeout(() => {
        if (isRecommendationsShareUrl) {
          if (recommendationsRef.current) {
            scrollTo(recommendationsRef.current);
          }
        }
      }, 200);
      return () => clearTimeout(timeoutId);
    };

    scrollToChart();
    scrollToRecommendations();
  }, [chartId, metricRefs, isRecommendationsShareUrl]);

  const shareButtonProps = {
    chartId: props.chartId,
    stateId: props.stateId,
    countyId: props.countyId,
    county: props.county,
    stats: projection ? props.projections.getMetricValues() : {},
    projections: props.projections,
    isMobile,
  };

  const initialFipsList = useMemo(() => {
    return [props.projections.primary.fips];
  }, [props.projections.primary.fips]);

  const recommendationsIntro = getDynamicIntroCopy(
    projection,
    props.projections.getMetricValues(),
  );

  const recommendationsMainContent = getRecommendations(
    projection,
    mainContent.recommendations,
  );

  const recommendsShareUrl = getRecommendationsShareUrl(
    props.projections.primary.fips,
  );

  const alarmLevel = props.projections.getAlarmLevel();
  const recommendsShareQuote = getShareQuote(
    props.projections.locationName,
    alarmLevel,
  );

  const recommendationsFeedbackForm = `https://can386399.typeform.com/to/WSPYSGPe#source=can&id=${uuidv4()}&fips=${
    projection.fips
  }`;

  // TODO(Chelsi): make these 2 functions less redundant?
  const recommendationsFedModalCopy = getModalCopyWithFedLevel(
    projection,
    projection.locationName,
    props.projections.getMetricValues(),
  );

  const recommendationsHarvardModalCopy = getModalCopyWithHarvardLevel(
    projection,
    projection.locationName,
    props.projections.getMetricValues(),
  );

  // TODO(pablo): Create separate refs for signup and share
  return (
    <>
      {!projection ? (
        <NoCountyDetail
          countyId={props.county?.county_url_name}
          stateId={props.stateId}
        />
      ) : (
        <>
          <ChartContentWrapper>
            <LocationPageHeader
              projections={props.projections}
              stats={props.projections.getMetricValues()}
              onMetricClick={metric => scrollTo(metricRefs[metric].current)}
              onHeaderShareClick={() => scrollTo(shareBlockRef.current, -372)}
              onHeaderSignupClick={() => scrollTo(shareBlockRef.current)}
              onNewUpdateClick={() => scrollTo(exploreChartRef.current)}
              isMobile={isMobile}
            />
            <CompareMain
              stateName={props.projections.stateName}
              county={props.county}
              locationsViewable={6}
              stateId={props.stateId}
            />
            <MainContentInner>
              <Recommend
                introCopy={recommendationsIntro}
                recommendations={recommendationsMainContent}
                locationName={region.fullName}
                shareUrl={recommendsShareUrl}
                shareQuote={recommendsShareQuote}
                recommendationsRef={recommendationsRef}
                feedbackFormUrl={recommendationsFeedbackForm}
                fedLevel={getFedLevel(props.projections.primary)}
                harvardLevel={getHarvardLevel(props.projections.primary)}
                harvardModalLocationCopy={recommendationsHarvardModalCopy}
                fedModalLocationCopy={recommendationsFedModalCopy}
              />
              {ALL_METRICS.map(metric => (
                <ChartBlock
                  key={metric}
                  metric={metric}
                  projections={props.projections}
                  chartRef={metricRefs[metric]}
                  shareButtonProps={shareButtonProps}
                  isMobile={isMobile}
                  stateId={props.stateId}
                />
              ))}
            </MainContentInner>
            <MainContentInner ref={exploreChartRef} id="explore-chart">
              <Explore
                initialFipsList={initialFipsList}
                title="Cases, Deaths, and Hospitalizations"
                defaultMetric={defaultExploreMetric}
              />
            </MainContentInner>
          </ChartContentWrapper>
          <div ref={shareBlockRef} id="recommendationsTest">
            <ShareModelBlock {...shareButtonProps} />
          </div>
        </>
      )}
    </>
  );
};

export default ChartsHolder;
