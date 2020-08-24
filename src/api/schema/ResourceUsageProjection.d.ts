/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

/**
 * Shortfall of resource needed at the peak utilization
 */
export type Peakshortfall = number;
/**
 * Date of peak resource utilization
 */
export type Peakdate = string;
/**
 * Date when resource shortage begins
 */
export type Shortagestartdate = string;

/**
 * Resource usage projection data.
 */
export interface ResourceUsageProjection {
  peakShortfall: Peakshortfall;
  peakDate: Peakdate;
  shortageStartDate: Shortagestartdate;
}
