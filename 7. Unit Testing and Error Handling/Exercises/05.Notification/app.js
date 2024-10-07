function notify(message) {
  const notificationRef = document.querySelector('#notification');
  notificationRef.textContent = message;
  notificationRef.style.display = 'block';

  notificationRef.addEventListener('click', () => {
      notificationRef.style.display = 'none';
  });
};