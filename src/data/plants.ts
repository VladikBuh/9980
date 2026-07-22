import type {ImageSourcePropType} from 'react-native';

import {plantImages} from './assets';

export type PlantCategory = 'common' | 'poisonous';

export type PlantQuizOptionId = 'A' | 'B' | 'C';

export type PlantQuizOption = {
  id: PlantQuizOptionId;
  text: string;
  correct: boolean;
};

export type Plant = {
  id: string;
  category: PlantCategory;
  title: string;
  shortDescription: string;
  paragraphs: string[];
  image: ImageSourcePropType;
  quiz: {
    question: string;
    options: PlantQuizOption[];
  };
};

export const PLANTS: Plant[] = [
  {
    id: 'kapok-tree',
    category: 'common',
    title: 'Kapok Tree',
    shortDescription: "Discover one of the rainforest's tallest giant trees.",
    image: plantImages.kapokTree,
    paragraphs: [
      'The kapok tree is one of the tallest trees in tropical rainforests, often growing over 60 meters high. Its enormous trunk is supported by wide buttress roots that provide stability in shallow rainforest soil. The broad canopy rises above many other trees, creating shelter for birds, monkeys, insects, and countless other animals. Its branches receive abundant sunlight high above the forest floor.',
      'Kapok trees produce fluffy fibers that surround their seeds, helping the wind carry them over long distances. These fibers have traditionally been used to fill pillows, mattresses, and life jackets because they are light and water-resistant. The tree also plays an important ecological role by providing nesting sites and food for many rainforest species.',
    ],
    quiz: {
      question: 'What helps support the massive trunk of a kapok tree?',
      options: [
        {id: 'A', text: 'Deep underground roots', correct: false},
        {id: 'B', text: 'Buttress roots', correct: true},
        {id: 'C', text: 'Thick vines', correct: false},
      ],
    },
  },
  {
    id: 'rubber-tree',
    category: 'common',
    title: 'Rubber Tree',
    shortDescription: 'Learn where natural rubber comes from.',
    image: plantImages.rubberTree,
    paragraphs: [
      'The rubber tree is native to the tropical rainforest and is famous for producing natural latex. A shallow cut made in its bark allows the white liquid to flow into collecting cups without harming the tree when harvested carefully. This latex is processed into natural rubber used in thousands of everyday products. Rubber plantations later spread to many tropical regions around the world.',
      'In nature, rubber trees grow among many other rainforest plants and provide shade and habitat for insects and birds. Their large leaves help capture sunlight while their roots stabilize the soil. Sustainable harvesting allows the tree to continue producing latex for many years.',
    ],
    quiz: {
      question: 'What valuable substance comes from a rubber tree?',
      options: [
        {id: 'A', text: 'Maple syrup', correct: false},
        {id: 'B', text: 'Natural latex', correct: true},
        {id: 'C', text: 'Olive oil', correct: false},
      ],
    },
  },
  {
    id: 'cacao-tree',
    category: 'common',
    title: 'Cacao Tree',
    shortDescription: 'Discover the rainforest tree that gives us chocolate.',
    image: plantImages.cacaoTree,
    paragraphs: [
      'The cacao tree grows naturally in warm, humid tropical rainforests. Its colorful cocoa pods develop directly on the trunk and large branches instead of hanging from small stems. Inside each pod are dozens of cacao beans surrounded by sweet white pulp. These beans are dried, roasted, and processed to make chocolate.',
      'Cacao trees prefer the shade of taller rainforest trees rather than direct sunlight. They rely on tiny insects to pollinate their small flowers. Wild animals also eat the fruit and help spread seeds through the forest. Today, cacao is one of the world\'s most important tropical crops.',
    ],
    quiz: {
      question: 'Where do cacao pods usually grow?',
      options: [
        {id: 'A', text: 'Underground', correct: false},
        {id: 'B', text: 'Directly on the trunk', correct: true},
        {id: 'C', text: 'At the ends of leaves', correct: false},
      ],
    },
  },
  {
    id: 'banana-plant',
    category: 'common',
    title: 'Banana Plant',
    shortDescription: "Explore one of the world's largest herbaceous plants.",
    image: plantImages.bananaPlant,
    paragraphs: [
      'Although it looks like a tree, the banana plant is actually the world\'s largest herbaceous flowering plant. Its "trunk" is made from tightly wrapped leaf bases rather than wood. Large leaves capture sunlight efficiently in the warm, humid rainforest environment. Most banana plants produce fruit only once before new shoots replace them.',
      'Bananas provide food for monkeys, birds, bats, insects, and many other rainforest animals. The fruit is also one of the world\'s most widely grown crops for human consumption. Banana plants grow quickly in rich tropical soils with plenty of rainfall and warm temperatures.',
    ],
    quiz: {
      question: 'What is unusual about the banana plant?',
      options: [
        {id: 'A', text: 'It is actually a giant herb, not a tree.', correct: true},
        {id: 'B', text: 'It grows only underwater.', correct: false},
        {id: 'C', text: 'It has no leaves.', correct: false},
      ],
    },
  },
  {
    id: 'heliconia',
    category: 'common',
    title: 'Heliconia',
    shortDescription: "Admire one of the rainforest's brightest flowering plants.",
    image: plantImages.heliconia,
    paragraphs: [
      'Heliconia is a tropical plant famous for its striking red, orange, and yellow flower bracts. These colorful structures are often mistaken for flowers, while the true flowers grow inside them. Heliconias thrive in warm, humid rainforests where they receive filtered sunlight beneath the canopy. Their large green leaves resemble those of banana plants.',
      'Many hummingbirds rely on heliconia flowers for nectar and, in return, pollinate the plants as they feed. Rainwater also collects inside the flower bracts, providing tiny habitats for frogs, insects, and other small creatures. Heliconias add vibrant color and biodiversity to tropical forests.',
    ],
    quiz: {
      question: 'Which animals commonly pollinate heliconia plants?',
      options: [
        {id: 'A', text: 'Penguins', correct: false},
        {id: 'B', text: 'Hummingbirds', correct: true},
        {id: 'C', text: 'Seals', correct: false},
      ],
    },
  },
  {
    id: 'strangler-fig',
    category: 'common',
    title: 'Strangler Fig',
    shortDescription: 'Learn how this remarkable tree grows around others.',
    image: plantImages.stranglerFig,
    paragraphs: [
      'The strangler fig begins its life high in the branches of another tree after birds drop its seeds there. As it grows, long roots extend downward until they reach the ground. Over many years these roots thicken and wrap around the host tree, forming a strong network that supports the growing fig. Eventually the original host tree may die, leaving the fig standing on its own.',
      'Strangler figs produce abundant fruit that feeds birds, monkeys, bats, and many other rainforest animals. Their hollow root structures often provide shelter for wildlife as well. These trees play an important role in maintaining healthy rainforest ecosystems by supplying food throughout much of the year.',
    ],
    quiz: {
      question: 'Where does a strangler fig usually begin growing?',
      options: [
        {id: 'A', text: 'Underground', correct: false},
        {id: 'B', text: 'On another tree', correct: true},
        {id: 'C', text: 'In a river', correct: false},
      ],
    },
  },
  {
    id: 'rosary-pea',
    category: 'poisonous',
    title: 'Rosary Pea',
    shortDescription: 'Learn about the beautiful but highly poisonous rosary pea.',
    image: plantImages.rosaryPea,
    paragraphs: [
      'The rosary pea is a climbing vine native to tropical regions around the world. It is selected known for its bright red seeds with a distinctive black spot, making them easy to recognize. These attractive seeds have traditionally been used in jewelry and decorative crafts because of their uniform size and vivid color. However, they contain one of the most dangerous natural plant toxins.',
      'The seeds contain a protein called abrin, which is extremely poisonous if the seed is chewed or broken. Even a small amount can cause severe illness. Fortunately, intact seeds are generally less dangerous because their hard outer shell prevents the toxin from being released. The plant serves as a reminder that colorful plants are not always safe to touch or eat.',
    ],
    quiz: {
      question: 'Which part of the rosary pea is extremely poisonous?',
      options: [
        {id: 'A', text: 'The bright red seeds', correct: true},
        {id: 'B', text: 'The green leaves', correct: false},
        {id: 'C', text: 'The roots only', correct: false},
      ],
    },
  },
  {
    id: 'gympie-gympie',
    category: 'poisonous',
    title: 'Gympie-Gympie',
    shortDescription: "Discover one of the world's most painful stinging plants.",
    image: plantImages.gympieGympie,
    paragraphs: [
      'The Gympie-Gympie plant grows in the rainforests of northeastern Australia and parts of Indonesia. At first glance, its large heart-shaped leaves appear soft and harmless. In reality, they are covered with thousands of tiny needle-like hairs that inject powerful toxins into the skin when touched. Even light contact can cause intense pain.',
      'The pain caused by Gympie-Gympie may last for days, weeks, or even months in severe cases. The tiny hairs can remain in the skin and continue releasing toxins over time. Many animals instinctively avoid the plant, while people walking through rainforests are advised to recognize and avoid it. Despite its danger, it remains an important part of the rainforest ecosystem.',
    ],
    quiz: {
      question: 'What makes the Gympie-Gympie plant dangerous?',
      options: [
        {id: 'A', text: 'Poisonous fruit', correct: false},
        {id: 'B', text: 'Tiny stinging hairs on its leaves', correct: true},
        {id: 'C', text: 'Sharp thorns', correct: false},
      ],
    },
  },
  {
    id: 'strychnine-tree',
    category: 'poisonous',
    title: 'Strychnine Tree',
    shortDescription: 'Explore the tree that produces the poison strychnine.',
    image: plantImages.strychnineTree,
    paragraphs: [
      'The strychnine tree is native to South and Southeast Asia, where it grows in tropical forests. It produces round orange fruits containing flat gray seeds. While the fruit itself is generally not eaten, the seeds contain powerful alkaloids known as strychnine and brucine. These substances have been used in the past for medicinal research and as rodenticides.',
      'Strychnine affects the nervous system and can be extremely dangerous if consumed. Because of its toxicity, the seeds must never be eaten or handled carelessly. Despite its poisonous nature, the tree plays a normal role within its natural ecosystem, where wildlife has adapted to its presence.',
    ],
    quiz: {
      question: 'Which part of the strychnine tree contains the strongest toxins?',
      options: [
        {id: 'A', text: 'The flowers', correct: false},
        {id: 'B', text: 'The seeds', correct: true},
        {id: 'C', text: 'The bark', correct: false},
      ],
    },
  },
  {
    id: 'castor-bean-plant',
    category: 'poisonous',
    title: 'Castor Bean Plant',
    shortDescription: 'Meet the source of the deadly toxin ricin.',
    image: plantImages.castorBeanPlant,
    paragraphs: [
      'The castor bean plant is a fast-growing tropical species recognized by its large star-shaped leaves and colorful spiky seed pods. It is often grown as an ornamental plant because of its striking appearance. The seeds contain ricin, one of the most toxic naturally occurring proteins known. Despite this, the plant also provides valuable castor oil.',
      'Castor oil is safely extracted because ricin does not dissolve into the oil during proper industrial processing. However, chewing raw castor beans can be extremely dangerous. The plant demonstrates how useful and poisonous substances can exist within the same species when handled differently.',
    ],
    quiz: {
      question: 'Which dangerous substance is found inside castor bean seeds?',
      options: [
        {id: 'A', text: 'Latex', correct: false},
        {id: 'B', text: 'Ricin', correct: true},
        {id: 'C', text: 'Caffeine', correct: false},
      ],
    },
  },
  {
    id: 'angels-trumpet',
    category: 'poisonous',
    title: "Angel's Trumpet",
    shortDescription: 'Admire the beauty of this toxic flowering plant.',
    image: plantImages.angelsTrumpet,
    paragraphs: [
      "Angel's trumpet is famous for its large hanging trumpet-shaped flowers that bloom in shades of white, yellow, pink, or orange. Native to South America, it is widely cultivated in tropical and subtropical gardens because of its impressive appearance and sweet fragrance. Its flowers often become more fragrant during the evening to attract pollinating insects.",
      "Despite its beauty, every part of the plant contains toxic alkaloids that affect the nervous system. Eating any part of the plant may cause serious poisoning, confusion, and hallucinations. For this reason, angel's trumpet should only be admired from a safe distance.",
    ],
    quiz: {
      question: "Which part of Angel's Trumpet is poisonous?",
      options: [
        {id: 'A', text: 'Only the roots', correct: false},
        {id: 'B', text: 'Only the flowers', correct: false},
        {id: 'C', text: 'Every part of the plant', correct: true},
      ],
    },
  },
  {
    id: 'deadly-nightshade',
    category: 'poisonous',
    title: 'Deadly Nightshade',
    shortDescription: "Learn about one of history's most infamous poisonous plants.",
    image: plantImages.deadlyNightshade,
    paragraphs: [
      'Deadly nightshade, also known as belladonna, grows naturally in parts of Europe, North Africa, and Western Asia. It produces attractive purple flowers followed by shiny black berries that can easily be mistaken for edible fruit. Throughout history, the plant has been both feared for its poison and studied for its medicinal properties.',
      'The berries, leaves, and roots contain toxic alkaloids that can affect the heart, eyes, and nervous system. Even small amounts may be dangerous if eaten. Although scientists have developed useful medicines from compounds found in belladonna, the wild plant should never be consumed. Correct identification helps prevent accidental poisoning.',
    ],
    quiz: {
      question: 'Which fruit does deadly nightshade produce?',
      options: [
        {id: 'A', text: 'Yellow bananas', correct: false},
        {id: 'B', text: 'Shiny black berries', correct: true},
        {id: 'C', text: 'Green apples', correct: false},
      ],
    },
  },
];
