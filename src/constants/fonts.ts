import {Platform} from 'react-native';

const ios = {
  sansRegular: 'System',
  sansMedium: 'System',
};

const android = {
  sansRegular: 'sans-serif',
  sansMedium: 'sans-serif-medium',
};

const platformFonts = Platform.OS === 'ios' ? ios : android;

export const fonts = {
  sansRegular: platformFonts.sansRegular,
  sansMedium: platformFonts.sansMedium,
};
