// Astracting Product, subclassing NuProduct
function NuProduct(options) {

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

    NuProduct.prototype = new Product(options);
    NuProduct.constructor = NuProduct;

    // Calculate the final cost to package the goods
    NuProduct.prototype.finalCost = function () {
        var finalCost = this.basePrice() + this.costForPeople() + this.costForMaterials();
        return parseFloat(finalCost.toFixed(2));
    };

    // Calculate the minimum basePrice+flatRate
    NuProduct.prototype.basePrice = function () {
        _basePrice = this.initialBasePrice() * (1 + markup.flat);        
        return parseFloat(_basePrice.toFixed(2));
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
}