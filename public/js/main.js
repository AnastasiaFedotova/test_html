class Form {
    constructor(classForm, classInputNum) {
        this.form = $(classForm);
        this.input = $(classInputNum);
        this.submit = this.form.find("button[type='submit'");
        this.submit.on("click", (e) => {
            e.preventDefault();
            this.submitForm();
        });
    }

    submitForm() {
        if(!/\+\d{3}\(\d{2}\)\d{7}/g.test(this.input.val())) {
            modal.showModal("Введите телефон в формате +375(**)*******");
            this.form[0].reset();
            return;
        }       
        modal.showModal("Сообщение отправлено");
        this.form[0].reset();
    }
}

let form1 = new Form(".contact-form", ".contact-form__input");
let form2 = new Form(".calculator__form", ".calculator__input");
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
class Radio {
    constructor(classRadioList) {
        this.classRadioList = $(classRadioList);
        $(".calculator__radio").on("click", (e) => this.drawForm(e))

    }

    drawForm(event) {
        let arr = event.target.dataset.arr.split(", ");
        $(".calculator__label_selected").removeClass("calculator__label_selected");
        $(event.target.labels).addClass("calculator__label_selected");

        $(".calculator__preview").attr("width", "200px");
        $(".calculator__preview").attr("height", "auto");

        $(".calculator__preview").attr("src", arr[0]);
        $(".calculator__data-title")[0].innerHTML = arr[1];
    }
}

let radio = new Radio(".calculator__list");