/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

export type Date = string;
/**
 * Number of hospital beds projected to be in-use or that were actually in use (if in the past)
 */
export type Hospitalbedsrequired = number;
/**
 * Number of hospital beds projected to be in-use or actually in use (if in the past)
 */
export type Hospitalbedcapacity = number;
/**
 * Number of ICU beds projected to be in-use or that were actually in use (if in the past)
 */
export type Icubedsinuse = number;
/**
 * Number of ICU beds projected to be in-use or actually in use (if in the past)
 */
export type Icubedcapacity = number;
/**
 * Number of ventilators projected to be in-use.
 */
export type Ventilatorsinuse = number;
/**
 * Total ventilator capacity.
 */
export type Ventilatorcapacity = number;
/**
 * Historical or Inferred Rt
 */
export type Rtindicator = number;
/**
 * Rt standard deviation
 */
export type Rtindicatorci90 = number;
/**
 * Number of cumulative deaths
 */
export type Cumulativedeaths = number;
/**
 * Number of cumulative infections
 */
export type Cumulativeinfected = number;
/**
 * Number of current infections
 */
export type Currentinfected = number;
/**
 * Number of people currently susceptible
 */
export type Currentsusceptible = number;
/**
 * Number of people currently exposed
 */
export type Currentexposed = number;

/**
 * Base model for API output.
 */
export interface CANPredictionTimeseriesRow {
  date: Date;
  hospitalBedsRequired: Hospitalbedsrequired;
  hospitalBedCapacity: Hospitalbedcapacity;
  ICUBedsInUse: Icubedsinuse;
  ICUBedCapacity: Icubedcapacity;
  ventilatorsInUse: Ventilatorsinuse;
  ventilatorCapacity: Ventilatorcapacity;
  RtIndicator: Rtindicator;
  RtIndicatorCI90: Rtindicatorci90;
  cumulativeDeaths: Cumulativedeaths;
  cumulativeInfected: Cumulativeinfected;
  currentInfected: Currentinfected;
  currentSusceptible: Currentsusceptible;
  currentExposed: Currentexposed;
}
