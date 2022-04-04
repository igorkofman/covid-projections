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
 *  * weeklyCovidAdmissions - Number of COVID patients admitted in the past week.
 *
 */
export type Hospitalbeds = HospitalResourceUtilizationWithAdmissions;
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
 * Number of COVID patients admitted in the past week.
 */
export type Weeklycovidadmissions = number | null;
/**
 *
 * Information about acute bed utilization details aggregated for the county's corresponding
 * Health Service Area (HSA). For CBSA, state, and country regions these fields are omitted.
 * For more on HSAs see: https://github.com/covid-projections/covid-data-model/blob/main/data/misc/README.md"
 *
 * Fields:
 *  * capacity - Current staffed acute bed capacity.
 *  * currentUsageTotal - Total number of acute beds currently in use
 *  * currentUsageCovid - Number of acute beds currently in use by COVID patients.
 *  * weeklyCovidAdmissions - Number of COVID patients admitted in the past week.
 *
 */
export type Hsahospitalbeds = HospitalResourceUtilizationWithAdmissions;
/**
 *
 * Information about ICU bed utilization details.
 *
 * Fields:
 *  * capacity - Current staffed ICU bed capacity.
 *  * currentUsageTotal - Total number of ICU beds currently in use
 *  * currentUsageCovid - Number of ICU beds currently in use by COVID patients.
 *
 */
export type Icubeds = HospitalResourceUtilization;
/**
 * Total capacity for resource.
 */
export type Capacity1 = number | null;
/**
 * Currently used capacity for resource by all patients (COVID + Non-COVID)
 */
export type Currentusagetotal1 = number | null;
/**
 * Currently used capacity for resource by COVID
 */
export type Currentusagecovid1 = number | null;
/**
 *
 * Information about ICU bed utilization details aggregated for the county's corresponding
 * Health Service Area (HSA). For CBSA, state, and country regions these fields are omitted.
 * For For more on HSAs see: https://github.com/covid-projections/covid-data-model/blob/main/data/misc/README.md"
 *
 * Fields:
 *  * capacity - Current staffed ICU bed capacity.
 *  * currentUsageTotal - Total number of ICU beds currently in use
 *  * currentUsageCovid - Number of ICU beds currently in use by COVID patients.
 *
 */
export type Hsaicubeds = HospitalResourceUtilization;
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
 * New confirmed or suspected COVID-19 deaths.
 *
 * New deaths is an estimate of deaths per day; summing new deaths may not equal the
 * cumulative death count.
 *
 * Processing steps:
 *  1. If a region does not report deaths for a period of time but then begins reporting again,
 *     we will exclude the first day that reporting recommences. This first day likely includes
 *     multiple days worth of deaths and can be misleading to the overall series.
 *  2. We remove any days with negative new deaths.
 *  3. We apply an outlier detection filter to the timeseries, which removes any data
 *     points that seem improbable given recent numbers. Many times this is due to
 *     backfill of previously unreported deaths.
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
 * Number of individuals who are fully vaccinated and have received a booster (or additional) dose.
 */
export type Vaccinationsadditionaldose = number | null;
/**
 * Total number of vaccine doses administered.
 */
export type Vaccinesadministered = number | null;
/**
 * Demographic distributions for administered vaccines.
 */
export type Vaccinesadministereddemographics = DemographicDistributions;
export type Age = {
  [k: string]: any;
} | null;
export type Race = {
  [k: string]: any;
} | null;
export type Ethnicity = {
  [k: string]: any;
} | null;
export type Sex = {
  [k: string]: any;
} | null;
/**
 * Demographic distributions for initiated vaccinations.
 */
export type Vaccinationsinitiateddemographics = DemographicDistributions;
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
  hsaHospitalBeds: Hsahospitalbeds;
  icuBeds: Icubeds;
  hsaIcuBeds: Hsaicubeds;
  newCases: Newcases;
  newDeaths: Newdeaths;
  vaccinesDistributed?: Vaccinesdistributed;
  vaccinationsInitiated?: Vaccinationsinitiated;
  vaccinationsCompleted?: Vaccinationscompleted;
  vaccinationsAdditionalDose?: Vaccinationsadditionaldose;
  vaccinesAdministered?: Vaccinesadministered;
  vaccinesAdministeredDemographics?: Vaccinesadministereddemographics;
  vaccinationsInitiatedDemographics?: Vaccinationsinitiateddemographics;
  date: Date;
}
/**
 * Base model for API output.
 */
export interface HospitalResourceUtilizationWithAdmissions {
  capacity: Capacity;
  currentUsageTotal: Currentusagetotal;
  currentUsageCovid: Currentusagecovid;
  weeklyCovidAdmissions: Weeklycovidadmissions;
}
/**
 * Base model for API output.
 */
export interface HospitalResourceUtilization {
  capacity: Capacity1;
  currentUsageTotal: Currentusagetotal1;
  currentUsageCovid: Currentusagecovid1;
}
/**
 * Distributions of demographic data.
 *
 * Note that different regions may have different demographic distributions for
 * the same field.  For instance, health departments in different states may report
 * different age ranges.
 *
 * The data provided matches the source distributions.
 */
export interface DemographicDistributions {
  age?: Age;
  race?: Race;
  ethnicity?: Ethnicity;
  sex?: Sex;
}
