// TODO: remove ordered dependancy of methods (possibly by abstracting accessors/mutators)
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
    Product.prototype.initialize = function (options) {        
        // TODO: validate required options for basic setup
        this.setNumOfPeople(options.numOfPeople);
        this.setInitialBasePrice(options.initialBasePrice);
        this.setMaterial(options.material);
        this._options = options;
    }    

    Product.prototype.setInitialBasePrice = function (v) {
        if (typeof v === "undefined")
            throw new Error('initialBasePrice is a required value for Products.');
        if (isNaN(v) === true)
            throw new Error('initialBasePrice must be a numeric value.');
        this._initialBasePrice = v;
    }
    Product.prototype.initialBasePrice = function () {
        return this._initialBasePrice;
    }
    Product.prototype.setNumOfPeople = function (n) {
        if (typeof n === "undefined")
            throw new Error('numOfPeople is a required value for Products.');
        if (isNaN(n) === true)
            throw new Error('numOfPeople must be a numeric value.');
        if (n <= 0)
            throw new Error('numOfPeople must be at least 1.');
        this._numOfPeople = n;
    }
    Product.prototype.numOfPeople = function () {
        return this._numOfPeople;
    }
    Product.prototype.setMaterial = function (m) {
        this._material = m;
    }
    Product.prototype.material = function () {
        return this._material;
    }

    // Initialize using options
    this.initialize(options);

    // PUBLIC METHODS
    // --

    // Calculate the final cost to package the goods
    Product.prototype.finalCost = function () {
        var finalCost = this.basePrice() + this.costForPeople() + this.costForMaterials();
        return parseFloat(finalCost.toFixed(2));
    };

    // Calculate the minimum basePrice+flatRate
    Product.prototype.basePrice = function () {
        _basePrice = this.initialBasePrice() * (1 + markup.flat);        
        return parseFloat(_basePrice.toFixed(2));
    };

    // Calculate the line item cost for 'people'
    Product.prototype.costForPeople = function () {
        var costForPeople = this.basePrice() * peopleFactor(this);
        return parseFloat(costForPeople.toFixed(2));
    };

    // Calculate the line item cost for 'materials'
    Product.prototype.costForMaterials = function () {
        var costForMaterials = this.basePrice() * markupForMaterial(this.material());
        return parseFloat(costForMaterials.toFixed(2));
    };


    // PRIVATE METHODS
    // --
  
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
}