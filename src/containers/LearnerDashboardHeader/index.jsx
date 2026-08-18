import React from 'react';

import { RowadHeader } from '@edx/frontend-component-header';

import MasqueradeBar from 'containers/MasqueradeBar';

import ConfirmEmailBanner from './ConfirmEmailBanner';

import './index.scss';

export const LearnerDashboardHeader = () => (
  <>
    <ConfirmEmailBanner />
    <RowadHeader />
    <MasqueradeBar />
  </>
);

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;
