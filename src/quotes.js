const quotes = [
  {
    content: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP.jpg/200px-Steve_Jobs_Headshot_2010-CROP.jpg",
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/President_Theodore_Roosevelt%2C_1904.jpg/200px-President_Theodore_Roosevelt%2C_1904.jpg",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Eleanor_Roosevelt_portrait_1933.jpg/200px-Eleanor_Roosevelt_portrait_1933.jpg",
  },
  {
    content: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Wayne_Gretzky_2006-04-18.jpg/200px-Wayne_Gretzky_2006-04-18.jpg",
  },
  {
    content: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Peter_Drucker_Coaching_Entrepreneurs.jpg/200px-Peter_Drucker_Coaching_Entrepreneurs.jpg",
  },
  {
    content:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Walt_Whitman_-_Brady-Handy_restored.png/200px-Walt_Whitman_-_Brady-Handy_restored.png",
  },
  {
    content:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/FDR_in_1933.jpg/200px-FDR_in_1933.jpg",
  },
  {
    content:
      "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/200px-John_Lennon_1969_%28cropped%29.jpg",
  },
  {
    content: "The purpose of life is a life of purpose.",
    author: "Robert Byrne",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Robert_Byrne.jpg/200px-Robert_Byrne.jpg",
  },
  {
    content: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/200px-Albert_Einstein_Head.jpg",
  },
  {
    content:
      "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    author: "Martin Luther King Jr.",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Martin_Luther_King%2C_Jr..jpg/200px-Martin_Luther_King%2C_Jr..jpg",
  },
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Nelson_Mandela-2008_%28edit%29.jpg/200px-Nelson_Mandela-2008_%28edit%29.jpg",
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mahatma-Gandhi%2C_studio%2C_1931.jpg/200px-Mahatma-Gandhi%2C_studio%2C_1931.jpg",
  },
  {
    content:
      "The biggest adventure you can take is to live the life of your dreams.",
    author: "Oprah Winfrey",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Oprah_in_2014.jpg/200px-Oprah_in_2014.jpg",
  },
  {
    content:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    author: "J.K. Rowling",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J_K_Rowling_2010.jpg/200px-J_K_Rowling_2010.jpg",
  },
  {
    content:
      "You don't learn to walk by following rules. You learn by doing, and by falling over.",
    author: "Richard Branson",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Richard_Branson_March_2015.jpg/200px-Richard_Branson_March_2015.jpg",
  },
  {
    content:
      "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Colorado_2022_%28cropped%29.jpg/200px-Elon_Musk_Colorado_2022_%28cropped%29.jpg",
  },
  {
    content:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/200px-Bill_Gates_2018.jpg",
  },
  {
    content: "The best investment you can make is in yourself.",
    author: "Warren Buffett",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Warren_Buffett_KU_Visit_%28cropped%29.jpg/200px-Warren_Buffett_KU_Visit_%28cropped%29.jpg",
  },
  {
    content: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mark_Twain_by_AF_Bradley.jpg/200px-Mark_Twain_by_AF_Bradley.jpg",
  },
  {
    content:
      "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Helen_Keller13.jpg/200px-Helen_Keller13.jpg",
  },
  {
    content:
      "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    author: "Maya Angelou",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Maya_Angelou_2013.jpg/200px-Maya_Angelou_2013.jpg",
  },
  {
    content: "Do not do to others what you do not want done to yourself.",
    author: "Confucius",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Confucius_statue_in_Hainan%2C_China.jpg/200px-Confucius_statue_in_Hainan%2C_China.jpg",
  },
  {
    content: "The Tao that can be told is not the eternal Tao.",
    author: "Lao Tzu",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Laozi_%28Chinese_painting%29.jpg/200px-Laozi_%28Chinese_painting%29.jpg",
  },
  {
    content: "The unexamined life is not worth living.",
    author: "Socrates",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/200px-Socrates_Louvre.jpg",
  },
  {
    content:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Aristotle_Altemps_Inv8575.jpg/200px-Aristotle_Altemps_Inv8575.jpg",
  },
  {
    content: "Courage is knowing what not to fear.",
    author: "Plato",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Plato_Silanion_Musei_Capitolini_MC1377.jpg/200px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
  },
  {
    content: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/200px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
  },
  {
    content:
      "If I have seen further it is by standing on the shoulders of Giants.",
    author: "Isaac Newton",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sir_Isaac_Newton_%281643-1727%29.jpg/200px-Sir_Isaac_Newton_%281643-1727%29.jpg",
  },
  {
    content:
      "It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.",
    author: "Charles Darwin",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Charles_Darwin_1881.jpg/200px-Charles_Darwin_1881.jpg",
  },
  {
    content:
      "The present is theirs; the future, for which I really worked, is mine.",
    author: "Nikola Tesla",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/200px-N.Tesla.JPG",
  },
  {
    content: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/200px-Thomas_Edison2.jpg",
  },
  {
    content: "Whether you think you can, or you think you can't--you're right.",
    author: "Henry Ford",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Henry_ford_1919.jpg/200px-Henry_ford_1919.jpg",
  },
  {
    content: "The first man gets the oyster, the second man gets the shell.",
    author: "Andrew Carnegie",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Andrew_Carnegie%2C_1913.jpg/200px-Andrew_Carnegie%2C_1913.jpg",
  },
  {
    content: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/John_D._Rockefeller_1885_portrait.jpg/200px-John_D._Rockefeller_1885_portrait.jpg",
  },
  {
    content: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg/200px-Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg",
  },
  {
    content: "It is better to offer no excuse than a bad one.",
    author: "George Washington",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/George_Washington_1797.jpg/200px-George_Washington_1797.jpg",
  },
  {
    content: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Abraham_Lincoln_O-77_matte_collodion_print.jpg/200px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
  },
];

export default quotes;
