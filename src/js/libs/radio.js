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