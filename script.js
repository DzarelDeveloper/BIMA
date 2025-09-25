document.addEventListener('DOMContentLoaded', () => {
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const quickRepliesContainer = document.getElementById('chatbot-quick-replies');

  let chatbotData = {};

  // Load chatbot data from data.json
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      chatbotData = data;
      generateQuickReplies();
      addBotMessage("Halo! Ada yang bisa saya bantu terkait pelayanan publik?");
    })
    .catch(error => console.error('Error loading chatbot data:', error));

  function addMessage(text, sender) {
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message-bubble', sender);
    if (sender === 'bot') {
      messageBubble.innerHTML = text.replace(/\n/g, '<br>'); // Replace \n with <br> for bot messages
    } else {
      messageBubble.innerHTML = text; // Use innerHTML for user messages as well to handle potential HTML
    }
    chatbotMessages.appendChild(messageBubble);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function addBotMessage(text) {
    addMessage(text, 'bot');
  }

  function addUserMessage(text) {
    addMessage(text, 'user');
  }

  function sendMessage(message = null, sender = 'user') {
    const userInput = message || chatbotInput.value.trim();
    if (userInput) {
      if (sender === 'user') {
        addUserMessage(userInput);
      }
      chatbotInput.value = '';
      quickRepliesContainer.style.display = 'none'; // Hide quick replies after first message
      const botResponse = getBotResponse(userInput);
      setTimeout(() => {
        addBotMessage(botResponse);
      }, 500);
    }
  }

  function getBotResponse(userInput) {
      userInput = userInput.toLowerCase();
      let bestMatch = null;
      let bestMatchScore = 0;
  
      for (const category in chatbotData) {
          // Skip the "Default" category for keyword matching
          if (category === "Default") continue;
  
          for (const item of chatbotData[category]) {
              const keywords = item.keyword ? item.keyword.map(k => k.toLowerCase()) : [];
              const synonyms = item.synonyms ? item.synonyms.map(s => s.toLowerCase()) : [];
              const allTerms = [...keywords, ...synonyms];
  
              let currentScore = 0;
              for (const term of allTerms) {
                  if (userInput.includes(term)) {
                      currentScore++;
                  }
              }
  
              if (currentScore > bestMatchScore) {
                  bestMatchScore = currentScore;
                  bestMatch = item.answer;
              }
          }
      }
  
      if (bestMatch) {
          return bestMatch;
      } else {
          // Fallback to the "Default" category if no match is found
          const defaultResponses = chatbotData["Default"];
          if (defaultResponses && defaultResponses.length > 0) {
              return defaultResponses[0].answer; // Return the first default answer
          } else {
              return "Maaf, saya tidak dapat menemukan jawaban yang sesuai.";
          }
      }
  }

  function generateQuickReplies() {
      quickRepliesContainer.innerHTML = '';
      const items = [
        { label: 'Bantuan', query: 'bantuan' },
        { label: 'Alamat', query: 'alamat' },
        { label: 'Jam Layanan', query: 'jam layanan' },
        { label: 'Website', query: 'website' }
      ];

      items.forEach(item => {
        const button = document.createElement('button');
        button.classList.add('quick-reply-button');
        button.textContent = item.label;
        button.dataset.question = item.query; // gunakan delegasi klik di bawah
        quickRepliesContainer.appendChild(button);
      });
  }

  // Event listener for sending messages
  chatbotSend.addEventListener('click', () => sendMessage());
  chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          sendMessage();
      }
  });

  // Initial quick replies generation
  generateQuickReplies();

  // Handle clicks on suggested queries (if any)
  // suggestedQueriesContainer.addEventListener('click', (e) => {
  //     if (e.target.classList.contains('suggested-query-button')) {
  //         const query = e.target.textContent;
  //         sendMessage(query, 'user');
  //     }
  // });

  quickRepliesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('quick-reply-button')) {
      const question = event.target.dataset.question;
      if (question) {
        addUserMessage(question);
        quickRepliesContainer.style.display = 'none'; // Hide quick replies after quick reply click
        const botResponse = getBotResponse(question);
        setTimeout(() => {
          addBotMessage(botResponse);
        }, 500);
      }
    }
  });
});
