function Product(options) {

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

    // Initialize using options
    this.numOfPeople = options.numOfPeople;
    this.basePrice = options.basePrice;
    this.material = options.material;

    // PRIVATE METHOD: Calc the markup based on the # of ppl working
    function peopleFactor(that) {
        return markup.peopleFactor * that.numOfPeople;
    }

    // PRIVATE METHOD: Return the markup for food, drugs, electronics or zero
    function markupForMaterial(m) {
        var materialFactor = markup.material[m];
        if (typeof materialFactor === "undefined") {
            return 0;
        }
        return markup.material[m];
    }

    // PUBLIC METHODS
    // --
    
    // Calculate the final cost to package the goods
    Product.prototype.finalCost = function() {
        var finalCost = this.flatWithBase() + this.costForPeople() + this.costForMaterials();
        return parseFloat(finalCost.toFixed(2));
    };

    // Calculate the minimum basePrice+flatRate
    Product.prototype.flatWithBase = function() {
        var flatWithBase = this.basePrice * (1 + markup.flat);
        return parseFloat(flatWithBase.toFixed(2));
    };

    // Calculate the line item cost for 'people'
    Product.prototype.costForPeople = function() {
        var costForPeople = this.flatWithBase() * peopleFactor(this);
        return parseFloat(costForPeople.toFixed(2));
    };

    // Calculate the line item cost for 'materials'
    Product.prototype.costForMaterials = function() {
        var costForMaterials = this.flatWithBase() * markupForMaterial(this.material);
        return parseFloat(costForMaterials.toFixed(2));
    };
}