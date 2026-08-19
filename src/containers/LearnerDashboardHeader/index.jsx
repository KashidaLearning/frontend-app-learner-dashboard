import React from 'react';


import MasqueradeBar from 'containers/MasqueradeBar';

import ConfirmEmailBanner from './ConfirmEmailBanner';

import './index.scss';

export const LearnerDashboardHeader = () => (
  <>
    <ConfirmEmailBanner />
    <MasqueradeBar />
  </>
);

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;
