(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-a-modal-open]"),
      closeModalBtn: document.querySelector("[data-a-modal-close]"),
      modal: document.querySelector("[data-a-modal]"),
    };
  
    refs.openModalBtn.forEach(card => card.addEventListener("click", toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();