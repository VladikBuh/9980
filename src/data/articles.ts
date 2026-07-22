import type {ImageSourcePropType} from 'react-native';

import {articleImages} from './assets';

export type QuizOptionId = 'A' | 'B' | 'C';

export type QuizOption = {
  id: QuizOptionId;
  text: string;
  correct: boolean;
};

export type Article = {
  id: string;
  title: string;
  shortDescription: string;
  paragraphs: string[];
  image: ImageSourcePropType;
  quiz: {
    question: string;
    options: QuizOption[];
  };
};

export const ARTICLES: Article[] = [
  {
    id: 'tropical-rainforest',
    title: "The Rainforest: Earth's Living Lungs",
    shortDescription: 'Vast rainforest sustaining millions of species daily',
    image: articleImages.tropicalRainforest,
    paragraphs: [
      "This vast tropical rainforest spans over 5.5 million square kilometers across nine countries in South America. It is home to an estimated 390 billion individual trees representing over 16,000 different species. The forest produces roughly 20% of the world's oxygen through photosynthesis, making it essential to global climate regulation. Scientists describe it as the lungs of our planet due to its immense carbon absorption capacity.",
      'The great river flowing through the heart of this ecosystem carries more water than any other river on Earth. Its floodplains create unique habitats that support thousands of fish species, many never documented by science. Indigenous communities have lived in harmony with the forest for thousands of years, developing rich knowledge of its medicinal plants. Conservation efforts today are critical to preserving this irreplaceable ecosystem for future generations.',
    ],
    quiz: {
      question: "What percentage of Earth's oxygen does this rainforest produce?",
      options: [
        {
          id: 'A',
          text: 'Around 10% from its enormous leaf canopy surface area',
          correct: false,
        },
        {
          id: 'B',
          text: 'Approximately 20% through forest-wide photosynthesis',
          correct: true,
        },
        {
          id: 'C',
          text: 'Nearly 40% after accounting for all river algae output',
          correct: false,
        },
      ],
    },
  },
  {
    id: 'congo-basin',
    title: "Congo Basin: Africa's Vast Mystery",
    shortDescription: "Discover Africa's vast and mysterious tropical forest",
    image: articleImages.congoBasin,
    paragraphs: [
      'The Congo Basin is the second-largest tropical rainforest region in the world. It spreads across several countries in Central Africa and surrounds the powerful Congo River. The forest contains thick vegetation, swampy areas, wide rivers, and tall tropical trees. Its warm and humid climate supports a remarkable range of wildlife.',
      'Gorillas, chimpanzees, forest elephants, okapis, and leopards live within the Congo Basin. Many local communities depend on the forest for food, medicine, shelter, and transportation. The rainforest also absorbs large amounts of carbon and helps regulate the climate. Logging, mining, and habitat loss remain major threats to this important ecosystem.',
    ],
    quiz: {
      question: 'Where is the Congo Basin located?',
      options: [
        {id: 'A', text: 'Central Africa', correct: true},
        {id: 'B', text: 'South America', correct: false},
        {id: 'C', text: 'Southeast Asia', correct: false},
      ],
    },
  },
  {
    id: 'borneo-rainforest',
    title: 'Borneo Rainforest: Ancient Wilderness',
    shortDescription: 'Meet rare wildlife in an ancient rainforest',
    image: articleImages.borneoRainforest,
    paragraphs: [
      'The Borneo Rainforest covers large parts of the island of Borneo in Southeast Asia. It is one of the oldest tropical rainforests on Earth and has developed over millions of years. Towering trees create a thick canopy above vines, palms, orchids, and ferns. Heavy rainfall keeps the forest warm, humid, and full of life.',
      'Borneo is famous for orangutans, proboscis monkeys, clouded leopards, and pygmy elephants. Many species found there do not naturally live anywhere else in the world. The rainforest provides food, water, and resources for indigenous communities across the island. Deforestation and the expansion of plantations have placed many of its habitats under serious pressure.',
    ],
    quiz: {
      question: 'Which animal is strongly associated with Borneo?',
      options: [
        {id: 'A', text: 'Orangutan', correct: true},
        {id: 'B', text: 'Polar bear', correct: false},
        {id: 'C', text: 'Kangaroo', correct: false},
      ],
    },
  },
  {
    id: 'daintree-rainforest',
    title: "Daintree: Australia's Ancient Forest",
    shortDescription: "Explore Australia's oldest surviving tropical rainforest",
    image: articleImages.daintreeRainforest,
    paragraphs: [
      'The Daintree Rainforest is located in northeastern Australia, close to the Great Barrier Reef. It is considered one of the oldest continuously surviving tropical rainforests in the world. Ancient trees, giant ferns, clear streams, and thick vines fill its landscape. The region receives frequent rainfall and remains green during most of the year.',
      'The Daintree is home to cassowaries, tree kangaroos, reptiles, colorful birds, and many unusual insects. Some plant species growing there have existed since prehistoric times. Rainforest and coral reef ecosystems meet within the same region, making the area especially unique. Conservation efforts help protect its rare species and fragile natural habitats.',
    ],
    quiz: {
      question: 'In which country is the Daintree Rainforest located?',
      options: [
        {id: 'A', text: 'Brazil', correct: false},
        {id: 'B', text: 'Australia', correct: true},
        {id: 'C', text: 'India', correct: false},
      ],
    },
  },
  {
    id: 'madagascar-rainforests',
    title: 'Madagascar: A World Apart',
    shortDescription: 'Discover unique species found nowhere else',
    image: articleImages.madagascarRainforests,
    paragraphs: [
      "Madagascar's rainforests grow mainly along the humid eastern side of the island. The island separated from other land masses millions of years ago, allowing its wildlife to develop independently. Dense vegetation includes palms, orchids, tree ferns, and many unusual flowering plants. The forests range from warm lowland areas to cooler mountain regions.",
      'Madagascar is especially famous for lemurs, chameleons, fossas, and brightly colored frogs. A large number of its animal and plant species are endemic, meaning they exist nowhere else naturally. Local communities rely on the forests for water, food, fuel, and traditional medicine. Habitat destruction has made rainforest conservation one of Madagascar’s most urgent environmental challenges.',
    ],
    quiz: {
      question: 'What does it mean when a species is endemic?',
      options: [
        {
          id: 'A',
          text: 'It lives naturally in one specific region',
          correct: true,
        },
        {id: 'B', text: 'It migrates every winter', correct: false},
        {id: 'C', text: 'It lives only underwater', correct: false},
      ],
    },
  },
  {
    id: 'new-guinea-rainforest',
    title: 'New Guinea: Remote Biodiversity',
    shortDescription: 'Enter a remote world of extraordinary biodiversity',
    image: articleImages.newGuineaRainforest,
    paragraphs: [
      'The New Guinea Rainforest covers much of the island of New Guinea in the Pacific region. It includes lowland jungle, mountain forests, wetlands, and remote valleys. Many areas remain difficult to reach and have not been fully studied by scientists. Warm temperatures and abundant rainfall support dense and varied vegetation.',
      'The rainforest is well known for birds-of-paradise, tree kangaroos, cassowaries, and thousands of insect species. New species are still being discovered in its remote habitats. Indigenous communities have lived within these forests for generations and possess deep knowledge of local plants and animals. Logging, mining, and road construction threaten some of the island’s most isolated ecosystems.',
    ],
    quiz: {
      question: 'Which bird is famous in New Guinea?',
      options: [
        {id: 'A', text: 'Bird-of-paradise', correct: true},
        {id: 'B', text: 'Penguin', correct: false},
        {id: 'C', text: 'Flamingo', correct: false},
      ],
    },
  },
  {
    id: 'sundarbans-mangrove-forest',
    title: 'Sundarbans: The Great Mangrove',
    shortDescription: "Explore the world's largest mangrove ecosystem",
    image: articleImages.sundarbansMangroveForest,
    paragraphs: [
      'The Sundarbans is a vast mangrove forest located across Bangladesh and India. It grows where rivers meet the Bay of Bengal and where fresh water mixes with seawater. The landscape consists of muddy islands, tidal channels, exposed roots, and dense mangrove trees. Regular tides constantly reshape the forest and surrounding waterways.',
      'The Sundarbans is famous for Bengal tigers, crocodiles, spotted deer, monkeys, and many bird species. Mangrove roots provide shelter for fish and help protect coastlines from strong waves and storms. Local communities depend on fishing, honey collection, and other forest resources. Rising sea levels, pollution, and powerful cyclones threaten this unusual ecosystem.',
    ],
    quiz: {
      question: 'What type of forest is the Sundarbans?',
      options: [
        {id: 'A', text: 'Mangrove forest', correct: true},
        {id: 'B', text: 'Pine forest', correct: false},
        {id: 'C', text: 'Desert woodland', correct: false},
      ],
    },
  },
  {
    id: 'atlantic-forest',
    title: "Atlantic Forest: Brazil's Coastal Jewel",
    shortDescription: "Discover Brazil's colorful coastal rainforest region",
    image: articleImages.atlanticForest,
    paragraphs: [
      "The Atlantic Forest once stretched along a large part of Brazil's eastern coastline. Smaller sections also extend into Paraguay and Argentina. Its landscapes include tropical lowlands, mountain forests, waterfalls, and coastal vegetation. Different elevations and climates have created many distinct habitats within the region.",
      'Golden lion tamarins, jaguars, toucans, sloths, and hundreds of bird species live in the Atlantic Forest. Many species are endemic and depend on small remaining areas of natural habitat. Cities, farms, and roads have replaced much of the original forest. Protected areas and restoration projects are helping reconnect isolated habitats and preserve its biodiversity.',
    ],
    quiz: {
      question: 'Along which part of Brazil did the Atlantic Forest mainly grow?',
      options: [
        {id: 'A', text: 'Eastern coastline', correct: true},
        {id: 'B', text: 'Northern desert', correct: false},
        {id: 'C', text: 'Western grasslands', correct: false},
      ],
    },
  },
];
