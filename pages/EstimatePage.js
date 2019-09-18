import { element } from "../utils/Decorators"

class EstimatePage{
    constructor(){
        //labels
        this.epTotalMonthlyAmountLabel = "//h1[text() = 'Total Monthly Estimate']"

        //amounts
        this.epTotalMonthlyEstimateAmount = "//h1[text() = 'Total Monthly Estimate']/following-sibling::div"
        this.epTotalWorkersCompensationAmount = "//h2[contains(text(), 'Compensation')]/../following-sibling::div/h3"
        this.epTotalAccidentBenefitsAmount = "//h2[contains(text(), 'Accident Benefits')]/../following-sibling::div/h3"
    }

    @element
    getTotalEstimateAmountLabel(){
        return this.epTotalMonthlyAmountLabel;
    }
    @element
    getTotalEstimateAmount(){
        var amount = $(this.epTotalMonthlyEstimateAmount).getText()
        console.log("Amount =>>> " + amount)
        return amount;
    }
    @element
    getWorkersCompensationAmount(){
        var amount = $(this.epTotalWorkersCompensationAmount).getText()
        console.log("Amount =>>> " + amount)
        return amount;
    }
    getAccidentBenefitsAmount(){
        var amount = $(this.epTotalAccidentBenefitsAmount).getText()
        console.log("Amount =>>> " + amount)
        return amount;
    }

}
export default new EstimatePage()