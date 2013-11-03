// Product.js jasmine specs
describe("Product.js specs", function () {
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
            var p = new Product({initialBasePrice: 1,numOfPeople: 3,material: "1"});
            expect(function () {
                p.setMaterial(1);
            }).toThrow(new Error('material must be a non-numeric value.'));
        });
    });

    describe("Product#initialBasePrice", function () {
        it("should return its initial base price.", function () {
            var p = new Product();
            p.setInitialBasePrice(123);
            expect(p.initialBasePrice()).toEqual(123);
        });
    });

    describe("Product#numOfPeople", function () {
        it("should return the number of people.", function () {
            var p = new Product();
            p.initialize({initialBasePrice:1,numOfPeople:3})
            expect(p.numOfPeople()).toEqual(3);
        });
    });

    describe("Product#material", function () {
        it("should return the material type of the product.", function () {
            var p = new Product();
            p.initialize({initialBasePrice:1,numOfPeople:1,material:"food"})
            expect(p.material()).toEqual("food");
        });
    });
});