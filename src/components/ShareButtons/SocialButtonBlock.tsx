import React, { Fragment, useState } from 'react';
import FacebookShareButton from './FacebookShareButton';
import TwitterShareButton from './TwitterShareButton';
import CopyLinkButton from './CopyLinkButton';
import {
  SocialButtonsContainer,
  SocialButton,
  SocialShareButton,
} from './ShareButtons.style';
import EmbedPreview from 'components/ShareBlock/EmbedPreview';
import { Region } from 'common/regions';

const SocialButtonBlock: React.FC<{
  url: string;
  quote: string;
  socialIconSize: number;
  region?: Region;
  onShareOnFacebook: () => void;
  onShareOnTwitter: () => void;
  onCopyLink: () => void;
}> = ({
  url,
  quote,
  socialIconSize,
  onShareOnFacebook,
  onShareOnTwitter,
  onCopyLink,
  region,
}) => {
  const socialSharingProps = {
    url,
    quote,
    socialIconSize,
  };
  const [showEmbedPreviewModal, setShowEmbedPreviewModal] = useState(false);
  return (
    <SocialButtonsContainer>
      <FacebookShareButton
        onClickShare={onShareOnFacebook}
        {...socialSharingProps}
      />
      <TwitterShareButton
        onClickShare={onShareOnTwitter}
        {...socialSharingProps}
        hashtags={['COVIDActNow']}
      />
      <CopyLinkButton url={socialSharingProps.url} onCopyLink={onCopyLink} />
      <SocialShareButton variant="contained" color="#007fb1">
        <SocialButton
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={() => setShowEmbedPreviewModal(true)}
        >
          <Fragment>Embed</Fragment>
        </SocialButton>
        <EmbedPreview
          open={showEmbedPreviewModal}
          onClose={() => setShowEmbedPreviewModal(false)}
          region={region}
        />
      </SocialShareButton>
    </SocialButtonsContainer>
  );
};

export default SocialButtonBlock;
