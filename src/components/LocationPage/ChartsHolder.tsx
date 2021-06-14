import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';
import {
  useCcviForFips,
  useScrollToElement,
  useBreakpoint,
  useLocationSummariesForFips,
  useShowPastPosition,
} from 'common/hooks';
import { ALL_METRICS } from 'common/metric';
import { Metric } from 'common/metricEnum';
import { Region, State, getStateName } from 'common/regions';
import { useProjectionsFromRegion } from 'common/utils/model';
import { LoadingScreen } from 'screens/LocationPage/LocationPage.style';
import { EventCategory, EventAction, trackEvent } from 'components/Analytics';
import CompareMain from 'components/Compare/CompareMain';
import ErrorBoundary from 'components/ErrorBoundary';
import Explore, { ExploreMetric } from 'components/Explore';
import Recommendations from './Recommendations';
import ShareModelBlock from 'components/ShareBlock/ShareModelBlock';
import VaccinationEligibilityBlock from 'components/VaccinationEligibilityBlock';
import VulnerabilitiesBlock from 'components/VulnerabilitiesBlock';
import ChartBlock from './ChartBlock';
import LocationPageBlock from './LocationPageBlock';
import { WidthContainer } from './LocationPageBlock.style';
import { LocationPageContentWrapper, BelowTheFold } from './ChartsHolder.style';
import { summaryToStats } from 'components/NewLocationPage/SummaryStat/utils';
import AboveTheFold from 'components/NewLocationPage/AboveTheFold/AboveTheFold';
import {
  SparkLineMetric,
  SparkLineToExploreMetric,
} from 'components/NewLocationPage/SparkLineBlock/utils';
import HomepageUpsell from 'components/HomepageUpsell/HomepageUpsell';
import TestChartBlock from './Test-ChartBlock';
import { CHART_GROUPS } from 'components/Charts/Redesign/Groupings';

// TODO: 100 is rough accounting for the navbar;
// could make these constants so we don't have to manually update
const scrollTo = (div: null | HTMLDivElement, offset: number = 100) =>
  div &&
  window.scrollTo({
    left: 0,
    top: div.offsetTop - offset,
    behavior: 'smooth',
  });

interface ChartsHolderProps {
  region: Region;
  chartId: string;
}

