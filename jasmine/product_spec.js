// Product.js jasmine specs
describe("Product.js specs", function () {
    "use strict";
    var productOptions = [], badProductOptions = {}, invalidProductValues = {};

    beforeEach(function () {
        productOptions[0] = {
            initialBasePrice: 1299.99,
            numOfPeople: 3,
            material: "food"
        };
        productOptions[1] = {
            initialBasePrice: 5432,
            numOfPeople: 1,
            material: "drugs"
        };
        productOptions[2] = {
            initialBasePrice: 12456.95,
            numOfPeople: 4,
            material: "books"
        };
    });

    describe("Product#initialize", function () {
        it("should expect options to be initialized.", function () {
            expect(function () {
                new Product();
            }).toThrow(new Error("Missing required paramater 'options'"));
        });
        it("should expect initialBasePrice as a required attribute", function () {
            expect(function () {
                new Product({numberOfPeople: 1, material: "stuff"});
            }).toThrow(new Error("Missing option required attribute 'initialBasePrice'"));
        });
        it("should expect numOfPeople as a required attribute", function () {
            expect(function () {
                new Product({initialBasePrice: 1, material: "stuff"});
            }).toThrow(new Error("Missing option required attribute 'numOfPeople'"));
        });
    });
    describe("Product#setInitialBasePrice", function () {

        it("should require a value for initial base price", function () {
            var p = new Product({initialBasePrice: 1, numOfPeople: 1});
            expect(function () {
                p.setInitialBasePrice();
            }).toThrow(new Error('initialBasePrice is a required value for Products.'));
        });
        it("should reject non-numeric values", function () {
            var p = new Product({initialBasePrice: 1, numOfPeople: 1});
            expect(function () {
                p.setInitialBasePrice("dsd");
            }).toThrow(new Error('initialBasePrice must be a numeric value.'));
        });
    });

    describe("Product#setNumOfPeople", function () {
        it("should require a value for numOfPeople", function () {
            var p = new Product({initialBasePrice: 1, material: "k", numOfPeople: 1});
            expect(function () {
                p.setNumOfPeople();
            }).toThrow(new Error('numOfPeople is a required value for Products.'));
        });
        it("should reject non-numeric values", function () {
            var p = new Product({initialBasePrice: 1, material: "k", numOfPeople: 1});
            expect(function () {
                p.setNumOfPeople("d");
            }).toThrow(new Error('numOfPeople must be a numeric value.'));
        });
        it("should reject any value less than 1", function () {
            var p = new Product({initialBasePrice: 1, material: "k", numOfPeople: 1});
            expect(function () {
                p.setNumOfPeople(0);
            }).toThrow(new Error('numOfPeople must be at least 1.'));
        });
    });

    describe("Product#setMaterial", function () {
        it("should not accept non-numeric values.", function () {
            var p = new Product({initialBasePrice: 1, numOfPeople: 3, material: "d"});
            expect(function () {
                p.setMaterial(1);
            }).toThrow(new Error('material must be a non-numeric value.'));
        });
    });

    describe("Product#initialBasePrice", function () {
        it("should return its initial base price.", function () {
            var p = new Product({initialBasePrice: 123, numOfPeople: 3, material: "d"});
            expect(p.initialBasePrice()).toEqual(123);
        });
    });

    describe("Product#numOfPeople", function () {
        it("should return the number of people.", function () {
            var p = new Product({initialBasePrice: 1, numOfPeople: 3, material: "d"});
            expect(p.numOfPeople()).toEqual(3);
        });
    });

    describe("Product#material", function () {
        it("should return the material type of the product.", function () {
            var p = new Product({initialBasePrice: 1, numOfPeople: 3, material: "d"});
            expect(p.material()).toEqual("d");
        });
    });
});