import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Hidden from '@material-ui/core/Hidden';
import { Chevron } from '../Shared/Shared.style';
import { COLOR_MAP } from 'common/colors';
import { materialSMBreakpoint } from 'assets/theme/sizes';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${materialSMBreakpoint}) {
    flex-direction: row;
  }
`;

export const StatContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${materialSMBreakpoint}) {
    flex-direction: column;
    justify-content: unset;
    padding: 0 1.25rem;

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;

// put this somewhere in Shared:
export const StyledChevron = styled(Chevron)`
  transform: none;
`;

export const CircleIcon = styled(FiberManualRecordIcon)<{ $iconColor: string }>`
  color: ${({ $iconColor }) => $iconColor};
  circle {
    r: 4;
  }

  @media (min-width: ${materialSMBreakpoint}) {
    // counteracts the svg's built-in padding, so the icon is aligned with the text above it:
    margin-left: -6px;
  }
`;

export const ValueWrapper = styled.div`
  display: flex;
`;

export const Value = styled.span`
  ${props => props.theme.fonts.monospaceBold};
  font-size: 1.125rem;
  margin: auto 0;

  @media (min-width: ${materialSMBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const SubLabelWrapper = styled.div`
  @media (min-width: ${materialSMBreakpoint}) {
    margin-left: 0.75rem;
  }
`;

export const SubLabel = styled.span`
  color: ${COLOR_MAP.GRAY_BODY_COPY};
  text-transform: uppercase;
  font-size: 1rem;
`;

export const MetricLabel = styled.span`
  ${props => props.theme.fonts.regularBookMidWeight};
  font-size: 1rem;
  margin-right: 0.5rem;

  @media (min-width: ${materialSMBreakpoint}) {
    margin-right: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  line-height: 1;
  align-items: center;

  &:first-child {
    flex-wrap: wrap;
  }

  @media (min-width: ${materialSMBreakpoint}) {
    align-items: flex-start;

    &:first-child {
      margin-bottom: 0.75rem;
      flex-wrap: nowrap;
    }
  }
`;

export const MobileOnly = styled(Hidden).attrs(props => ({
  smUp: true,
}))``;

export const DesktopOnly = styled(Hidden).attrs(props => ({
  xsDown: true,
}))``;
