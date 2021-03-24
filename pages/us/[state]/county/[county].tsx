import React from 'react';
import LocationHeader from '../../../../src/components/LocationPage/LocationHeader';

function CountyPage({ region, locationSummary }) {
  if (!locationSummary) {
    return <h1>no data for {region.fullName}</h1>;
  }
  const { metrics } = locationSummary;
  return (
    <div>
      <LocationHeader />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { state, county } = params;
  const { default: regions } = await import('../../../../src/common/regions');

  const region = regions.findCountyByUrlParams(state, county);
  // get projections

  const locationSummaries = await import(
    '../../../../src/common/location_summaries'
  );

  const locationSummary = locationSummaries.getSummaryFromFips(region.fipsCode);

  // TODO: Implement region.toJSON(), the props here need to be serializable
  return {
    props: {
      region: {
        fullName: region.fullName,
        name: region.name,
        fipsCode: region.fipsCode,
        population: region.population,
        state: {
          fipsCode: region.state.fipsCode,
          stateCode: region.state.stateCode,
        },
      },
      locationSummary,
    },
  };
}

export async function getStaticPaths() {
  const { default: regions } = await import('../../../../src/common/regions');

  const paths = regions.counties.map(
    county => `/us/${county.state.urlSegment}/county/${county.urlSegment}/`,
  );
  return { paths, fallback: false };
}

export default CountyPage;
