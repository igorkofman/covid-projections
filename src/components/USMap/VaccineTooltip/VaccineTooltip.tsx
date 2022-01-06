import { formatPercent } from 'common/utils';
import TextAndIconWithSpecialWrapping from 'components/TextAndIconWithSpecialWrapping/TextAndIconWithSpecialWrapping';
import { VaccineProgressBar } from 'components/VaccineProgressBar/VaccineProgressBar';
import React from 'react';
import {
  LocationNameArrowIcon,
  MoreDataLinkContainer,
  Container,
  Inner,
  LocationName,
  ProgressBarWrapper,
  Row,
  Title,
  Value,
  MoreDataArrowIcon,
} from './VaccineTooltip.style';
import { State } from 'common/regions';
import { trackEvent, EventAction, EventCategory } from 'components/Analytics';
import { TextButton } from 'components/ButtonSystem';
import Box from '@material-ui/core/Box';
import { COLOR_MAP } from 'common/colors';

export interface VaccineTooltipProps {
  state: State;
  vaccinationsInitiated: number;
  vaccinationsCompleted: number;
  /**
   * Whether to include "More data" link at the bottom of tooltip.  This is
   * typically used when the USMap is using `TooltipMode.ACTIVATE_ON_CLICK`
   * since we then need a link within the Tooltip to actually navigate to
   * the location page.
   */
  addMoreDataLink?: boolean;
}

const VaccineTooltip: React.FC<VaccineTooltipProps> = ({
  state,
  vaccinationsInitiated,
  vaccinationsCompleted,
  addMoreDataLink = false,
}) => {
  const locationName = state.fullName;
  return (
    <Container>
      <Inner>
        <LocationName $center={addMoreDataLink}>
          {addMoreDataLink ? (
            locationName
          ) : (
            <TextAndIconWithSpecialWrapping
              text={locationName}
              icon={<LocationNameArrowIcon />}
            />
          )}
        </LocationName>
        <Row>
          <Title>1+ dose</Title>
          <Value>
            {vaccinationsInitiated === 0
              ? '--'
              : formatPercent(vaccinationsInitiated)}
          </Value>
        </Row>
        <Row>
          <Title>Fully vaccinated</Title>
          <Value>
            {vaccinationsCompleted === 0
              ? '--'
              : formatPercent(vaccinationsCompleted)}
          </Value>
        </Row>
        {vaccinationsInitiated !== 0 && vaccinationsCompleted !== 0 ? (
          <ProgressBarWrapper>
            <VaccineProgressBar
              locationName={locationName}
              vaccinationsInitiated={vaccinationsInitiated}
              vaccinationsCompleted={vaccinationsCompleted}
            />
          </ProgressBarWrapper>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            color={COLOR_MAP.GRAY.DARK}
          >
            No vaccination data available
          </Box>
        )}
      </Inner>
      {addMoreDataLink && (
        <MoreDataLinkContainer>
          <TextButton
            href={state.relativeUrl}
            aria-label={locationName}
            onClick={() => {
              trackMapClick(locationName);
            }}
          >
            More data
            <MoreDataArrowIcon />
          </TextButton>
        </MoreDataLinkContainer>
      )}
    </Container>
  );
};

function trackMapClick(label: string) {
  trackEvent(EventCategory.MAP, EventAction.NAVIGATE, label);
}

export default VaccineTooltip;
