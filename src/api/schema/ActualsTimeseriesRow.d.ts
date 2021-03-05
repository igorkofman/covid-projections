/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

/**
 * Cumulative confirmed or suspected cases.
 */
export type Cases = number | null;
/**
 * Cumulative deaths that are suspected or confirmed to have been caused by COVID-19.
 */
export type Deaths = number | null;
/**
 * Cumulative positive test results to date
 */
export type Positivetests = number | null;
/**
 * Cumulative negative test results to date
 */
export type Negativetests = number | null;
/**
 * Number of Contact Tracers
 */
export type Contacttracers = number | null;
/**
 *
 * Information about acute bed utilization details.
 *
 * Fields:
 *  * capacity - Current staffed acute bed capacity.
 *  * currentUsageTotal - Total number of acute beds currently in use
 *  * currentUsageCovid - Number of acute beds currently in use by COVID patients.
 *  * typicalUsageRate - Typical acute bed utilization rate.
 *
 */
export type Hospitalbeds = HospitalResourceUtilization;
/**
 * Total capacity for resource.
 */
export type Capacity = number | null;
/**
 * Currently used capacity for resource by all patients (COVID + Non-COVID)
 */
export type Currentusagetotal = number | null;
/**
 * Currently used capacity for resource by COVID
 */
export type Currentusagecovid = number | null;
/**
 * Typical used capacity rate for resource. This excludes any COVID usage.
 */
export type Typicalusagerate = number | null;
/**
 *
 * Information about ICU bed utilization details.
 *
 * Fields:
 *  * capacity - Current staffed ICU bed capacity.
 *  * currentUsageTotal - Total number of ICU beds currently in use
 *  * currentUsageCovid - Number of ICU beds currently in use by COVID patients.
 *  * typicalUsageRate - Typical ICU utilization rate.
 *
 */
export type Icubeds = HospitalResourceUtilization;
/**
 *
 * New confirmed or suspected cases.
 *
 *
 * New cases are a processed timeseries of cases - summing new cases may not equal
 * the cumulative case count.
 *
 * Processing steps:
 *  1. If a region does not report cases for a period of time but then begins reporting again,
 *     we will exclude the first day that reporting recommences. This first day likely includes
 *     multiple days worth of cases and can be misleading to the overall series.
 *  2. We remove any days with negative new cases.
 *  3. We apply an outlier detection filter to the timeseries, which removes any data
 *     points that seem improbable given recent numbers. Many times this is due to
 *     backfill of previously unreported cases.
 *
 */
export type Newcases = number | null;
/**
 *
 * New confirmed or suspected deaths.
 *
 *
 * New cases are a processed timeseries of cases - summing new cases may not equal
 * the cumulative case count.
 *
 * Processing steps:
 *  1. If a region does not report cases for a period of time but then begins reporting again,
 *     we will exclude the first day that reporting recommences. This first day likely includes
 *     multiple days worth of cases and can be misleading to the overall series.
 *  2. We remove any days with negative new cases.
 *  3. We apply an outlier detection filter to the timeseries, which removes any data
 *     points that seem improbable given recent numbers. Many times this is due to
 *     backfill of previously unreported cases.
 *
 */
export type Newdeaths = number | null;
/**
 * Number of vaccine doses distributed.
 */
export type Vaccinesdistributed = number | null;
/**
 *
 * Number of vaccinations initiated.
 *
 * This value may vary by type of vaccine, but for Moderna and Pfizer this indicates
 * number of people vaccinated with the first dose.
 *
 */
export type Vaccinationsinitiated = number | null;
/**
 *
 * Number of vaccinations completed.
 *
 * This value may vary by type of vaccine, but for Moderna and Pfizer this indicates
 * number of people vaccinated with both the first and second dose.
 *
 */
export type Vaccinationscompleted = number | null;
/**
 * Date of timeseries data point
 */
export type Date = string;

/**
 * Actual data for a specific day.
 */
export interface ActualsTimeseriesRow {
  cases: Cases;
  deaths: Deaths;
  positiveTests: Positivetests;
  negativeTests: Negativetests;
  contactTracers: Contacttracers;
  hospitalBeds: Hospitalbeds;
  icuBeds: Icubeds;
  newCases: Newcases;
  newDeaths: Newdeaths;
  vaccinesDistributed?: Vaccinesdistributed;
  vaccinationsInitiated?: Vaccinationsinitiated;
  vaccinationsCompleted?: Vaccinationscompleted;
  date: Date;
}
/**
 * Base model for API output.
 */
export interface HospitalResourceUtilization {
  capacity: Capacity;
  currentUsageTotal: Currentusagetotal;
  currentUsageCovid: Currentusagecovid;
  typicalUsageRate: Typicalusagerate;
}
