class Modal {
    constructor(classModal) {
        this.modal = $(classModal);
        this.button = this.modal.find(".modal__button");
        this.hideModal = this.hideModal.bind(this);
        this.button.on("click", this.hideModal);
    }

    showModal(message) {
        this.modal.find(".modal__message")[0].innerHTML = message;
        this.modal.addClass("modal_show");
    }

    hideModal() {
        this.modal.find(".modal__message")[0].innerHTML = "";
        this.modal.removeClass("modal_show");
    }
}

var modal = new Modal(".modal");