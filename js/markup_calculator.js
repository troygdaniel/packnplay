/*jslint nomen: true*/

function MarkupCalculator(p) {
    "use strict";

    this.product = p;
    // Configurable markup rates
    var markupConfig = {
        flatRate: 0.05,
        peopleRate: 0.012,
        materialRate: {
            food: 0.13,
            drugs: 0.075,
            electronics: 0.02
        }
    };

    // Calc the markup based on the # of ppl working
    function markupForPeople(ppl) {
        return markupConfig.peopleRate * ppl;
    }

    // Return the markup for food, drugs, electronics or zero
    function markupForMaterial(m) {
        var materialRate = markupConfig.materialRate[m];
        if (typeof materialRate === "undefined") {
            return 0;
        }
        return materialRate;
    }
    
    // Calculate the final cost to package the goods
    MarkupCalculator.prototype.finalCost = function () {
        var finalCost = this.flatMarkup() + this.costForPeople() + this.costForMaterials();
        return parseFloat(finalCost.toFixed(2));
    };

    // Calculate the minimum flat markup rate
    MarkupCalculator.prototype.flatMarkup = function () {
        this._flatMarkup = this.product.initialBasePrice() * (1 + markupConfig.flatRate);
        return parseFloat(this._flatMarkup.toFixed(2));
    };

    // Calculate the line item cost for 'people'
    MarkupCalculator.prototype.costForPeople = function () {
        var costForPeople = this.flatMarkup() * markupForPeople(this.product.numOfPeople());
        return parseFloat(costForPeople.toFixed(2));
    };

    // Calculate the line item cost for 'materials'
    MarkupCalculator.prototype.costForMaterials = function () {
        var costForMaterials = this.flatMarkup() * markupForMaterial(this.product.material());
        return parseFloat(costForMaterials.toFixed(2));
    };
}