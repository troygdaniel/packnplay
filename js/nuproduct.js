/*jslint nomen: true*/
if (typeof Product === "undefined") {
    throw new Error("product.js is a prerequisite library.");
}
var Product = Product || {};
var NuProduct = NuProduct || {};
NuProduct.prototype = new Product();
NuProduct.constructor = NuProduct;

function NuProduct(options) {
    "use strict";

    // Configurable markup costs in percentages
    var markup = {
        flat: 0.05,
        peopleFactor: 0.012,
        material: {
            food: 0.13,
            drugs: 0.075,
            electronics: 0.02
        }
    };
    Product.call();

    // Calc the markup based on the # of ppl working
    function peopleFactor(that) {
        return markup.peopleFactor * that.numOfPeople();
    }

    // Return the markup for food, drugs, electronics or zero
    function markupForMaterial(m) {
        var materialFactor = markup.material[m];
        if (typeof materialFactor === "undefined") {
            return 0;
        }
        return markup.material[m];
    }
    
    // Calculate the final cost to package the goods
    NuProduct.prototype.finalCost = function () {
        var finalCost = this.basePrice() + this.costForPeople() + this.costForMaterials();
        return parseFloat(finalCost.toFixed(2));
    };

    // Calculate the minimum basePrice+flatRate
    NuProduct.prototype.basePrice = function () {
        this._basePrice = this.initialBasePrice() * (1 + markup.flat);
        return parseFloat(this._basePrice.toFixed(2));
    };

    // Calculate the line item cost for 'people'
    NuProduct.prototype.costForPeople = function () {
        var costForPeople = this.basePrice() * peopleFactor(this);
        return parseFloat(costForPeople.toFixed(2));
    };

    // Calculate the line item cost for 'materials'
    NuProduct.prototype.costForMaterials = function () {
        var costForMaterials = this.basePrice() * markupForMaterial(this.material());
        return parseFloat(costForMaterials.toFixed(2));
    };

    // Initialize using options
    this.initialize(options);

}