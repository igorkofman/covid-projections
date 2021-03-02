import React from 'react';
import {
  CcviLevel,
  getCcviLevelColor,
  getCcviLevelName,
  getCcviLevel,
} from 'common/ccvi';
import { scaleLinear } from '@vx/scale';
import { v4 as uuidv4 } from 'uuid';
import { Group } from '@vx/group';
import { StyledSvg } from 'components/VulnerabilitiesBlock/VulnerabilitiesBlock.style';

const CcviThermometer: React.FC<{ overallScore: number }> = ({
  overallScore,
}) => {
  const gradientId = uuidv4();
  const titleId = uuidv4();

  const containerHeight = 34;
  const thermometerWidth = 240;
  const thermometerHeight = 20;
  const thermometerBorderRadius = thermometerHeight / 2;
  const horizontalMargin = 6;
  const innerWidth = thermometerWidth - 2 * horizontalMargin;

  const scaleWidth = scaleLinear({
    domain: [0, 1],
    range: [0, innerWidth],
  });

  const pointerX = scaleWidth(overallScore);

  const level = getCcviLevel(overallScore);

  // todo (chelsi): add location name, possibly edit copy
  const title = level
    ? `Thermometer image showing that the vulnerability level is ${getCcviLevelName(
        level,
      ).toLowerCase()}.`
    : 'Thermometer image showing the vulnerability level.';

  return (
    <StyledSvg
      width={thermometerWidth}
      height={containerHeight}
      role="img"
      aria-labelledby={titleId}
    >
      <title id={titleId}>{title}</title>
      <defs>
        <linearGradient id={gradientId}>
          <stop
            offset="20%"
            stopColor={getCcviLevelColor(CcviLevel.VERY_LOW)}
          />
          <stop offset="20%" stopColor={getCcviLevelColor(CcviLevel.LOW)} />
          <stop offset="40%" stopColor={getCcviLevelColor(CcviLevel.LOW)} />
          <stop offset="40%" stopColor={getCcviLevelColor(CcviLevel.MEDIUM)} />
          <stop offset="60%" stopColor={getCcviLevelColor(CcviLevel.MEDIUM)} />
          <stop offset="60%" stopColor={getCcviLevelColor(CcviLevel.HIGH)} />
          <stop offset="80%" stopColor={getCcviLevelColor(CcviLevel.HIGH)} />
          <stop
            offset="80%"
            stopColor={getCcviLevelColor(CcviLevel.VERY_HIGH)}
          />
        </linearGradient>
      </defs>
      <Group left={horizontalMargin}>
        <Group left={pointerX}>
          <polygon points={`-6,0 0,6 6,0`} fill="black" />
        </Group>
        <rect
          fill={`url(#${gradientId})`}
          width={innerWidth}
          height={thermometerHeight}
          y={containerHeight - thermometerHeight}
          rx={thermometerBorderRadius}
          ry={thermometerBorderRadius}
        />
      </Group>
    </StyledSvg>
  );
};

export default CcviThermometer;
