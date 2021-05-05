import React from 'react';
import InfoTooltip from './InfoTooltip';
import TextTooltip from './TextTooltip';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { EventAction, EventCategory, trackEvent } from 'components/Analytics';
import { StyledMarkdown, InfoIcon } from './Tooltip.style';
export { InfoTooltip, TextTooltip };

export { InfoIcon };

export type StyledTooltipProps = Omit<TooltipProps, 'children'> & {
  trackOpenTooltip: () => void;
  mainCopy?: string;
};

export function renderTooltipContent(body: string): React.ReactElement {
  return <StyledMarkdown source={body} />;
}

export function tooltipAnchorOnClick(isMobile: boolean, onClick: () => void) {
  if (!isMobile) {
    return null;
  } else {
    onClick();
  }
}

export function trackOpenTooltip(label: string) {
  trackEvent(EventCategory.TOOLTIPS, EventAction.OPEN_TOOLTIP, label);
}
