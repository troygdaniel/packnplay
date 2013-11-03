// MarkupCalculator.js jasmine specs
describe("MarkupCalculator.js specs", function () {
    "use strict";
    var packingJobs = [];

    beforeEach(function () {
        packingJobs[0] = new PackingJob({
            initialBasePrice: 1299.99,
            numOfPeople: 3,
            material: "food"
        });
        packingJobs[1] = new PackingJob({
            initialBasePrice: 5432,
            numOfPeople: 1,
            material: "drugs"
        });
        packingJobs[2] = new PackingJob({
            initialBasePrice: 12456.95,
            numOfPeople: 4,
            material: "books"
        });
        packingJobs[3] = new PackingJob({
            initialBasePrice: 12456.95,
            numOfPeople: 4,
            material: ["books","sds"]
        });
    });
    describe("MarkupCalculator#finalCost", function () {
        it("should calculate correctly for 'food' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[0]);
            expect(markupCalc.finalCost()).toEqual(1591.58);
        });

        it("should calculate correctly for 'drugs' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[1]);
            expect(markupCalc.finalCost()).toEqual(6199.81);
        });

        it("should calculate correctly for 'books' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[2]);
            expect(markupCalc.finalCost()).toEqual(13707.63);
        });
    });

    describe("MarkupCalculator#flatMarkupRate", function () {
        it("should calculate flat markup rate for 'food' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[0]);
            expect(markupCalc.flatMarkupRate()).toEqual(1364.99);
        });

        it("should calculate flat markup rate for 'drugs' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[1]);
            expect(markupCalc.flatMarkupRate()).toEqual(5703.6);
        });

        it("should calculate flat markup rate for 'books' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[2]);
            expect(markupCalc.flatMarkupRate()).toEqual(13079.8);
        });
    });

    describe("MarkupCalculator#costForPeople", function () {
        it("should calculate the correct cost for 3 people", function () {
            var markupCalc = new MarkupCalculator(packingJobs[0]);
            expect(markupCalc.costForPeople()).toEqual(49.14);
        });
        it("should calculate the correct cost for 1 person", function () {
            var markupCalc = new MarkupCalculator(packingJobs[1]);
            expect(markupCalc.costForPeople()).toEqual(68.44);
        });
        it("should calculate the correct cost for 4 people", function () {
            var markupCalc = new MarkupCalculator(packingJobs[2]);
            expect(markupCalc.costForPeople()).toEqual(627.83);
        });
    });

    describe("MarkupCalculator#costForMaterials", function () {
        it("should calculate the correct cost for 'food' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[0]);
            expect(markupCalc.costForMaterials()).toEqual(177.45);
        });
        it("should calculate the correct cost for 'drugs' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[1]);
            expect(markupCalc.costForMaterials()).toEqual(427.77);
        });
        it("should calculate the correct cost for 'books' materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[2]);
            expect(markupCalc.costForMaterials()).toEqual(0);
        });
        it("should ignore bad data for materials", function () {
            var markupCalc = new MarkupCalculator(packingJobs[3]);
            expect(markupCalc.costForMaterials()).toEqual(0);
        });
    });
});