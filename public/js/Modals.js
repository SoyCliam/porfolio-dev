function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0', 'scale-95');
    modal.classList.add('opacity-100', 'scale-100');
  });
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('opacity-100', 'scale-100');
  modal.classList.add('opacity-0', 'scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}
