// NuProduct.js jasmine specs
describe("NuProduct.js specs", function () {
    var productOptions = [];

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
    describe("NuProduct#initialize", function () {
        it("should expect options to be initialized.", function () {            
            expect(function () {
                new NuProduct();
            }).toThrow(new Error("Missing required paramater 'options'"));
        });
        it("should expect initialBasePrice as a required attribute", function () {
            expect(function () {
                new NuProduct({numberOfPeople: 1, material:"stuff"});
            }).toThrow(new Error("Missing option required attribute 'initialBasePrice'"));
        });
        it("should expect numOfPeople as a required attribute", function () {
            expect(function () {
                new NuProduct({initialBasePrice: 1, material:"stuff"});
            }).toThrow(new Error("Missing option required attribute 'numOfPeople'"));
        });
    });
    describe("NuProduct#finalCost", function () {
        it("should calculate correctly for 'food' materials", function () {
            var p = new NuProduct(productOptions[0]);
            expect(p.finalCost()).toEqual(1591.58);
        });

        it("should calculate correctly for 'drugs' materials", function () {
            var p = new NuProduct(productOptions[1]);
            expect(p.finalCost()).toEqual(6199.81);
        });

        it("should calculate correctly for 'books' materials", function () {
            var p = new NuProduct(productOptions[2]);
            expect(p.finalCost()).toEqual(13707.63);
        });
    });

    describe("NuProduct#basePrice", function () {
        it("should calculate (basePrice + flatRate) for 'food' materials", function () {
            var p = new NuProduct(productOptions[0]);
            expect(p.basePrice()).toEqual(1364.99);
        });

        it("should calculate (basePrice + flatRate) for 'drugs' materials", function () {
            var p = new NuProduct(productOptions[1]);
            expect(p.basePrice()).toEqual(5703.6);
        });

        it("should calculate (basePrice + flatRate) for 'books' materials", function () {
            var p = new NuProduct(productOptions[2]);
            expect(p.basePrice()).toEqual(13079.8);
        });
    });

    describe("NuProduct#costForPeople", function () {
        it("should calculate the correct cost for 3 people", function () {
            var p = new NuProduct(productOptions[0]);
            expect(p.costForPeople()).toEqual(49.14);
        });
        it("should calculate the correct cost for 1 person", function () {
            var p = new NuProduct(productOptions[1]);
            expect(p.costForPeople()).toEqual(68.44);
        });
        it("should calculate the correct cost for 4 people", function () {
            var p = new NuProduct(productOptions[2]);
            expect(p.costForPeople()).toEqual(627.83);
        });
    });

    describe("NuProduct#costForMaterials", function () {
        it("should calculate the correct cost for 'food' materials", function () {
            var p = new NuProduct(productOptions[0]);
            expect(p.costForMaterials()).toEqual(177.45);
        });
        it("should calculate the correct cost for 'drugs' materials", function () {
            var p = new NuProduct(productOptions[1]);
            expect(p.costForMaterials()).toEqual(427.77);
        });
        it("should calculate the correct cost for 'books' materials", function () {
            var p = new NuProduct(productOptions[2]);
            expect(p.costForMaterials()).toEqual(0);
        });
    });
});