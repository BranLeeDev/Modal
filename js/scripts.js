const contentModal = document.querySelector(".content__modal");
const modalBackground = document.querySelector(".main__modal-background");
const buttonOpen = document.querySelector(".content__button-open");
const buttonClose = document.querySelector(".modal__button-close");

buttonOpen.addEventListener("click", () => {
  modalBackground.classList.add("main__modal-background--active");
  contentModal.classList.add("content__modal--active");
});

buttonClose.addEventListener("click", () => {
  modalBackground.classList.remove("main__modal-background--active");
  contentModal.classList.remove("content__modal--active");
});
