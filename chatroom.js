document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('sendButton');
  const inputMessage = document.getElementById('inputMessage');
  const messagesContainer = document.getElementById('messages');

  sendButton.addEventListener('click', function() {
    const messageText = inputMessage.value.trim();

    if (messageText !== '') {
      // Create a new message element
      const messageElement = document.createElement('div');
      messageElement.className = 'message';

      // Create a new span element for the message text
      const textElement = document.createElement('span');
      textElement.textContent = messageText;
      
      // Append the text element to the message element
      messageElement.appendChild(textElement);

      // Determine if the message is sent or a reply (alternating pattern)
      const isSentMessage = messagesContainer.children.length % 2 === 0;
      messageElement.classList.add(isSentMessage ? 'sent' : 'reply');

      // Append the message element to the messages container
      messagesContainer.appendChild(messageElement);

      // Clear the input field after sending the message
      inputMessage.value = '';
    }
  });
});

