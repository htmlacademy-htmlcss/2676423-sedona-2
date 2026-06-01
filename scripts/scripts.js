const openModalButton = document.querySelector('.button-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', () => {
  modal.classList.add('modal-show');
})

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal-show');
})
