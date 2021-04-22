import React from 'react';
import { EventCategory } from 'components/Analytics';
import {
  BannerContainer,
  InnerContainer,
  Body,
  ButtonsContainer,
  LargeButton,
} from './GetVaccinatedBanner.style';
import SiteSummaryJSON from 'assets/data/site-summary.json';
import { formatPercent, formatInteger } from 'common/utils';

const GetVaccinatedBanner: React.FC = () => {
  const { totalVaccinationsInitiated, totalPopulation } = SiteSummaryJSON.usa;
  const percentVaccinated = formatPercent(
    totalVaccinationsInitiated / totalPopulation,
  );

  return (
    <BannerContainer>
      <InnerContainer>
        <Body>
          <strong>{formatInteger(totalVaccinationsInitiated)}</strong> people (
          <strong>{percentVaccinated}</strong> of the U.S. population) have
          received at least one dose of the vaccine.
        </Body>
        <ButtonsContainer>
          <LargeButton
            href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/talk-about-vaccines.html"
            trackingCategory={EventCategory.HOMEPAGE_BANNER}
            trackingLabel="Homepage Banner: CDC Talk About Vaccines"
          >
            How to talk with friends and family about getting vaccinated
          </LargeButton>
        </ButtonsContainer>
      </InnerContainer>
    </BannerContainer>
  );
};

export default GetVaccinatedBanner;
