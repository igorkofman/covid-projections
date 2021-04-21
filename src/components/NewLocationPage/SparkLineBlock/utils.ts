import takeRight from 'lodash/takeRight';
import { max as d3Max } from 'd3-array';
import { SeriesType } from 'components/Explore/interfaces';
import { cleanSeries } from 'components/Explore/utils';
import { Column, DatasetId, Projection } from 'common/models/Projection';
import { fetchProjectionsRegion } from 'common/utils/model';
import { assert } from 'common/utils';
import { Region } from 'common/regions';

export const daysToChart = 30;

export enum SparkLineMetric {
  CASES,
  DEATHS,
  HOSPITALIZATIONS,
}

export const SPARK_LINE_METRICS = [
  SparkLineMetric.CASES,
  SparkLineMetric.DEATHS,
  SparkLineMetric.HOSPITALIZATIONS,
];

export interface Series {
  datasetId: DatasetId;
  type: SeriesType; // only keep if i want to pass in the array of series (rather than raw+smoothed individually)
}

export interface SeriesWithData extends Series {
  data: Column[];
}

interface MetricDescription {
  title: string;
  seriesList: Series[];
}

export const sparkLinesMetricData: {
  [metric in SparkLineMetric]: MetricDescription;
} = {
  [SparkLineMetric.CASES]: {
    title: 'Cases',
    seriesList: [
      {
        datasetId: 'rawDailyCases',
        type: SeriesType.BAR,
      },
      {
        datasetId: 'smoothedDailyCases',
        type: SeriesType.LINE,
      },
    ],
  },
  [SparkLineMetric.DEATHS]: {
    title: 'Deaths',
    seriesList: [
      {
        datasetId: 'rawDailyDeaths',
        type: SeriesType.BAR,
      },
      {
        datasetId: 'smoothedDailyDeaths',
        type: SeriesType.LINE,
      },
    ],
  },
  [SparkLineMetric.HOSPITALIZATIONS]: {
    title: 'Hospitalizations',
    seriesList: [
      {
        datasetId: 'rawHospitalizations',
        type: SeriesType.BAR,
      },
      {
        datasetId: 'smoothedHospitalizations',
        type: SeriesType.LINE,
      },
    ],
  },
};

/**
 * Returns both the raw and smoothed series for the given metric.
 * Raw series used by bar chart, smoothed series used by line chart.
 */
export function getAllSeriesForMetric(
  seriesList: Series[],
  projection: Projection,
): SeriesWithData[] {
  return seriesList.map((item: Series) => ({
    ...item,
    data: cleanSeries(projection.getDataset(item.datasetId)),
  }));
}

export function getSparkLineSeriesFromProjection(
  seriesList: Series[],
  projection: Projection,
) {
  return getAllSeriesForMetric(seriesList, projection);
}

function getMaxY(series: Column[]) {
  return d3Max(series, (d: Column) => d.y);
}

export function getOverallMaxY(seriesA: Column[], seriesB: Column[]) {
  const maxA = getMaxY(seriesA);
  const maxB = getMaxY(seriesB);
  assert(maxA, 'Maximum value unexpectedly not found'); // theres probably a better way
  assert(maxB, 'Maximum value unexpectedly not found');
  return Math.max(maxA, maxB);
}

// Gets most recent 30 days of data
export function getDataFromSeries(series: SeriesWithData) {
  return takeRight(series.data, daysToChart);
}

// For SparkLineBlock.stories.tsx
export async function getProjectionForRegion(
  region: Region,
): Promise<Projection> {
  const projections = await fetchProjectionsRegion(region);
  return projections.primary;
}
