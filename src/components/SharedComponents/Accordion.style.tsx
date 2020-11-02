import styled from 'styled-components';
import { Accordion, AccordionSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MarkdownContent } from 'components/Markdown';
import { COLOR_MAP } from 'common/colors';
import theme from 'assets/theme';

export const StyledMuiAccordion = styled(Accordion)`
  box-shadow: none;

  &:before {
    background-color: transparent;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  padding-left: 0;
  padding-right: 0;
  align-items: flex-start;
`;

export const MarkdownBody = styled(MarkdownContent)`
  color: ${COLOR_MAP.GRAY_BODY_COPY};
  line-height: 1.4;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  p {
    margin: 0;
    &:not(:last-child) {
      margin-bottom: ${theme.spacing(3)}px;
    }
  }

  a {
    color: ${COLOR_MAP.BLUE};
  }
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  color: ${COLOR_MAP.GRAY_ICON};
`;
