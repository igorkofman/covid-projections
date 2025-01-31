import React from 'react';
import {
  MainWrapper,
  HeaderContainer,
  GridContainer,
  GridItemHeader,
  GridItemMap,
  GridItemOverview,
  GridItemSparkLines,
  MapOutsideGrid,
  ContentContainer,
  GridItemMasks,
  GridItemTransmissionMetrics,
} from './AboveTheFold.style';
import SparkLineBlock from '../SparkLineBlock';
import LocationName from '../LocationName';
import LocationOverview from '../LocationOverview';
import { CountyMap } from '../CountyMap';
import HeaderButtons from '../HeaderButtons';
import { Region } from 'common/regions';
import { LocationSummary } from 'common/location_summaries';
import { DesktopOnly, MobileOnly } from '../Shared/Shared.style';
import VaccineButton from 'components/NewLocationPage/HeaderButtons/VaccineButton';
import { Metric } from 'common/metricEnum';
import { SparkLineMetric } from '../SparkLineBlock/utils';
import { MasksCard, TransmissionMetricsCard } from '../ClickableCard';
import { Level } from 'common/level';
import { HiatusBanner } from 'components/Banner/HiatusBanner';

interface AboveTheFoldProps {
  region: Region;
  locationSummary: LocationSummary;
  onClickAlertSignup: () => void;
  onClickShare: () => void;
  onClickMetric?: (metric: Metric) => void;
  onClickSparkLine: (metric: SparkLineMetric) => void;
  onClickMasksCard: () => void;
  onClickTransmissionMetricsCard: () => void;
}

const AboveTheFold: React.FC<AboveTheFoldProps> = React.memo(
  ({
    region,
    locationSummary,
    onClickMetric,
    onClickAlertSignup,
    onClickShare,
    onClickSparkLine,
    onClickMasksCard,
    onClickTransmissionMetricsCard,
  }) => {
    const showMasksCard = locationSummary.level === Level.HIGH;
    return (
      <MainWrapper>
        <HiatusBanner type="location" />
        <ContentContainer>
          <GridContainer showMasksCard={showMasksCard}>
            <GridItemHeader>
              <HeaderContainer>
                <LocationName region={region} />
                <DesktopOnly>
                  <HeaderButtons region={region} onClickShare={onClickShare} />
                </DesktopOnly>
                <MobileOnly>
                  <VaccineButton />
                </MobileOnly>
              </HeaderContainer>
            </GridItemHeader>
            <GridItemOverview>
              <LocationOverview
                region={region}
                locationSummary={locationSummary}
                onClickMetric={onClickMetric}
                onClickShare={onClickShare}
              />
            </GridItemOverview>
            <GridItemSparkLines>
              <SparkLineBlock
                region={region}
                onClickSparkLine={onClickSparkLine}
              />
            </GridItemSparkLines>
            {showMasksCard && (
              <GridItemMasks>
                <MasksCard onClick={onClickMasksCard} />
              </GridItemMasks>
            )}
            <GridItemTransmissionMetrics>
              <TransmissionMetricsCard
                onClick={onClickTransmissionMetricsCard}
              />
            </GridItemTransmissionMetrics>
            <GridItemMap>
              <CountyMap region={region} />
            </GridItemMap>
          </GridContainer>
          <MapOutsideGrid>
            <CountyMap region={region} />
          </MapOutsideGrid>
        </ContentContainer>
      </MainWrapper>
    );
  },
);

export default AboveTheFold;
