import {
    element
} from "../../utils/Decorators";
// import {
//     closeTimeValue
// } from "../../pages/fragments/closeTimeValues";

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
            for (let i = minValue; i != target; i = i + 1) {
                // console.log("Value Now =====>>>>>> " + valueNow)
                // console.log("Target    =====>>>>>> " + target) 
                // console.log("interval  =====>>>>>> " + interval)
                // console.log("i         =====>>>>>> " + i)                 
                slider.keys('\uE05A');
            }
        } else {
            for (let i = valueNow; i != target; i = i - 1) {
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
        var closeTimeValue = {
            "6:00 am": 0,
            "6:30 am": 1,
            "7:00 am": 2,
            "7:30 am": 3,
            "8:00 am": 4,
            "8:30 am": 5,
            "9:00 am": 6,
            "9:30 am": 7,
            "10:00 am": 8,
            "10:30 am": 9,
            "11:00 am": 10,
            "11:30 am": 11,
            "12:00 pm": 12,
            "12:30 pm": 13,
            "1:00 pm": 14,
            "1:30 pm": 15,
            "2:00 pm": 16,
            "2:30 pm": 17,
            "3:00 pm": 18,
            "3:30 pm": 19,
            "4:00 pm": 20,
            "4:30 pm": 21,
            "5:00 pm": 22,
            "5:30 pm": 23,
            "6:00 pm": 24,
            "6:30 pm": 25,
            "7:00 pm": 26,
            "7:30 pm": 27,
            "8:30 pm": 28,
            "9:30 pm": 29,
            "10:00 pm": 30,
            "10:30 pm": 31,
            "11:00 pm": 32,
            "11:30 pm": 33,
            "12:00 am": 34,
            "12:30 am": 35,
            "1:00 am": 36,
            "1:30 am": 37,
            "2:00 am": 38,
            "2:30 am": 39,
            "3:00 am": 40,
            "3:30 am": 41,
            "4:00 am": 42,
            "4:30 am": 43,
            "5:00 am": 44,
            "5:30 am": 45,
            "24 hours": 46
        }
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