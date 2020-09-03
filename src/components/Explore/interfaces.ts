import { Column } from 'common/models/Projection';

export enum SeriesType {
  LINE,
  BAR,
}

export interface SeriesParams {
  stroke?: string;
}

export interface Series {
  data: Column[];
  type: SeriesType;
  label: string;
  tooltipLabel: string;
  params?: SeriesParams;
}

export enum ExploreMetric {
  CASES,
  DEATHS,
  HOSPITALIZATIONS,
  ICU_HOSPITALIZATIONS,
}
