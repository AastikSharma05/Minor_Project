# Minor Project

The ChatBot for Health Information is a user-friendly web application that provides a diverse range of functionalities catering to users' health information needs and entertainment. The application features three core components:

**Interactive ChatBot:** Users can engage with an advanced chatbot powered by natural language processing (NLP) and sentiment analysis. This chatbot responds to queries and prompts in a conversational manner, offering assistance on a wide array of topics.

**Disease Information:** The application offers a comprehensive repository of disease-related information. Users can access data about various medical conditions, symptoms, treatments, and more by simply providing the name of the disease they want to learn about.

**Random Jokes:** In addition to health-related information, the application introduces an element of humor. Users can request random jokes from the chatbot to brighten their day.

This project successfully combines the realms of health information and entertainment, offering a one-stop solution for users seeking health-related guidance and a touch of humor.

## Tech Stack

### Front-End:
- HTML
- CSS
- Bootstrap
- JavaScript

### Back-End:
- Node.js

### Data:
- JSON

### External Services:
- API

### Build Tools:
- Webpack


## Prerequisites

Before running the project, ensure you have the following software installed on your system:

- Node.js: https://nodejs.org/ (with npm)


## Getting Started

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository:**
   - Open your terminal or command prompt.
   - Run the following command to clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     ```

2. **Navigate to the Project Directory:**
   - Change your current directory to the project folder:
     ```bash
     cd chatbot-project
     ```

3. **Install Dependencies:**
   - Install project dependencies by running the following command:
     ```bash
     npm install
     ```

4. **Bundle the Project:**
   - Bundle the project using Webpack:
     ```bash
     npm run build
     ```

5. **Install Sentiment Library:**
   - This project uses the Sentiment library for sentiment analysis. Install it by running:
     ```bash
     npm install sentiment
     ```

6. **Start the Development Server:**
   - Launch the development server with the following command:
     ```bash
     npm start
     ```

7. **Access the Project:**
   - Once the server is running, you can access the project in your web browser at [http://localhost:3000](http://localhost:3000).


## Features

- **Chatbot Interaction:** Engage in conversations with a web-based chatbot.
- **Disease Information:** Fetch information about diseases.
- **Joke Generation:** Enjoy random jokes.


## Sentiment Analysis

This module of the project focuses on sentiment analysis using Natural Language Processing (NLP) techniques. It helps in determining the emotional tone behind text data, making it a valuable tool for understanding user sentiments and opinions. The Sentiment Analysis module employs a pre-trained NLP model to classify text into positive, negative, or neutral sentiments, providing insights that can be used in various applications, such as chatbots, customer feedback analysis, and more.

 ### Key Features:

Analyze sentiment in text data.
Classify sentiments as positive, negative, or neutral.
Utilizes an NLP model for accurate sentiment classification.
Useful for understanding user emotions and feedback.

