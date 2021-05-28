let decks = [
  {
    category: "Math",
    id: 0,
    cards: [
      {
        question: "What is the sum of 111 + 222 + 333?",
        cardId: 92211,
        answer: "666",
      },
      { question: "Subtract 457 from 832", cardId: 31899, answer: "375" },
      { question: "50 times 5 is equal to?", cardId: 37573, answer: "250" },
      { question: "What is 90 / 10?", cardId: 38583, answer: "9" },
      { question: "What is 40 + 5 * 3?", cardId: 16853, answer: "55" },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "English",
    id: 1,
    cards: [
      { question: "Be -> was/were -> ?", cardId: 97190, answer: "Been" },
      { question: "Begin -> began -> ?", cardId: 35106, answer: "Begun" },
      { question: "Become -> became -> ?", cardId: 60015, answer: "Become" },
      { question: "Choose -> chose -> ?", cardId: 60895, answer: "Chosen" },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "Polish",
    id: 2,
    cards: [
      {
        question: `Who wrote "Lalka"?`,
        cardId: 66769,
        answer: "Bolesław Prus",
      },
      {
        question: `Who is the main character in "Crime and punishment"`,
        cardId: 40723,
        answer: "Rodion Raskolnikov",
      },
      {
        question: `Who wrote "Wesele"?`,
        cardId: 47773,
        answer: "Stanisław Wyspiański",
      },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "Spanish",
    id: 3,
    cards: [
      { question: `How to say "cat"?`, cardId: 2560, answer: "Gato" },
      { question: `How to say "dog"?`, cardId: 43653, answer: "Perro" },
      { question: `How to say "sun"?`, cardId: 6468, answer: "Sol" },
      { question: `How to say "moon"?`, cardId: 40805, answer: "Luna" },
      { question: `How to say "mother"?`, cardId: 1848, answer: "Mamá" },
      { question: `How to say "father"?`, cardId: 58949, answer: "Padre" },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "Biology",
    id: 4,
    cards: [
      {
        question: "What elements does photosynthesis need?",
        cardId: 67929,
        answer: "H20, CO2, O2",
      },
      {
        question: "Snake is a reptile or amphibian?",
        cardId: 68434,
        answer: "Reptile",
      },
      {
        question: "How many pairs of legs spiders have?",
        cardId: 62244,
        answer: "4",
      },
      {
        question: "What is the biggest muscle in human body?",
        cardId: 49576,
        answer: "Gluteus maximus",
      },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "Chemistry",
    id: 5,
    cards: [
      { question: "What pH acids have?", cardId: 53959, answer: "< 7" },
      { question: "What pH alkalines have?", cardId: 2275, answer: "> 7" },
      {
        question: "What is the chemical symbol of iron?",
        cardId: 50383,
        answer: "Fe",
      },
      {
        question: "What is the chemical symbol of gold?",
        cardId: 55983,
        answer: "Au",
      },
      {
        question: "What is the chemical symbol of silver?",
        cardId: 3598,
        answer: "Ag",
      },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "German",
    id: 6,
    cards: [
      { question: `How to say "mother"`, cardId: 94766, answer: "Mutter" },
      { question: `How to say "child"`, cardId: 88642, answer: "Kind" },
      {
        question: `How to say "butterfly"`,
        cardId: 34121,
        answer: "Schmetterling",
      },
      { question: `How to say "cheese"`, cardId: 14795, answer: "Käse" },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "French",
    id: 7,
    cards: [
      { question: `How to say "cheese"`, cardId: 88006, answer: "Fromage" },
      { question: `How to say "butterfly"`, cardId: 88118, answer: "Papillon" },
      { question: `How to say "mother"`, cardId: 31511, answer: "Maman" },
      { question: `How to say "father"`, cardId: 17895, answer: "Papa" },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "Geography",
    id: 8,
    cards: [
      {
        question: "Who discovered America?",
        cardId: 55782,
        answer: "Christopher Columbus",
      },
      {
        question: "What is the deepest lake in the world?",
        cardId: 68068,
        answer: "Baikal",
      },
      {
        question: "How many continents are there on earth?",
        cardId: 70301,
        answer: "7",
      },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
  {
    category: "History",
    id: 9,
    cards: [
      { question: "When Poland was baptized?", cardId: 81583, answer: "966" },
      {
        question: "In what years was the Second World War?",
        cardId: 67905,
        answer: "1939 - 1945",
      },
      {
        question: "In what years was the First World War?",
        cardId: 87946,
        answer: "1914 - 1918",
      },
      {
        question: "When the World Trade Center was attacked?",
        cardId: 59485,
        answer: "11.09.2001",
      },
    ],
    infoData: {
      timesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      lastPlayed: "22.10.2020",
    },
  },
];

const updateDecks = (newDecks) => {
  decks = newDecks;
};

export { decks, updateDecks };
