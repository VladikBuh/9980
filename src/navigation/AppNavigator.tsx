import React, {useState} from 'react';

import {LoaderScreen} from '../screens/LoaderScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';

import {MainTabs} from './MainTabs';
import type {AppPhase} from './types';

export function AppNavigator() {
  const [phase, setPhase] = useState<AppPhase>('Loader');

  if (phase === 'Loader') {
    return <LoaderScreen onComplete={() => setPhase('Onboarding')} />;
  }

  if (phase === 'Onboarding') {
    return <OnboardingScreen onComplete={() => setPhase('Main')} />;
  }

  return <MainTabs />;
}
