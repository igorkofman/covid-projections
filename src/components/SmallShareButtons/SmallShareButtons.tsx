import React from 'react';
import {
  ButtonsWrapper,
  ShareButtonContainer,
} from './SmallShareButtons.style';
import {
  FacebookShareButtonInner,
  TwitterShareButtonInner,
} from 'components/ShareButtons';
import { COLOR_MAP } from 'common/colors';
import LinkIcon from '@material-ui/icons/Link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SmallShareButtons = () => {
  const url = 'https://covidactnow.org/';

  const socialProps = {
    url,
    quote: '',
    socialIconSize: 30,
  };

  return (
    <ButtonsWrapper>
      <ShareButtonContainer color={COLOR_MAP.BLUE}>
        <FacebookShareButtonInner {...socialProps} />
      </ShareButtonContainer>
      <ShareButtonContainer color={COLOR_MAP.BLUE}>
        <TwitterShareButtonInner {...socialProps} />
      </ShareButtonContainer>
      <CopyToClipboard text={url}>
        <ShareButtonContainer color={COLOR_MAP.BLUE}>
          <LinkIcon />
        </ShareButtonContainer>
      </CopyToClipboard>
    </ButtonsWrapper>
  );
};

export default SmallShareButtons;
