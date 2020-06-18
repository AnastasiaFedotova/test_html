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