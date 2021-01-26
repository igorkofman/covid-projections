import { fromPairs } from 'lodash';
import { State, County, MetroArea } from 'common/regions';

export interface StateVaccinationInfo {
  hidden: boolean;
  stateCode: string;
  eligibilityInfoUrl: string;
  vaccinationSignupUrl?: string;
}

export const stateVaccinationInfo: StateVaccinationInfo[] = [
  {
    hidden: false,
    stateCode: 'AL',
    eligibilityInfoUrl:
      'https://www.alabamapublichealth.gov/covid19/vaccine.html#availability',
    vaccinationSignupUrl:
      'https://www.alabamapublichealth.gov/covid19/vaccine.html#hotline',
  },
  {
    hidden: false,
    stateCode: 'AK',
    eligibilityInfoUrl:
      'http://dhss.alaska.gov/dph/epi/id/pages/COVID-19/vaccine.aspx',
    vaccinationSignupUrl:
      'https://alaska-dhss.maps.arcgis.com/apps/webappviewer/index.html?id=3d1dff7f0e544edbb18c9039b0473aa5',
  },
  {
    hidden: false,
    stateCode: 'AZ',
    eligibilityInfoUrl:
      'https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/novel-coronavirus/vaccine/covid19-vp-infographic-eng.pdf',
    vaccinationSignupUrl:
      'https://www.azdhs.gov/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/index.php#novel-coronavirus-find-vaccine',
  },
  {
    hidden: false,
    stateCode: 'AR',
    eligibilityInfoUrl:
      'https://www.healthy.arkansas.gov/programs-services/topics/covid-19-vaccination-plan',
    vaccinationSignupUrl:
      'https://www.healthy.arkansas.gov/programs-services/topics/covid-19-map-of-1-a-pharmacy-locations',
  },
  {
    hidden: false,
    stateCode: 'CA',
    eligibilityInfoUrl: 'https://covid19.ca.gov/vaccines',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'CO',
    eligibilityInfoUrl:
      'https://covid19.colorado.gov/for-coloradans/vaccine/vaccine-for-coloradans',
    vaccinationSignupUrl:
      'https://covid19.colorado.gov/for-coloradans/vaccine/where-can-i-get-vaccinated',
  },
  {
    hidden: false,
    stateCode: 'CT',
    eligibilityInfoUrl:
      'https://portal.ct.gov/Coronavirus/COVID-19-Vaccinations',
    vaccinationSignupUrl: 'https://dphsubmissions.ct.gov/OnlineVaccine',
  },
  {
    hidden: false,
    stateCode: 'DE',
    eligibilityInfoUrl: 'https://coronavirus.delaware.gov/vaccine/',
    vaccinationSignupUrl: 'https://vaccinefinder.org/find-vaccine',
  },
  {
    hidden: false,
    stateCode: 'DC',
    eligibilityInfoUrl: 'https://coronavirus.dc.gov/vaccine-information',
    vaccinationSignupUrl: 'https://coronavirus.dc.gov/vaccinatedc',
  },
  {
    hidden: false,
    stateCode: 'FL',
    eligibilityInfoUrl:
      'https://floridahealthcovid19.gov/covid-19-vaccines-in-florida/',
    vaccinationSignupUrl:
      'https://floridahealthcovid19.gov/vaccines/vaccine-locator/',
  },
  {
    hidden: false,
    stateCode: 'GA',
    eligibilityInfoUrl: 'https://dph.georgia.gov/covid-vaccine',
    vaccinationSignupUrl:
      'https://dph.georgia.gov/locations/covid-vaccination-site',
  },
  {
    hidden: false,
    stateCode: 'HI',
    eligibilityInfoUrl: 'https://hawaiicovid19.com/vaccine/',
    vaccinationSignupUrl: 'https://hawaiicovid19.com/vaccination-registration/',
  },
  {
    hidden: false,
    stateCode: 'IA',
    eligibilityInfoUrl:
      'https://coronavirus.idaho.gov/wp-content/uploads/2021/01/When-can-I-get-a-COVID-vaccine-in-Idaho-011221-5.pdf',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'IL',
    eligibilityInfoUrl:
      'https://www.dph.illinois.gov/covid19/vaccine-distribution',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'IN',
    eligibilityInfoUrl: 'shttps://www.coronavirus.in.gov/vaccine/index.htm',
    vaccinationSignupUrl: 'https://vaccine.coronavirus.in.gov/',
  },
  {
    hidden: false,
    stateCode: 'IA',
    eligibilityInfoUrl:
      'https://idph.iowa.gov/Emerging-Health-Issues/Novel-Coronavirus/Vaccine/Information-for-the-Public',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'KS',
    eligibilityInfoUrl: 'https://www.kansasvaccine.gov/157/Availability',
    vaccinationSignupUrl: 'https://www.kansasvaccine.gov/160/Find-a-Vaccine',
  },
  {
    hidden: false,
    stateCode: 'KY',
    eligibilityInfoUrl: 'https://govstatus.egov.com/ky-covid-vaccine',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'LA',
    eligibilityInfoUrl: 'https://ldh.la.gov/covidvaccine/',
    vaccinationSignupUrl: 'https://ldh.la.gov/covidvaccine-locations/',
  },
  {
    hidden: false,
    stateCode: 'ME',
    eligibilityInfoUrl: 'https://www.maine.gov/covid19/vaccines',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'MD',
    eligibilityInfoUrl: 'https://coronavirus.maryland.gov/pages/vaccine',
    vaccinationSignupUrl:
      'https://maryland.maps.arcgis.com/apps/instant/nearby/index.html?appid=0dbfb100676346ed9758be319ab3f40c',
  },
  {
    hidden: false,
    stateCode: 'MS',
    eligibilityInfoUrl:
      'https://www.mass.gov/info-details/covid-19-vaccination-program',
    vaccinationSignupUrl:
      'https://www.mass.gov/info-details/covid-19-vaccine-locations-for-individuals-currently-eligible-to-be-vaccinated',
  },
  {
    hidden: false,
    stateCode: 'MI',
    eligibilityInfoUrl:
      'https://www.michigan.gov/coronavirus/0,9753,7-406-98178_103214---,00.html',
    vaccinationSignupUrl:
      'https://www.michigan.gov/coronavirus/0,9753,7-406-98178_103214_104822---,00.html#comp_121341',
  },
  {
    hidden: false,
    stateCode: 'MN',
    eligibilityInfoUrl:
      'https://mn.gov/covid19/vaccine/whos-getting-vaccinated/index.jsp',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'MS',
    eligibilityInfoUrl:
      'https://msdh.ms.gov/msdhsite/_static/14,22816,420,976.html#eligible',
    vaccinationSignupUrl: 'https://covidvaccine.umc.edu/',
  },
  {
    hidden: false,
    stateCode: 'MO',
    eligibilityInfoUrl: 'https://covidvaccine.mo.gov/residents/',
    vaccinationSignupUrl: 'https://covidvaccine.mo.gov/map/',
  },
  {
    hidden: false,
    stateCode: 'MT',
    eligibilityInfoUrl:
      'https://dphhs.mt.gov/publichealth/cdepi/diseases/coronavirusvaccine',
    vaccinationSignupUrl:
      'https://dphhs.mt.gov/publichealth/FCSS/countytribalhealthdepts',
  },
  {
    hidden: false,
    stateCode: 'NE',
    eligibilityInfoUrl:
      'http://dhhs.ne.gov/Pages/COVID-19-Vaccine-Information.aspx',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'NV',
    eligibilityInfoUrl: 'https://www.immunizenevada.org/nv-covid-fighter',
    vaccinationSignupUrl: 'https://dpbhrdc.nv.gov/redcap/surveys/?s=N7ACTF4CYL',
  },
  {
    hidden: false,
    stateCode: 'NH',
    eligibilityInfoUrl:
      'https://www.nh.gov/covid19/resources-guidance/vaccination-planning.htm',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'NJ',
    eligibilityInfoUrl: 'https://covid19.nj.gov/pages/vaccine',
    vaccinationSignupUrl:
      'https://covid19.nj.gov/pages/covid-19-vaccine-locations-for-eligible-recipients',
  },
  {
    hidden: false,
    stateCode: 'NM',
    eligibilityInfoUrl: 'https://cv.nmhealth.org/covid-vaccine/',
    vaccinationSignupUrl: 'https://cvvaccine.nmhealth.org/',
  },
  {
    hidden: false,
    stateCode: 'NY',
    eligibilityInfoUrl: 'https://covid19vaccine.health.ny.gov/',
    vaccinationSignupUrl: 'https://am-i-eligible.covid19vaccine.health.ny.gov/',
  },
  {
    hidden: false,
    stateCode: 'NC',
    eligibilityInfoUrl: 'https://covid19.ncdhhs.gov/vaccines',
    vaccinationSignupUrl: 'https://covid19.ncdhhs.gov/findyourspot',
  },
  {
    hidden: false,
    stateCode: 'ND',
    eligibilityInfoUrl:
      'https://www.health.nd.gov/covid-19-vaccine-information',
    vaccinationSignupUrl: 'https://www.health.nd.gov/covidvaccinelocator',
  },
  {
    hidden: false,
    stateCode: 'MP',
    eligibilityInfoUrl: 'https://www.vaccinatecnmi.com/',
    vaccinationSignupUrl:
      'https://www.vaccinatecnmi.com/covid-19/registration/',
  },
  {
    hidden: false,
    stateCode: 'OH',
    eligibilityInfoUrl:
      'https://coronavirus.ohio.gov/wps/portal/gov/covid-19/covid-19-vaccination-program',
    vaccinationSignupUrl: 'https://vaccine.coronavirus.ohio.gov/',
  },
  {
    hidden: false,
    stateCode: 'OK',
    eligibilityInfoUrl: 'https://oklahoma.gov/covid19/vaccine-information.html',
    vaccinationSignupUrl: 'https://vaccinate.oklahoma.gov/',
  },
  {
    hidden: false,
    stateCode: 'OR',
    eligibilityInfoUrl: 'https://covidvaccine.oregon.gov/#prioritization',
    vaccinationSignupUrl:
      'https://www.oregon.gov/oha/covid19/Pages/vaccine-information-by-county.aspx',
  },
  {
    hidden: false,
    stateCode: 'PA',
    eligibilityInfoUrl:
      'https://www.health.pa.gov/topics/disease/coronavirus/Pages/Vaccine.aspx',
    vaccinationSignupUrl:
      'https://padoh.maps.arcgis.com/apps/webappviewer/index.html?id=0ea7864ea98d423daa3f1711e3cba09e',
  },
  {
    hidden: false,
    stateCode: 'PR',
    eligibilityInfoUrl:
      'http://www.salud.gov.pr/Pages/COVID-19-ProfesionalesdelaSalud.aspx',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'RI',
    eligibilityInfoUrl: 'https://covid.ri.gov/vaccination',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'SC',
    eligibilityInfoUrl: 'https://scdhec.gov/covid19/covid-19-vaccine',
    vaccinationSignupUrl:
      'https://sc-dhec.maps.arcgis.com/apps/webappviewer/index.html?id=58f5a4c3bc864fd0a81f5d9fb3bc17a7',
  },
  {
    hidden: false,
    stateCode: 'SD',
    eligibilityInfoUrl: 'https://doh.sd.gov/Covid/Vaccine/Public.aspx',
    vaccinationSignupUrl:
      'https://doh.sd.gov/Covid/Vaccine/ProviderMap/default.aspx',
  },
  {
    hidden: false,
    stateCode: 'TN',
    eligibilityInfoUrl: 'https://covid19.tn.gov/covid-19-vaccines/',
    vaccinationSignupUrl:
      'https://covid19.tn.gov/covid-19-vaccines/county-vaccine-information/',
  },
  {
    hidden: false,
    stateCode: 'TX',
    eligibilityInfoUrl:
      'https://www.dshs.state.tx.us/coronavirus/immunize/vaccine.aspx',
    vaccinationSignupUrl:
      'https://www.dshs.state.tx.us/coronavirus/immunize/vaccine-hubs.aspx',
  },
  {
    hidden: false,
    stateCode: 'UT',
    eligibilityInfoUrl: 'https://coronavirus.utah.gov/vaccine-distribution/',
    vaccinationSignupUrl:
      'https://coronavirus.utah.gov/vaccine-distribution/#lhd',
  },
  {
    hidden: false,
    stateCode: 'VT',
    eligibilityInfoUrl:
      'https://www.healthvermont.gov/covid-19/vaccine/about-covid-19-vaccines-vermont',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'VA',
    eligibilityInfoUrl: 'https://www.vdh.virginia.gov/covid-19-vaccine/',
    vaccinationSignupUrl:
      'https://www.vdh.virginia.gov/covid-19-vaccine/phase-by-health-district/',
  },
  {
    hidden: false,
    stateCode: 'WA',
    eligibilityInfoUrl: 'https://www.doh.wa.gov/Emergencies/COVID19/vaccine',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'WV',
    eligibilityInfoUrl: 'https://dhhr.wv.gov/COVID-19/Pages/Vaccine.aspx',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'WI',
    eligibilityInfoUrl:
      'https://www.dhs.wisconsin.gov/covid-19/vaccine-about.htm',
    vaccinationSignupUrl: undefined,
  },
  {
    hidden: false,
    stateCode: 'WY',
    eligibilityInfoUrl:
      'https://health.wyo.gov/publichealth/immunization/wyoming-covid-19-vaccine-information/',
    vaccinationSignupUrl:
      'https://health.wyo.gov/publichealth/immunization/wyoming-covid-19-vaccine-information/county-covid-19-vaccine-information/',
  },
];

const vaccinationInfoByState = fromPairs(
  stateVaccinationInfo.map(stateInfo => [stateInfo.stateCode, stateInfo]),
);

export function getStateVaccinationInfo(
  region: State | County,
): StateVaccinationInfo {
  return vaccinationInfoByState[region.stateCode];
}

export function getMetroAreaVaccinationInfo(
  metroArea: MetroArea,
): StateVaccinationInfo[] {
  return metroArea.states.map(getStateVaccinationInfo);
}
