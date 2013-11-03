/*jslint nomen: true*/

function Product(options) {
    "use strict";

    Product.prototype.setInitialBasePrice = function (v) {
        if (typeof v === "undefined") {
            throw new Error('initialBasePrice is a required value for Products.');
        }
        if (isNaN(v) === true) {
            throw new Error('initialBasePrice must be a numeric value.');
        }
        this._initialBasePrice = v;
    };
    Product.prototype.setNumOfPeople = function (n) {
        if (typeof n === "undefined") {
            throw new Error('numOfPeople is a required value for Products.');
        }
        if (isNaN(n) === true) {
            throw new Error('numOfPeople must be a numeric value.');
        }
        if (n <= 0) {
            throw new Error('numOfPeople must be at least 1.');
        }
        this._numOfPeople = n;
    };
    Product.prototype.setMaterial = function (m) {
        if (isNaN(m) === false) {
            throw new Error('material must be a non-numeric value.');
        }
        this._material = m;
    };
    Product.prototype.initialBasePrice = function () {
        return this._initialBasePrice;
    };
    Product.prototype.numOfPeople = function () {
        return this._numOfPeople;
    };
    Product.prototype.material = function () {
        return this._material;
    };
    Product.prototype.initialize = function (options) {
        if (typeof options === "undefined") {
            throw new Error("Missing required paramater 'options'");
        }
        if (typeof options.initialBasePrice === "undefined") {
            throw new Error("Missing option required attribute 'initialBasePrice'");
        }
        if (typeof options.numOfPeople === "undefined") {
            throw new Error("Missing option required attribute 'numOfPeople'");
        }
        this.setNumOfPeople(options.numOfPeople);
        this.setInitialBasePrice(options.initialBasePrice);
        this.setMaterial(options.material);
    };

    // Initialize using options
    this.initialize(options);
}
