import type {ImageSourcePropType} from 'react-native';

import {onboardingBackgrounds} from './assets';

export type OnboardingStep = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  buttonLabel: string;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    image: onboardingBackgrounds.step1,
    title: 'Explore Amazing Rainforests',
    description:
      "Discover the world's most fascinating jungles, unique ecosystems, and incredible wildlife.",
    buttonLabel: 'Next',
  },
  {
    image: onboardingBackgrounds.step2,
    title: 'Meet Jungle Animals',
    description:
      'Learn about powerful predators and peaceful herbivores through detailed articles.',
    buttonLabel: 'Next',
  },
  {
    image: onboardingBackgrounds.step3,
    title: 'Discover Exotic Plants',
    description:
      'Explore useful rainforest plants and learn how to recognize dangerous poisonous species.',
    buttonLabel: 'Next',
  },
  {
    image: onboardingBackgrounds.step4,
    title: 'Test Your Knowledge',
    description:
      'Read articles, answer review questions, and complete the True or False challenge.',
    buttonLabel: 'Start Learning',
  },
];
