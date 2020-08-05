import React from 'react';
import { HOSPITAL_USAGE_LEVEL_INFO_MAP } from 'common/metrics/hospitalizations';
import { Column } from 'common/models/Projection';
import ChartZones from './ChartZones';
import { formatPercent } from 'common/utils';

const CAP_Y = 1;

const formatValue = (valueY: number) => formatPercent(valueY, 0);

const getTooltipBody = (valueY: number) =>
  valueY > CAP_Y
    ? `ICU headroom used > ${formatValue(CAP_Y)}`
    : `ICU headroom used ${formatValue(valueY)}`;

const ChartICUHeadroom = ({
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
    zones={HOSPITAL_USAGE_LEVEL_INFO_MAP}
    getTooltipBody={getTooltipBody}
    getPointText={formatValue}
    yTickFormat={formatValue}
  />
);

export default ChartICUHeadroom;
