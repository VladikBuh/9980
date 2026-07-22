import type {ImageSourcePropType} from 'react-native';

import {animalImages} from './assets';

export type AnimalCategory = 'predator' | 'herbivore';

export type AnimalQuizOptionId = 'A' | 'B' | 'C';

export type AnimalQuizOption = {
  id: AnimalQuizOptionId;
  text: string;
  correct: boolean;
};

export type Animal = {
  id: string;
  category: AnimalCategory;
  title: string;
  shortDescription: string;
  paragraphs: string[];
  image: ImageSourcePropType;
  quiz: {
    question: string;
    options: AnimalQuizOption[];
  };
};

export const ANIMALS: Animal[] = [
  {
    id: 'jaguar',
    category: 'predator',
    title: 'Jaguar',
    shortDescription: 'Meet the largest wild cat in the Americas.',
    image: animalImages.jaguar,
    paragraphs: [
      'The jaguar is the largest feline living in the Americas and one of the most powerful predators in the rainforest. It has a muscular body, strong jaws, and a beautiful coat covered with dark rosettes. Jaguars are excellent swimmers and often hunt near rivers, lakes, and wetlands. They usually move silently through dense vegetation while searching for prey.',
      'Jaguars feed on fish, deer, capybaras, monkeys, turtles, and even caimans. Their powerful bite allows them to pierce the skulls or shells of their prey, making them unique among big cats. Jaguars help maintain a healthy ecosystem by controlling animal populations. Habitat destruction and illegal hunting have reduced their numbers in many regions.',
    ],
    quiz: {
      question: 'What makes the jaguar different from many other big cats?',
      options: [
        {id: 'A', text: 'It cannot climb trees', correct: false},
        {id: 'B', text: 'It is an excellent swimmer', correct: true},
        {id: 'C', text: 'It only hunts at night', correct: false},
      ],
    },
  },
  {
    id: 'green-anaconda',
    category: 'predator',
    title: 'Green Anaconda',
    shortDescription: "Discover one of the world's largest snakes.",
    image: animalImages.greenAnaconda,
    paragraphs: [
      'The green anaconda lives in tropical rivers, swamps, and flooded forests of South America. It is one of the heaviest snakes on Earth and can grow to impressive lengths. Its olive-green body is covered with dark spots that provide excellent camouflage in muddy water. Most of its time is spent partially submerged while waiting for prey.',
      'Anacondas capture animals by wrapping their strong bodies around them and squeezing until they can no longer breathe. They feed on fish, birds, capybaras, deer, caimans, and other large animals. Despite their size, they usually avoid humans whenever possible. Their presence helps keep wetland ecosystems balanced.',
    ],
    quiz: {
      question: 'Where does the green anaconda spend most of its time?',
      options: [
        {id: 'A', text: 'High in trees', correct: false},
        {id: 'B', text: 'In or near water', correct: true},
        {id: 'C', text: 'Underground', correct: false},
      ],
    },
  },
  {
    id: 'harpy-eagle',
    category: 'predator',
    title: 'Harpy Eagle',
    shortDescription: "Meet one of the rainforest's most powerful birds.",
    image: animalImages.harpyEagle,
    paragraphs: [
      'The harpy eagle is among the largest and strongest eagles in the world. It lives in the tall forests of Central and South America, nesting high above the ground. Its broad wings, powerful talons, and excellent eyesight make it an exceptional hunter. A distinctive crest of feathers rises on its head when the bird becomes alert.',
      'Harpy eagles mainly hunt sloths, monkeys, large birds, and other tree-dwelling animals. They fly quietly through the forest canopy before suddenly attacking their prey. Healthy forests with large trees are essential for their survival because they need strong branches for nesting. Deforestation is one of the biggest threats facing this remarkable bird.',
    ],
    quiz: {
      question: 'What is the harpy eagle famous for?',
      options: [
        {id: 'A', text: 'Its powerful talons', correct: true},
        {id: 'B', text: 'Its bright blue feathers', correct: false},
        {id: 'C', text: 'Its long swimming tail', correct: false},
      ],
    },
  },
  {
    id: 'black-caiman',
    category: 'predator',
    title: 'Black Caiman',
    shortDescription: 'Explore the largest predator of tropical rivers.',
    image: animalImages.blackCaiman,
    paragraphs: [
      'The black caiman is the largest member of the caiman family and one of the featured predators in the tropical river basin. It lives in slow-moving rivers, lakes, and flooded forests where it blends into dark water. Its rough armored skin and powerful jaws make it an effective hunter. Young caimans feed on insects and fish before moving to larger prey as they grow.',
      'Adult black caimans hunt fish, turtles, birds, capybaras, deer, and other animals that approach the water. They usually remain almost motionless before launching a sudden attack. As apex predators, they help maintain healthy aquatic ecosystems. Conservation programs have helped some populations recover after heavy hunting in the past.',
    ],
    quiz: {
      question: 'Where does the black caiman usually hunt?',
      options: [
        {id: 'A', text: 'Open grasslands', correct: false},
        {id: 'B', text: 'Rivers and lakes', correct: true},
        {id: 'C', text: 'Mountain cliffs', correct: false},
      ],
    },
  },
  {
    id: 'ocelot',
    category: 'predator',
    title: 'Ocelot',
    shortDescription: 'Learn about the beautifully spotted rainforest cat.',
    image: animalImages.ocelot,
    paragraphs: [
      'The ocelot is a medium-sized wild cat that lives in tropical forests across the Americas. Its golden coat is covered with striking black spots and stripes that provide excellent camouflage among leaves and shadows. Ocelots are mostly active during the night, quietly moving through dense vegetation while searching for food. They are skilled climbers and swimmers.',
      'Their diet includes rodents, birds, reptiles, frogs, monkeys, and other small animals. Ocelots play an important role in controlling populations of smaller prey species. Although they are adaptable hunters, habitat loss has reduced their available territory. Protected forests are essential for their long-term survival.',
    ],
    quiz: {
      question: 'When is the ocelot most active?',
      options: [
        {id: 'A', text: 'During the night', correct: true},
        {id: 'B', text: 'Only at sunrise', correct: false},
        {id: 'C', text: 'Only during the afternoon', correct: false},
      ],
    },
  },
  {
    id: 'king-cobra',
    category: 'predator',
    title: 'King Cobra',
    shortDescription: "Meet the world's longest venomous snake.",
    image: animalImages.kingCobra,
    paragraphs: [
      'The king cobra lives in forests across South and Southeast Asia. It is the longest venomous snake in the world and can raise the front part of its body high above the ground. When threatened, it spreads its famous hood and produces a loud warning hiss. Despite its intimidating appearance, it usually avoids conflict with people.',
      'King cobras mainly feed on other snakes, including venomous species. Their powerful venom helps them quickly subdue prey before swallowing it whole. Unlike most snakes, females build nests and guard their eggs until they hatch. Habitat destruction remains one of the greatest dangers to this remarkable reptile.',
    ],
    quiz: {
      question: 'What does the king cobra mainly eat?',
      options: [
        {id: 'A', text: 'Fruit', correct: false},
        {id: 'B', text: 'Other snakes', correct: true},
        {id: 'C', text: 'Fish', correct: false},
      ],
    },
  },
  {
    id: 'poison-dart-frog',
    category: 'predator',
    title: 'Poison Dart Frog',
    shortDescription: 'Discover a tiny frog with powerful natural toxins.',
    image: animalImages.poisonDartFrog,
    paragraphs: [
      'Poison dart frogs are small, brightly colored amphibians living in Central and South American rainforests. Their vivid blue, yellow, orange, red, and green colors warn predators that they contain toxic chemicals. These frogs spend much of their time on the forest floor or low vegetation in humid environments. Their bright appearance is an example of warning coloration in nature.',
      'The frogs obtain many of their toxins from insects such as ants and mites that they eat in the wild. Some indigenous communities traditionally used these toxins on hunting darts, giving the frogs their common name. Despite their dangerous skin, poison dart frogs are peaceful animals that feed mainly on tiny insects. Habitat destruction threatens many species.',
    ],
    quiz: {
      question: 'Why are poison dart frogs so brightly colored?',
      options: [
        {id: 'A', text: 'To attract fish', correct: false},
        {id: 'B', text: 'To warn predators', correct: true},
        {id: 'C', text: 'To stay warm', correct: false},
      ],
    },
  },
  {
    id: 'leopard',
    category: 'predator',
    title: 'Leopard',
    shortDescription: "Explore one of the world's most adaptable big cats.",
    image: animalImages.leopard,
    paragraphs: [
      'Leopards live in forests, mountains, grasslands, and tropical regions across Africa and Asia. Their spotted coats provide excellent camouflage, allowing them to move almost unnoticed through dense vegetation. Leopards are solitary animals that rely on patience and stealth rather than speed. They often drag their prey into trees to protect it from scavengers.',
      'Their diet includes deer, monkeys, wild pigs, birds, and many smaller mammals. Leopards are highly adaptable and can survive in a wide variety of habitats. However, habitat loss and illegal hunting continue to threaten many populations. Conservation efforts focus on protecting both the animals and the forests where they live.',
    ],
    quiz: {
      question: 'Why do leopards often carry prey into trees?',
      options: [
        {id: 'A', text: 'To cool the meat', correct: false},
        {id: 'B', text: 'To protect it from other predators', correct: true},
        {id: 'C', text: 'To feed baby birds', correct: false},
      ],
    },
  },
  {
    id: 'sloth',
    category: 'herbivore',
    title: 'Sloth',
    shortDescription: 'Discover the slow-moving master of the rainforest canopy.',
    image: animalImages.sloth,
    paragraphs: [
      'Sloths spend almost their entire lives hanging upside down in the trees of Central and South American rainforests. Their long curved claws allow them to grip branches securely while moving very slowly through the canopy. Their thick fur often hosts algae, giving it a greenish color that helps them blend into their surroundings. This excellent camouflage protects them from predators.',
      'Sloths mainly feed on leaves, young shoots, flowers, and occasionally fruit. Because leaves provide little energy, their metabolism is extremely slow, allowing them to conserve energy throughout the day. They play an important role in the rainforest by supporting insects and microorganisms that live in their fur. Healthy forests are essential for their survival.',
    ],
    quiz: {
      question: 'Why do sloths move so slowly?',
      options: [
        {
          id: 'A',
          text: 'They have very little energy from their leaf diet.',
          correct: true,
        },
        {id: 'B', text: 'Their legs are too short.', correct: false},
        {id: 'C', text: 'They cannot see well.', correct: false},
      ],
    },
  },
  {
    id: 'tapir',
    category: 'herbivore',
    title: 'Tapir',
    shortDescription: "Meet one of the rainforest's largest plant-eating mammals.",
    image: animalImages.tapir,
    paragraphs: [
      'Tapirs are large herbivorous mammals that live near rivers and wetlands in tropical forests. Their short, flexible snouts help them grab leaves, fruits, and aquatic plants. Although they look somewhat like pigs, tapirs are actually more closely related to horses and rhinoceroses. They are strong swimmers and often enter the water to cool off or escape predators.',
      'Tapirs play an important role in spreading seeds throughout the rainforest. After eating fruit, they carry seeds to new areas where new plants can grow. This makes them valuable gardeners of the forest. Habitat destruction and illegal hunting have caused tapir populations to decline in many regions.',
    ],
    quiz: {
      question: 'What special body part helps a tapir gather food?',
      options: [
        {id: 'A', text: 'Long ears', correct: false},
        {id: 'B', text: 'Flexible snout', correct: true},
        {id: 'C', text: 'Sharp horns', correct: false},
      ],
    },
  },
  {
    id: 'gorilla',
    category: 'herbivore',
    title: 'Gorilla',
    shortDescription: 'Learn about the largest living primate.',
    image: animalImages.gorilla,
    paragraphs: [
      'Gorillas live in the forests of Central Africa and are the largest members of the primate family. They live in family groups led by a dominant silverback male who protects the troop. Gorillas are intelligent animals that communicate through facial expressions, sounds, and body language. Despite their great strength, they are generally peaceful.',
      'Their diet consists mainly of leaves, stems, shoots, bark, and fruit. By feeding on many different plants, gorillas help shape forest vegetation and spread seeds across their habitat. Mountain gorillas and lowland gorillas both face threats from habitat loss, disease, and poaching. Conservation programs have helped some populations recover.',
    ],
    quiz: {
      question: 'Who usually leads a gorilla family group?',
      options: [
        {id: 'A', text: 'Youngest female', correct: false},
        {id: 'B', text: 'Silverback male', correct: true},
        {id: 'C', text: 'Largest baby', correct: false},
      ],
    },
  },
  {
    id: 'capybara',
    category: 'herbivore',
    title: 'Capybara',
    shortDescription: "Discover the world's largest rodent.",
    image: animalImages.capybara,
    paragraphs: [
      'Capybaras are friendly-looking mammals that live near rivers, lakes, and marshes in South America. They have partially webbed feet, making them excellent swimmers. Capybaras often live in groups and spend much of the day grazing or resting close to water. If threatened, they quickly escape by diving into rivers.',
      'Their diet includes grasses, aquatic plants, leaves, and fruit. Capybaras provide food for many rainforest predators such as jaguars, caimans, and anacondas, making them an important part of the food web. They also help maintain healthy wetlands by grazing on fast-growing vegetation.',
    ],
    quiz: {
      question: 'What is the capybara known for?',
      options: [
        {id: 'A', text: "Being the world's largest rodent", correct: true},
        {id: 'B', text: 'Living in deserts', correct: false},
        {id: 'C', text: 'Hunting fish', correct: false},
      ],
    },
  },
  {
    id: 'spider-monkey',
    category: 'herbivore',
    title: 'Spider Monkey',
    shortDescription: "Watch one of the rainforest's most agile climbers.",
    image: animalImages.spiderMonkey,
    paragraphs: [
      'Spider monkeys spend nearly all of their lives high in the rainforest canopy. They have extremely long arms, legs, and a strong prehensile tail that acts like an extra hand. Their flexible bodies allow them to swing gracefully between branches while searching for food. Large groups often travel together through the treetops.',
      'Spider monkeys mainly eat fruit but also consume leaves, flowers, seeds, and insects. As they move through the forest, they spread seeds over large distances, helping new trees grow. Unfortunately, habitat destruction has reduced many spider monkey populations across Central and South America.',
    ],
    quiz: {
      question: 'What makes spider monkeys excellent climbers?',
      options: [
        {id: 'A', text: 'Sharp claws', correct: false},
        {id: 'B', text: 'A prehensile tail', correct: true},
        {id: 'C', text: 'Large wings', correct: false},
      ],
    },
  },
  {
    id: 'okapi',
    category: 'herbivore',
    title: 'Okapi',
    shortDescription: 'Meet the shy forest relative of the giraffe.',
    image: animalImages.okapi,
    paragraphs: [
      'The okapi lives in the dense rainforests of the Democratic Republic of the Congo. Although it has striped legs like a zebra, it is actually the closest living relative of the giraffe. Its dark reddish-brown coat helps it disappear into the shadows of the forest. Okapis are solitary animals that are rarely seen in the wild.',
      'They feed on leaves, buds, ferns, grasses, fungi, and fruit. Their long tongue allows them to pull leaves from branches and even clean their own eyes and ears. Logging and habitat destruction threaten the remaining populations, making conservation efforts increasingly important.',
    ],
    quiz: {
      question: 'Which animal is the okapi most closely related to?',
      options: [
        {id: 'A', text: 'Zebra', correct: false},
        {id: 'B', text: 'Horse', correct: false},
        {id: 'C', text: 'Giraffe', correct: true},
      ],
    },
  },
  {
    id: 'red-macaw',
    category: 'herbivore',
    title: 'Red Macaw',
    shortDescription: "Discover one of the rainforest's brightest birds.",
    image: animalImages.redMacaw,
    paragraphs: [
      'Red macaws are large parrots that live in the tropical forests of Central and South America. Their brilliant red feathers are accented with blue and yellow wings, making them easy to recognize. Strong curved beaks allow them to crack open hard nuts and seeds. Macaws often form lifelong pairs and communicate with loud calls while flying above the forest.',
      'Their diet includes fruit, seeds, nuts, berries, and flowers. As they feed, they help spread seeds throughout the rainforest, supporting the growth of new plants. Illegal wildlife trade and habitat destruction have reduced populations in some areas, although conservation projects continue to protect these colorful birds.',
    ],
    quiz: {
      question: 'What helps a red macaw crack hard nuts?',
      options: [
        {id: 'A', text: 'Sharp claws', correct: false},
        {id: 'B', text: 'Strong curved beak', correct: true},
        {id: 'C', text: 'Long tail', correct: false},
      ],
    },
  },
  {
    id: 'forest-elephant',
    category: 'herbivore',
    title: 'Forest Elephant',
    shortDescription: 'Explore the gentle giant of African rainforests.',
    image: animalImages.forestElephant,
    paragraphs: [
      'Forest elephants are smaller than African savanna elephants but are perfectly adapted to life in dense tropical forests. They use their trunks to gather food, drink water, and communicate with other elephants. Their straighter tusks help them move through thick vegetation and dig for minerals. They often travel along ancient forest paths created over many generations.',
      'Forest elephants eat leaves, fruit, bark, roots, and grasses. They spread thousands of seeds across the rainforest every day, helping maintain healthy forests and encouraging new plant growth. Because of poaching and habitat loss, forest elephants are considered one of Africa\'s most threatened large mammals.',
    ],
    quiz: {
      question: 'Why are forest elephants important for rainforest plants?',
      options: [
        {id: 'A', text: 'They spread seeds across the forest.', correct: true},
        {id: 'B', text: 'They build nests in trees.', correct: false},
        {id: 'C', text: 'They pollinate flowers.', correct: false},
      ],
    },
  },
];
