const modal = document.querySelector('.modal-backdrop');

const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

if (modalBtnClose) {
  modalBtnClose.addEventListener('click', toggleModal);
}
