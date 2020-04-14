import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import STATE_CENTERS from '../../enums/us_state_centers';
import {
  COLOR_MAP,
  FIPS_CODE_TO_CALCULATED_INTERVENTION_COLOR,
} from 'enums/interventions';

const CountyMap = ({
  selectedCounty,
  setSelectedCounty,
  fill,
  stateSummary = {},
}) => {
  const { id: location } = useParams();
  const _location = location.toUpperCase();
  const state = STATE_CENTERS[_location];
  const counties = require(`./countyTopoJson/${_location.toUpperCase()}.json`);
  const countiesWithData =
    stateSummary && stateSummary.counties_with_data
      ? stateSummary.counties_with_data
      : [];
  const [content, setContent] = useState('');

  const getFillColor = geoId => {
    return FIPS_CODE_TO_CALCULATED_INTERVENTION_COLOR[geoId] || fill;
  };

  return (
    <div>
      <ComposableMap
        projection={state.StateCode === 'AK' ? 'geoAlbers' : 'geoMercator'}
        data-tip=""
        projectionConfig={{
          rotate: state.rotate ? state.rotate : null,
          scale: state.scale ? state.scale : 4000,
        }}
      >
        <ZoomableGroup
          center={[state.Longitude, state.Latitude]}
          disablePanning={true}
        >
          <Geographies geography={counties}>
            {({ geographies }) =>
              geographies.map(geo => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fillOpacity={
                      selectedCounty &&
                      selectedCounty.full_fips_code === geo.properties.GEOID
                        ? 0.5
                        : 1
                    }
                    fill={
                      countiesWithData.includes(geo.properties.GEOID)
                        ? getFillColor(geo.properties.GEOID)
                        : COLOR_MAP.GREY
                    }
                    stroke={
                      countiesWithData.includes(geo.properties.GEOID)
                        ? 'white'
                        : 'hsl(0,0%,50%)'
                    }
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setContent(NAME);
                    }}
                    onMouseLeave={() => {
                      setContent('');
                    }}
                    onClick={() => setSelectedCounty(geo.properties.GEOID)}
                    style={{
                      cursor: 'pointer',
                      hover: {
                        // fill: '#A0AEC0',
                        opacity: '0.5',
                        outline: 'none',
                      },
                      pressed: {
                        // fill: '#A0AEC0',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default CountyMap;
