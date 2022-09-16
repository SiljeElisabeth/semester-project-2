export function displayMessage(type, message, container) {
  const messageContainer = document.querySelector(container);

  messageContainer.innerHTML = `<p class="message ${type}">${message}</p>`;
}
