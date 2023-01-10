/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Run 'yarn update-api-types' to regenerate.
 */

/**
 * Date of timeseries data point
 */
export type Date = string;
/**
 * 2-letter ISO-3166 Country code.
 */
export type Country = string;
/**
 * 2-letter ANSI state code.
 */
export type State = string | null;
/**
 * County name
 */
export type County = string | null;
/**
 * FIPS Code. FIPS codes are either 2-digit state codes, 5-digit county codes, 5-digit CBSA codes, or 1-digit '0' for the entire USA.
 */
export type Fips = string;
/**
 * Latitude of point within the state or county
 */
export type Lat = number | null;
/**
 * Longitude of point within the state or county
 */
export type Long = number | null;
/**
 * Location ID as defined here: https://github.com/covidatlas/li/blob/master/docs/reports-v1.md#general-notes
 */
export type Locationid = string;
/**
 * Actuals for given day
 */
export type Actuals1 = Actuals;
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
 * Metrics for given day
 */
export type Metrics1 = Metrics;
/**
 * Ratio of people who test positive calculated using a 7-day rolling average.
 */
export type Testpositivityratio = number | null;
/**
 * Method used to determine test positivity ratio.
 */
export type TestPositivityRatioMethod =
  | 'CMSTesting'
  | 'CDCTesting'
  | 'HHSTesting'
  | 'Valorum'
  | 'covid_tracking'
  | 'other';
/**
 * The number of cases per 100k population calculated using a 7-day rolling average.
 */
export type Casedensity = number | null;
/**
 * The number of new cases per 100k population over the last week.
 */
export type Weeklynewcasesper100K = number | null;
/**
 * Ratio of currently hired tracers to estimated tracers needed based on 7-day daily case average.
 */
export type Contacttracercapacityratio = number | null;
/**
 * R_t, or the estimated number of infections arising from a typical case.
 */
export type Infectionrate = number | null;
/**
 * 90th percentile confidence interval upper endpoint of the infection rate.
 */
export type Infectionrateci90 = number | null;
/**
 * Ratio of staffed intensive care unit (ICU) beds that are currently in use.
 */
export type Icucapacityratio = number | null;
/**
 * Ratio of staffed hospital beds that are currently in use by COVID patients. For counties, this is calculated using HSA-level data for the corresponding area.
 */
export type Bedswithcovidpatientsratio = number | null;
/**
 * Number of COVID patients per 100k population admitted in the past week. For counties, this is calculated using HSA-level data for the corresponding area.
 */
export type Weeklycovidadmissionsper100K = number | null;
/**
 * Ratio of population that has initiated vaccination.
 */
export type Vaccinationsinitiatedratio = number | null;
/**
 * Ratio of population that has completed vaccination.
 */
export type Vaccinationscompletedratio = number | null;
/**
 * Ratio of population that are fully vaccinated and have received a booster (or additional) dose.
 */
export type Vaccinationsadditionaldoseratio = number | null;
/**
 * Risk Levels for given day
 */
export type Risklevels = RiskLevelsRow;
/**
 * COVID Risk Level.
 *
 * ## Risk Level Definitions
 *  *Low* - On track to contain COVID
 *  *Medium* - Slow disease growth
 *  *High* - At risk of outbreak
 *  *Critical* - Active or imminent outbreak
 *  *Unknown* - Risk unknown
 *  *Extreme* - Severe outbreak
 */
export type RiskLevel = 0 | 1 | 2 | 3 | 4 | 5;
/**
 * CDC community transmission level.
 */
export type CDCTransmissionLevel = 0 | 1 | 2 | 3 | 4;
/**
 * 3 digit Health Service Area identification code. For CBSA, state, and country regions hsa is omitted. For more on HSAs see: https://github.com/covid-projections/covid-data-model/blob/main/data/misc/README.md
 */
export type Hsa = string | null;
/**
 * Name of Health Service Area. For CBSA, state, and country regions hsaName is omitted. For more on HSAs see: https://github.com/covid-projections/covid-data-model/blob/main/data/misc/README.md
 */
export type Hsaname = string | null;
/**
 * Total Population of county's corresponding Health Service Area. For CBSA, state, and country regions hsaPopulation is omitted. For more on HSAs see: https://github.com/covid-projections/covid-data-model/blob/main/data/misc/README.md
 */
export type Hsapopulation = number | null;
/**
 * Community level.
 */
export type CommunityLevel = 0 | 1 | 2;
/**
 * Date of timeseries data point
 */
export type Date1 = string;
/**
 * Flattened timeseries data for multiple regions.
 */
