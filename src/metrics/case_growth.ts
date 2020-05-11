import { COLOR_MAP } from 'enums/interventions';
import { Level, Levels } from 'enums/levels';

export const METRIC_NAME = 'Infection growth rate';

const SHORT_DESCRIPTION_LOW = 'Active cases are decreasing';
const SHORT_DESCRIPTION_MEDIUM = 'Active cases are slowly increasing';
const SHORT_DESCRIPTION_HIGH = 'Active cases are increasing';
const SHORT_DESCRIPTION_UNKNOWN = 'Insufficient data to assess';

const LIMIT_LOW = 1;
const LIMIT_MEDIUM = 1.2;
const LIMIT_HIGH = Infinity;

const LOW_NAME = 'Reduced';
const MEDIUM_NAME = 'Moderate';
const HIGH_NAME = 'Elevated';
const UNKNOWN = 'Unknown';

export const CASE_GROWTH_RATE_LEVELS: Levels = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: LIMIT_LOW,
    name: LOW_NAME,
    color: COLOR_MAP.GREEN.BASE,
    detail: SHORT_DESCRIPTION_LOW,
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: LIMIT_MEDIUM,
    name: MEDIUM_NAME,
    color: COLOR_MAP.ORANGE.BASE,
    detail: SHORT_DESCRIPTION_MEDIUM,
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: LIMIT_HIGH,
    name: HIGH_NAME,
    color: COLOR_MAP.RED.BASE,
    detail: SHORT_DESCRIPTION_HIGH,
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: UNKNOWN,
    color: COLOR_MAP.GRAY.BASE,
    detail: SHORT_DESCRIPTION_UNKNOWN,
  },
};
