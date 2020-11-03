import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { COLOR_MAP } from 'common/colors';
import { COLORS } from 'common';
import theme from 'assets/theme';
import { MarkdownContent, StylesH3 } from 'components/Markdown';

/*
 TODO (Chelsi): we're almost always removing the underline
 manually. Lets put this styled Link somewhere global ::
*/
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledCard = styled(Card)`
  box-shadow: none;
  border: 1px solid ${COLORS.LIGHTGRAY};

  &:hover {
    border: 1px solid ${COLOR_MAP.GREEN.BASE};
    /* Highlights the arrow icon on hover */
    svg {
      color: ${COLOR_MAP.GREEN.BASE};
    }
  }
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  padding: ${theme.spacing(2)}px;
`;

export const CardLogo = styled.img.attrs(props => ({
  height: 28,
}))`
  margin-bottom: ${1.5 * theme.spacing(1)}px;
`;

export const CardTitle = styled.h3`
  ${StylesH3}
`;

export const CardBody = styled(MarkdownContent)``;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${theme.spacing(2)}px;
`;

export const CopyContainer = styled.div`
  flex-direction: column;
`;

export const ArrowIcon = styled(ArrowForwardIosIcon)`
  color: ${COLOR_MAP.GRAY_ICON};
  display: flex;
  width: ${theme.spacing(2)}px;
  height: ${theme.spacing(2)}px;
`;