export type AggregateFlattenedTimeseries = RegionTimeseriesRowWithHeader[];

/**
 * Prediction timeseries row with location information.
 */
export interface RegionTimeseriesRowWithHeader {
  date: Date;
  country: Country;
  state: State;
  county: County;
  fips: Fips;
  lat: Lat;
  long: Long;
  locationId: Locationid;
  actuals: Actuals1;
  metrics: Metrics1;
  riskLevels: Risklevels;
  /**
   *
   * Community transmission level for region, calculated using the CDC definition.
   *
   * Possible values:
   *     - 0: Low
   *     - 1: Moderate
   *     - 2: Substantial
   *     - 3: High
   *     - 4: Unknown
   *
   * See [definitions of CDC community transmission levels](
   * https://covid.cdc.gov/covid-data-tracker/#cases_community) for more
   * details.
   *
   * Note that the value may differ from what the CDC website reports
   * given we have different data sources. We have also introduced an
   * "Unknown" level for when both case data and test positivity data are
   * missing for at least 15 days. The CDC does not have an "Unknown"
   * level and instead will designate a location as "Low" when case and
   * test positivity data are missing.
   *
   */
  cdcTransmissionLevel: CDCTransmissionLevel;
  hsa: Hsa;
  hsaName: Hsaname;
  hsaPopulation: Hsapopulation;
  communityLevels?: CommunityLevelsTimeseriesRow | null;
}
/**
 * Known actuals data.
 */
export interface Actuals {
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
/**
 * Calculated metrics data based on known actuals.
 */
export interface Metrics {
  testPositivityRatio: Testpositivityratio;
  testPositivityRatioDetails?: TestPositivityRatioDetails | null;
  caseDensity: Casedensity;
  weeklyNewCasesPer100k: Weeklynewcasesper100K;
  contactTracerCapacityRatio: Contacttracercapacityratio;
  infectionRate: Infectionrate;
  infectionRateCI90: Infectionrateci90;
  icuCapacityRatio: Icucapacityratio;
  bedsWithCovidPatientsRatio: Bedswithcovidpatientsratio;
  weeklyCovidAdmissionsPer100k: Weeklycovidadmissionsper100K;
  vaccinationsInitiatedRatio?: Vaccinationsinitiatedratio;
  vaccinationsCompletedRatio?: Vaccinationscompletedratio;
  vaccinationsAdditionalDoseRatio?: Vaccinationsadditionaldoseratio;
}
/**
 * Details about how the test positivity ratio was calculated.
 */
export interface TestPositivityRatioDetails {
  /**
   * Source data for test positivity ratio.
   */
  source: TestPositivityRatioMethod;
}
/**
 * Base model for API output.
 */
export interface RiskLevelsRow {
  /**
   * Overall risk level for region .
   */
  overall: RiskLevel;
  /**
   * Case density risk level for region.
   */
  caseDensity: RiskLevel;
}
/**
 * Timeseries data for community levels.
 */
export interface CommunityLevelsTimeseriesRow {
  /**
   *
   * CDC Community level for county, as provided by the CDC.
   *
   * Possible values:
   *     - 0: Low
   *     - 1: Medium
   *     - 2: High
   *
   * See https://www.cdc.gov/coronavirus/2019-ncov/science/community-levels.html
   * for details about how the Community Level is calculated and should be
   * interpretted.
   *
   * Note that we provide two versions of the Community Level. One is called
   * canCommunityLevel which is calculated on a daily basis using CAN's data
   * sources and is available for states, counties, and metros.  The other is
   * called cdcCommunityLevel and is the raw Community Level published by the
   * CDC. It is only available for counties, and updates on a weekly basis.
   *
   */
  cdcCommunityLevel: CommunityLevel;
  /**
   *
   * Community level for region, calculated using the CDC definition but with CAN
   * data sources.
   *
   * Possible values:
   *     - 0: Low
   *     - 1: Medium
   *     - 2: High
   *
   * See https://www.cdc.gov/coronavirus/2019-ncov/science/community-levels.html
   * for details about how the Community Level is calculated and should be
   * interpretted.
   *
   * Note that we provide two versions of the Community Level. One is called
   * canCommunityLevel which is calculated on a daily basis using CAN's data
   * sources and is available for states, counties, and metros.  The other is
   * called cdcCommunityLevel and is the raw Community Level published by the
   * CDC. It is only available for counties, and updates on a weekly basis.
   *
   */
  canCommunityLevel: CommunityLevel;
  date: Date1;
}
