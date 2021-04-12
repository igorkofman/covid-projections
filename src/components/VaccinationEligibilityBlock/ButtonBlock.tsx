import React from 'react';
import { EventAction, EventCategory } from 'components/Analytics';
import { ButtonsContainer } from './ButtonBlock.style';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import {
  LargeOutlinedButton,
  LargeFilledButton,
} from 'components/ButtonSystem';

const ButtonBlock: React.FC<{
  stateVaccinationUrl: string;
  stateCode: string;
  sourceName: string;
}> = ({ stateVaccinationUrl, stateCode, sourceName }) => {
  const sharedTrackingProps = {
    trackingCategory: EventCategory.VACCINATION,
    trackingAction: EventAction.CLICK_LINK,
  };

  return (
    <ButtonsContainer>
      <LargeFilledButton
        $highlighted={true}
        href={'https://vaccinefinder.org/'}
        {...sharedTrackingProps}
        trackingLabel="VaccineFinder"
        endIcon={<OpenInNewIcon />}
      >
        VaccineFinder
      </LargeFilledButton>
      <LargeOutlinedButton
        $highlighted={false}
        href={stateVaccinationUrl}
        {...sharedTrackingProps}
        trackingLabel={`State source, ${stateCode}`}
        endIcon={<OpenInNewIcon />}
      >
        {sourceName}
      </LargeOutlinedButton>
    </ButtonsContainer>
  );
};

export default ButtonBlock;