const ChartsHolder = React.memo(({ region, chartId }: ChartsHolderProps) => {
  const projections = useProjectionsFromRegion(region);

  const locationSummary = useLocationSummariesForFips(region.fipsCode);

  const caseDensityRef = useRef<HTMLDivElement>(null);
  const caseGrowthRateRef = useRef<HTMLDivElement>(null);
  const positiveTestsRef = useRef<HTMLDivElement>(null);
  const hospitalUsageRef = useRef<HTMLDivElement>(null);
  const vaccinationsRef = useRef<HTMLDivElement>(null);
  const metricRefs = useMemo(
    () => ({
      [Metric.CASE_DENSITY]: caseDensityRef,
      [Metric.CASE_GROWTH_RATE]: caseGrowthRateRef,
      [Metric.POSITIVE_TESTS]: positiveTestsRef,
      [Metric.HOSPITAL_USAGE]: hospitalUsageRef,
      [Metric.VACCINATIONS]: vaccinationsRef,
    }),
    [],
  );
  const shareBlockRef = useRef<HTMLDivElement>(null);
  const exploreChartRef = useRef<HTMLDivElement>(null);
  const recommendationsRef = useRef<HTMLDivElement>(null);

  const isMobile = useBreakpoint(600);
  useScrollToElement();

  const { pathname, hash } = useLocation();
  const isRecommendationsShareUrl = pathname.includes('recommendations');

  const [currentExploreMetric, setCurrentExploreMetric] = useState<
    ExploreMetric
  >(ExploreMetric.CASES);

  useEffect(() => {
    if (hash === '#explore-chart') {
      setCurrentExploreMetric(ExploreMetric.HOSPITALIZATIONS);
    }
  }, [hash]);

  const [scrolledWithRef, setScrolledWithRef] = useState(false);

  useEffect(() => {
    const scrollToChart = () => {
      const timeoutId = setTimeout(() => {
        if (chartId in metricRefs) {
          const metricRef = metricRefs[(chartId as unknown) as Metric];
          if (metricRef.current && !scrolledWithRef) {
            setScrolledWithRef(true);
            scrollTo(metricRef.current);
          }
        }
      }, 200);
      return () => clearTimeout(timeoutId);
    };

    const scrollToRecommendations = () => {
      const timeoutId = setTimeout(() => {
        if (isRecommendationsShareUrl) {
          if (recommendationsRef.current && !scrolledWithRef) {
            setScrolledWithRef(true);
            scrollTo(recommendationsRef.current);
          }
        }
      }, 200);
      return () => clearTimeout(timeoutId);
    };

    scrollToChart();
    scrollToRecommendations();
  }, [chartId, metricRefs, isRecommendationsShareUrl, scrolledWithRef]);

  const initialFipsList = useMemo(() => [region.fipsCode], [region.fipsCode]);

  const ccviScores = useCcviForFips(region.fipsCode);

  const onClickAlertSignup = useCallback(() => {
    trackEvent(
      EventCategory.ENGAGEMENT,
      EventAction.CLICK,
      `Location Header: Receive Alerts`,
    );
    scrollTo(shareBlockRef.current);
  }, []);

  const onClickShare = useCallback(() => {
    scrollTo(shareBlockRef.current, -352);
  }, []);

  const onClickMetric = useCallback(
    (metric: Metric) => {
      trackEvent(
        EventCategory.METRICS,
        EventAction.CLICK,
        `Location Header Stats: ${Metric[metric]}`,
      );
      scrollTo(metricRefs[metric].current);
    },
    [metricRefs],
  );

  const onClickSparkLine = useCallback((metric: SparkLineMetric) => {
    trackEvent(
      EventCategory.METRICS,
      EventAction.CLICK,
      `Spark line: ${SparkLineMetric[metric]}`,
    );
    setCurrentExploreMetric(SparkLineToExploreMetric[metric]);
    scrollTo(exploreChartRef.current);
  }, []);

  const showHomepageUpsell = useShowPastPosition(3000);

  if (!locationSummary) {
    return null;
  }
  const stats = summaryToStats(locationSummary);

  // TODO(pablo): Create separate refs for signup and share
  return (
    <>
      <LocationPageContentWrapper>
        <AboveTheFold
          region={region}
          locationSummary={locationSummary}
          onClickMetric={onClickMetric}
          onClickAlertSignup={onClickAlertSignup}
          onClickShare={onClickShare}
          onClickSparkLine={onClickSparkLine}
        />
        <BelowTheFold>
          <WidthContainer>
            <LocationPageBlock>
              <VaccinationEligibilityBlock region={region} />
            </LocationPageBlock>
            <LocationPageBlock>
              <CompareMain
                stateName={getStateName(region) || region.name} // rename prop
                locationsViewable={6}
                stateId={(region as State).stateCode || undefined}
                region={region}
              />
            </LocationPageBlock>
            {!projections ? (
              <LoadingScreen />
            ) : (
              <LocationPageBlock>
                <Recommendations
                  region={region}
                  projections={projections}
                  recommendationsRef={recommendationsRef}
                />
              </LocationPageBlock>
            )}
            {/* {ALL_METRICS.map(metric => ( */}
            {CHART_GROUPS.map(group => (
              <ErrorBoundary key={group.groupHeader}>
                {!projections ? (
                  <LoadingScreen />
                ) : (
                  <LocationPageBlock>
                    {/* <ChartBlock
                      metric={metric}
                      projections={projections}
                      chartRef={metricRefs[metric]}
                      isMobile={isMobile}
                      region={region}
                      stats={stats}
                    /> */}
                    <TestChartBlock
                      // metric={metric}
                      projections={projections}
                      // chartRef={metricRefs[metric]}
                      isMobile={isMobile}
                      region={region}
                      stats={stats}
                    />
                  </LocationPageBlock>
                )}
              </ErrorBoundary>
            ))}
            <LocationPageBlock id="vulnerabilities">
              <VulnerabilitiesBlock scores={ccviScores} region={region} />
            </LocationPageBlock>
            <LocationPageBlock ref={exploreChartRef} id="explore-chart">
              <Explore
                initialFipsList={initialFipsList}
                title="Trends"
                currentMetric={currentExploreMetric}
                setCurrentMetric={setCurrentExploreMetric}
              />
            </LocationPageBlock>
          </WidthContainer>
        </BelowTheFold>
      </LocationPageContentWrapper>
      <div ref={shareBlockRef}>
        <ShareModelBlock
          region={region}
          projections={projections}
          stats={stats}
        />
      </div>
      <HomepageUpsell showHomepageUpsell={showHomepageUpsell} />
    </>
  );
});

export default ChartsHolder;
