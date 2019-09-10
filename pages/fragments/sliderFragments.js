import {
    element
} from "../../utils/Decorators";
import {closeTimeValue } from "../fragments/closTimeValues";

class SliderFragment {
    constructor() {
        this.sliderButton = "//div[@role = 'slider']"
    }

    moveIt(target, index = 0) {
        var sliderComponent = this.getSliderComponent(index)
        var slider = sliderComponent[0].value
        var valueNow = sliderComponent[1].value
        var minValue = sliderComponent[2].value
        var maxValue = sliderComponent[3].value
        var interval = sliderComponent[4].value

        if (valueNow < target) {
            for (let i = minValue; i < target; i = i + interval) {
                slider.keys('\uE05A');
            }
        } else {
            for (let i = valueNow; i > target; i = i - interval) {
                slider.keys('\uE058');
            }
        }
    }

    getAllSliders() {
        var locator = this.sliderButton
        $(locator).waitForExist(15000)
        return $$(locator)
    }

    /**
     * Public Methods
     **/
    setSliderValue(value, index = 0) {
        if (typeof value === "number") {
            this.moveIt(value, index)
        } else if (typeof value === "string") {
            if (value.includes(":")) {
                var target = this.getClosingTimeTarget(value)
                this.moveIt(target, index)
            } else if (value.includes("K") || value.includes("M")) {
                var target = this.getPayrollTarget(value)
                this.moveIt(target, index)
            }
        }
    }

    getSliderComponent(index) {
        var ret_slider = []
        var locator = this.sliderButton
        browser.pause(500)
        $(locator).waitForExist(5000)
        var slider = $$(locator)[index]
        var valueNow = parseInt(slider.getAttribute("aria-valuenow"), 10);
        var minValue = parseInt(slider.getAttribute("aria-valuemin"), 10);
        var maxValue = parseInt(slider.getAttribute("aria-valuemax"), 10);

        slider.click();
        slider.keys('\uE05A');
        var temp_slider = $(locator);
        var interval = Math.abs(parseInt(temp_slider.getAttribute("aria-valuenow"), 10)) - valueNow;
        slider.keys('\uE058');

        ret_slider.push({
            name: "slider",
            value: slider
        })
        ret_slider.push({
            name: "valueNow",
            value: valueNow
        })
        ret_slider.push({
            name: "minValue",
            value: minValue
        })
        ret_slider.push({
            name: "maxValue",
            value: maxValue
        })
        ret_slider.push({
            name: "interval",
            value: interval
        })

        return ret_slider
    }

    getClosingTimeTarget(value) {
        return closeTimeValue[value]
    }

    getPayrollTarget(value) {
        var payrollAmount = {}
        var amount = 0
        var newValue = value.replace("$", "")
        newValue = newValue.replace("K", "")
        return newValue
    }    

}

export default new SliderFragment()