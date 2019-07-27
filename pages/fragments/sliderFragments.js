class SliderFragment {
    constructor() {
        this.sliderButton = "//div[@role = 'slider']"
    }

    moveIt(target, index = 1) {
        //TODO: Add "WaitUntil" method here
        var locator = this.sliderButton + "[" + index + "]"
        var slider = $(locator);
        var valueNow = parseInt(slider.getAttribute("aria-valuenow"), 10);
        var minValue = parseInt(slider.getAttribute("aria-valuemin"), 10);
        var maxValue = parseInt(slider.getAttribute("aria-valuemax"), 10);
        if (target > maxValue){
            target = maxValue;
        }
        slider.click();

        if (valueNow < target) {
            for (let i = minValue; i < target; i++) {
                slider.keys('\uE05A');
            }
        } else {
            for (let i = valueNow; i > target; i--) {
                slider.keys('\uE058');
            }
        }
    }
}

export default new SliderFragment()