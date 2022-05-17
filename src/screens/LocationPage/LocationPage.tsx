import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AppMetaTags from 'components/AppMetaTags/AppMetaTags';
import EnsureSharingIdInUrl from 'components/EnsureSharingIdInUrl';
import ChartsHolder from 'components/LocationPage/ChartsHolder';
import { getPageTitle, getPageDescription } from './utils';
import { Region } from 'common/regions';
import { DonateButtonHeart } from 'components/DonateButton';
import { useShowPastPosition } from 'common/hooks';
import { NavLocationPage } from 'components/NavBar';

interface LocationPageProps {
  region: Region;
}

function WithSearchInNav({ region }: LocationPageProps) {
  let { chartId } = useParams<{ chartId: string }>();
  const [menuOpen, setMenuOpen] = useState(false);
  const hasScrolled = useShowPastPosition(850);
  const [yPosition, setYposition] = useState(0);
  window.addEventListener('scroll', () => setYposition(window.scrollY));

  return (
    <>
      <EnsureSharingIdInUrl />
      <AppMetaTags
        canonicalUrl={region.canonicalUrl}
        pageTitle={getPageTitle(region)}
        pageDescription={getPageDescription(region)}
      />
      <NavLocationPage
        renderSecondaryElement={() => <DonateButtonHeart />}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        hasScrolled={hasScrolled}
        region={region}
      />
      <ChartsHolder chartId={chartId} region={region} yPosition={yPosition} />
    </>
  );
}

export default WithSearchInNav;
