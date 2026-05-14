document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
      {
          question: "A friend is visiting from out of town. Where do you take them for dinner?",
          answers: [
              { text: "A cozy, traditional spot we\'ve been going to for years.", type: "Hokkien" },
              { text: "The trendy new fusion restaurant everyone\'s talking about.", type: "Nonya" },
              { text: "The most exclusive, high-end restaurant in the city.", type: "Cantonese" },
              { text: "A place that offers a bit of everything, so everyone finds something they like.", type: "Teochew" },
              { text: "A quiet, minimalist cafe with a simple, high-quality menu.", type: "Kee Zhang" },
          ]
      },
      {
          question: "You\'re picking a movie to watch. What\'s your go-to genre?",
          answers: [
              { text: "A timeless classic drama.", type: "Hokkien" },
              { text: "An indie film with a unique art style.", type: "Nonya" },
              { text: "A blockbuster action movie with a star-studded cast.", type: "Cantonese" },
              { text: "A thought-provoking documentary.", type: "Teochew" },
              { text: "A peaceful nature film.", type: "Kee Zhang" },
          ]
      },
      {
        question: "How do you approach a new project at work?",
        answers: [
            { text: "I stick to the tried-and-true methods that I know will work.", type: "Hokkien" },
            { text: "I brainstorm a completely new way to tackle the problem.", type: "Nonya" },
            { text: "I aim to deliver a spectacular result that will impress everyone.", type: "Cantonese" },
            { text: "I try to find a middle ground, incorporating the best of old and new ideas.", type: "Teochew" },
            { text: "I break it down to its simplest components and focus on the essentials.", type: "Kee Zhang" },
        ]
    },
    {
        question: "What\'s your ideal weekend getaway?",
        answers: [
            { text: "Going back to my hometown to visit family.", type: "Hokkien" },
            { text: "Exploring a vibrant, artistic city I\'ve never been to.", type: "Nonya" },
            { text: "A luxury spa resort with all the amenities.", type: "Cantonese" },
            { text: "A camping trip where I can be both active and relaxed.", type: "Teochew" },
            { text: "A silent retreat in the mountains.", type: "Kee Zhang" },
        ]
    },
    {
        question: "When you receive a gift, what are you most grateful for?",
        answers: [
            { text: "The sentiment and tradition behind the gift.", type: "Hokkien" },
            { text: "The creativity and uniqueness of the item.", type: "Nonya" },
            { text: "The generosity and thoughtfulness of the giver.", type: "Cantonese" },
            { text: "The usefulness and balance it brings to my life.", type: "Teochew" },
            { text: "The simplicity and elegance of the gesture.", type: "Kee Zhang" },
        ]
    },
    {
        question: "What\'s your personal style like?",
        answers: [
            { text: "Classic and comfortable.", type: "Hokkien" },
            { text: "Eclectic and colorful.", type: "Nonya" },
            { text: "Bold and luxurious.", type: "Cantonese" },
            { text: "Functional and well-coordinated.", type: "Teochew" },
            { text: "Minimalist and understated.", type: "Kee Zhang" },
        ]
    },
    {
        question: "How do you handle conflict?",
        answers: [
            { text: "I rely on established rules and common sense to find a solution.", type: "Hokkien" },
            { text: "I try to find a creative compromise that no one has thought of.", type: "Nonya" },
            { text: "I make a grand gesture to show I\'m committed to resolving it.", type: "Cantonese" },
            { text: "I listen to all sides and try to find a fair and balanced outcome.", type: "Teochew" },
            { text: "I prefer to step back and let things cool down, addressing the core issue later.", type: "Kee Zhang" },
        ]
    },
    {
        question: "What kind of friend are you?",
        answers: [
            { text: "The dependable one everyone can count on.", type: "Hokkien" },
            { text: "The one who encourages everyone to try new things.", type: "Nonya" },
            { text: "The one who loves to celebrate and treat my friends.", type: "Cantonese" },
            { text: "The one who mediates disagreements and keeps the group together.", type: "Teochew" },
            { text: "The one who offers a calm and listening ear.", type: "Kee Zhang" },
        ]
    },
    {
        question: "What\'s your favorite part of a big celebration?",
        answers: [
            { text: "The traditions and rituals that have been passed down.", type: "Hokkien" },
            { text: "The unique decorations and creative themes.", type: "Nonya" },
            { text: "The abundance of food and the festive atmosphere.", type: "Cantonese" },
            { text: "The harmony of seeing friends and family from different parts of your life come together.", type: "Teochew" },
            { text: "The simple joy of being in the moment.", type: "Kee Zhang" },
        ]
    },
    {
        question: "You have a free afternoon. What do you do?",
        answers: [
            { text: "Spend quality time with family.", type: "Hokkien" },
            { text: "Work on a creative hobby like painting or writing.", type: "Nonya" },
            { text: "Go on a shopping spree.", type: "Cantonese" },
            { text: "Organize my schedule for the week ahead.", type: "Teochew" },
            { text: "Meditate or enjoy some quiet time alone.", type: "Kee Zhang" },
        ]
    }
  ];

  const resultsData = {
    Hokkien: { 
        title: "You are the Hokkien Zhongzi - The Stalwart!",
        description: "You are a pillar of strength and tradition. Reliable and deeply rooted in your values, you are a source of comfort and stability for those around you. You believe in doing things the right way and cherish history.",
        img: "hokkien_zhongzi.png"
    },
    Nonya: { 
        title: "You are the Nonya Zhongzi - The Creative!", 
        description: "You have a vibrant and innovative spirit. You love to blend different ideas, cultures, and experiences to create something new and beautiful. Your unique perspective is your greatest asset.",
        img: "nonya_zhongzi.png"
    },
    Cantonese: { 
        title: "You are the Cantonese Zhongzi - The Extravagant!",
        description: "You have a taste for the finer things in life and a generous heart. You believe in celebrating life to the fullest and sharing your abundance with others. You are a natural host and a magnanimous friend.",
        img: "cantonese_zhongzi.png"
    },
    Teochew: { 
        title: "You are the Teochew Zhongzi - The Balanced!",
        description: "You seek harmony and balance in all aspects of your life. You are a thoughtful and diplomatic person, able to see multiple perspectives and find a middle ground. You bring people together.",
        img: "teochew_zhongzi.png"
    },
    "Kee Zhang": { 
        title: "You are the Kee Zhang - The Pure!",
        description: "You find beauty in simplicity and elegance. You have a pure heart and a clear mind, appreciating the essential and uncluttered aspects of life. You are a source of calm and clarity.",
        img: "kee_zhang_zhongzi.png"
    }
};

  let currentQuestionIndex = 0;
  let scores = {};

  const startBtn = document.getElementById('start-quiz-btn');
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const mainContent = document.querySelector('.card-container');
  const startContainer = document.querySelector('.start-quiz-container');

  startBtn.addEventListener('click', startQuiz);

  function startQuiz() {
      mainContent.style.display = 'none';
      startContainer.style.display = 'none';
      resultContainer.style.display = 'none';
      quizContainer.style.display = 'block';
      currentQuestionIndex = 0;
      scores = { Hokkien: 0, Nonya: 0, Cantonese: 0, Teochew: 0, "Kee Zhang": 0 };
      showQuestion();
  }

  function showQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionEl.textContent = currentQuestion.question;
      answersEl.innerHTML = '';
      currentQuestion.answers.forEach(answer => {
          const button = document.createElement('button');
          button.textContent = answer.text;
          button.classList.add('answer-btn');
          button.addEventListener('click', () => selectAnswer(answer.type));
          answersEl.appendChild(button);
      });
  }

  function selectAnswer(type) {
      scores[type]++;
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
          showQuestion();
      } else {
          showResult();
      }
  }

  function showResult() {
      quizContainer.style.display = 'none';
      resultContainer.style.display = 'block';
      const finalResultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
      const result = resultsData[finalResultType];
      
      resultContainer.innerHTML = `
          <h2>${result.title}</h2>
          <img src="${result.img}" alt="${result.title}" class="result-img">
          <p>${result.description}</p>
          <div class="result-buttons">
            <button id="restart-btn" class="start-quiz-btn">Take the Quiz Again</button>
            <button id="show-all-btn" class="start-quiz-btn">Discover All Types</button>
          </div>
      `;

      document.getElementById('restart-btn').addEventListener('click', startQuiz);
      document.getElementById('show-all-btn').addEventListener('click', showAllCards);
  }

  function showAllCards() {
    resultContainer.style.display = 'none';
    mainContent.style.display = 'grid';
    startContainer.style.display = 'block';
  }
});
