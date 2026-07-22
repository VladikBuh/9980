export type MapLocation = {
  articleId: string;
  latitude: number;
  longitude: number;
};

export const MAP_LOCATIONS: MapLocation[] = [
  {articleId: 'tropical-rainforest', latitude: -3.4653, longitude: -62.2159},
  {articleId: 'congo-basin', latitude: -0.5, longitude: 23.5},
  {articleId: 'borneo-rainforest', latitude: 0.9619, longitude: 114.5548},
  {articleId: 'daintree-rainforest', latitude: -16.17, longitude: 145.4198},
  {articleId: 'madagascar-rainforests', latitude: -18.15, longitude: 49.4},
  {articleId: 'new-guinea-rainforest', latitude: -5.5, longitude: 141.0},
  {
    articleId: 'sundarbans-mangrove-forest',
    latitude: 21.9497,
    longitude: 89.1833,
  },
  {articleId: 'atlantic-forest', latitude: -23.5, longitude: -45.4},
];
