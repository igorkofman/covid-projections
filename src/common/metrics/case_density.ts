import { COLOR_MAP } from 'common/colors';
import { Level, LevelInfoMap } from 'common/level';

export const CASE_DENSITY_LEVEL_INFO_MAP: LevelInfoMap = {
  [Level.LOW]: {
    level: Level.LOW,
    upperLimit: 1,
    name: 'Low',
    color: COLOR_MAP.GREEN.BASE,
    detail: () => 'Low',
  },
  [Level.MEDIUM]: {
    level: Level.MEDIUM,
    upperLimit: 10,
    name: 'Medium',
    color: COLOR_MAP.ORANGE.BASE,
    detail: () => 'Medium',
  },
  [Level.HIGH]: {
    level: Level.HIGH,
    upperLimit: 50,
    name: 'High',
    color: COLOR_MAP.ORANGE_DARK.BASE,
    detail: () => 'High',
  },
  [Level.CRITICAL]: {
    level: Level.CRITICAL,
    upperLimit: 100,
    name: 'Critical',
    color: COLOR_MAP.RED.BASE,
    detail: () => 'Critical',
  },
  [Level.UNKNOWN]: {
    level: Level.UNKNOWN,
    upperLimit: 0,
    name: 'Unknown',
    color: COLOR_MAP.GRAY.BASE,
    detail: () => 'Unknown',
  },
};
