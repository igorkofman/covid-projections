import React, { Fragment } from 'react';
import CompareTable from 'components/Compare/CompareTable';
import { ModalHeader } from 'components/Compare/Compare.style';
import CloseIcon from '@material-ui/icons/Close';

//TODO(chelsi) - remove ? from stateName and stateId
const ModalCompare = (props: {
  stateId: string;
  stateName?: string;
  county: any | null;
  setShowModal: any;
  isLocationPage?: Boolean;
  isHomepage?: Boolean;
}) => {
  return (
    <Fragment>
      <ModalHeader>
        {props.isHomepage ? 'States' : `${props.stateName} counties`}
        <CloseIcon onClick={() => props.setShowModal(false)} />
      </ModalHeader>
      <CompareTable
        stateId={props.stateId}
        stateName={props.stateName}
        county={props.county}
        setShowModal={props.setShowModal}
        isModal
        isLocationPage={props.isLocationPage}
        isHomepage={props.isHomepage}
      />
    </Fragment>
  );
};

export default ModalCompare;
