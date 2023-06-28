// Connect to the server using Socket.io
const socket = io();

// Handle form submission
document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the message input value
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  // Send the message to the server
  socket.emit('chat message', message);

  // Clear the input field
  messageInput.value = '';
});

// Handle incoming messages
socket.on('chat message', (message) => {
  const messagesList = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = message;
  messagesList.appendChild(li);
});