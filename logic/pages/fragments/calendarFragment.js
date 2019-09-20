import dateFormat from "dateformat";

class CalendarFragment {
    constructor() {
        this.dateCaption = "//div[contains(@class, 'DayPicker-Caption')]/div";
        this.dateNextMonth = "//i[contains(@aria-label, 'Next')]";
        this.dateDay =
            '//div[contains(@class,"DayPicker-Day") ' +
            ' and contains(@aria-label,"{0}")]';
    }

    setDate(date) {
        var nDate = this.dateDay.replace("{0}", date);
        $(nDate).waitForExist(2500)
        while (!$(nDate).isDisplayed()) {
            $(this.dateNextMonth).click();
        }
        $(nDate).click();
    }
    setPolicyDateDays(days) {
        var currentDate = new Date();
        var newDate = new Date();
        newDate.setDate(currentDate.getDate() + days);
        this.setDate(dateFormat(newDate, "ddd mmm dd yyyy"));
    }
    setPolicyDateWeeks(weeks) {
        var currentDate = new Date();
        var future = new Date();
        future.setDate(currentDate.getDate() + weeks * 7);
        this.setDate(dateFormat(future, "ddd mmm dd yyyy"));
    }
}

export default new CalendarFragment();