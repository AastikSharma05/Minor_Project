const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

let responses;
fetch("responses.json")
  .then((response) => response.json())
  .then((data) => {
    responses = data;
  })
  .catch((error) => {
    console.error("Failed to load responses:", error);
  });

function showLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "block";
}

function hideLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
}

function performTimeConsumingOperation() {
  showLoadingScreen();

  setTimeout(function () {
    hideLoadingScreen();
  }, 3000);
}
performTimeConsumingOperation();

function getRandomResponse(sentimentCategory) {
  const categoryResponses = responses[sentimentCategory] || responses.neutral;
  const randomIndex = Math.floor(Math.random() * categoryResponses.length);
  return categoryResponses[randomIndex];
}

function scrollChatToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addMessage(message, isUser = false, hasLogo = true) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(isUser ? "user-message" : "bot-message");

  if (hasLogo) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    if (isUser) {
      const messageText = document.createElement("div");
      messageText.textContent = message;
      messageText.classList.add("user-blue-box");
      messageContainer.appendChild(messageText);

      const userIcon = document.createElement("i");
      userIcon.classList.add("fas", "fa-circle-user", "fa-2xl", "user-logo"); 
      messageContainer.appendChild(userIcon);
    } else {
      const logo = document.createElement("i");
      logo.classList.add("fas", "fa-robot", "fa-2xl", "bot-logo"); 
      messageContainer.appendChild(logo);

      const messageText = document.createElement("div");
      messageText.textContent = message;
      messageText.classList.add("blue-box");
      messageContainer.appendChild(messageText);
    }

    messageDiv.appendChild(messageContainer);
  } else {
    messageDiv.textContent = message;
  }

  chatBox.appendChild(messageDiv);
  const chatContent = document.querySelector(".chat-content");
  chatContent.scrollTop = chatContent.scrollHeight;

  const messageSound = document.getElementById("messageSound");
  messageSound.play();
}

function handleUserInput(userMessage) {
  addMessage(userMessage, true);
  userInput.value = "";

  const sentimentResult = sentiment.analyze(userMessage);
  const sentimentScore = sentimentResult.score;
  let sentimentCategory;

  if (sentimentScore > 0) {
    sentimentCategory = "positive";
  } else if (sentimentScore < 0) {
    sentimentCategory = "negative";
  } else if (sentimentScore === 1) {
    sentimentCategory = "score1";
  } else if (sentimentScore === -1) {
    sentimentCategory = "scoreMinus1";
  } else {
    sentimentCategory = "neutral";
  }

  const botResponse = getRandomResponse(sentimentCategory);
  addMessage(botResponse);
}

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMessage = userInput.value;
    handleUserInput(userMessage);
  }
});
