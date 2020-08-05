import React from 'react';
import ChartZones from './ChartZones';
import { CONTACT_TRACING_LEVEL_INFO_MAP } from 'common/metrics/contact_tracing';
import { Column } from 'common/models/Projection';
import { formatPercent } from 'common/utils';

const CAP_Y = 1;

const formatValue = (value: number) => formatPercent(value, 0);

const getTooltipBody = (valueY: number) =>
  `Contacts traced ${formatValue(valueY)}`;

const ChartContactTracing = ({
  columnData,
  height = 400,
}: {
  columnData: Column[];
  height?: number;
}) => (
  <ChartZones
    height={height}
    columnData={columnData}
    capY={CAP_Y}
    zones={CONTACT_TRACING_LEVEL_INFO_MAP}
    getTooltipBody={getTooltipBody}
    getPointText={formatValue}
    yTickFormat={formatValue}
  />
);

export default ChartContactTracing;
