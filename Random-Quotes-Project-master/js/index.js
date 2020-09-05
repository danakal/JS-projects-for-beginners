'use strict';

const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    },
    { quote: "I think the perfection of love is that it’s not perfect.",
        author: "Taylor Swift"
    },
    {
        quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "Life without love is like a tree without blossoms or fruit.",
        author: "Khalil Gibran"
    },
    {
        quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
        author: "Maya Angelou"
    },
    {
        quote: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
        author: "Victor Hugo"
    },
    {
        quote: "You are my heart, my life, my one and only thought.",
        author: "Arthur Conan Doyle"
    },
    {
        quote: "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
        author: "Victor Hugo"
    },
    {
        quote: "When I tell you I love you, I don’t say it out of habit. I say it to remind you that you’re the best thing that ever happened to me.",
        author: "Onyebuchi Princewill"
    },
  ];

document.querySelector('#generate-btn').addEventListener('click', function () {
    let quoteText = document.querySelector('#quote');
    let authorText = document.querySelector('.author');
    let index = Math.floor(Math.random ()*quotes.length);
    quoteText.textContent = quotes[index].quote;
    authorText.textContent = quotes[index].author;
});