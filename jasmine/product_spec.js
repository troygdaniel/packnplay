describe("PackNPlay Product.js specs", function() {
  var productOptions = [];

  beforeEach(function() {
    productOptions[0] = {
      basePrice: 1299.99,
      numOfPeople: 3,
      material: "food"
    };
    productOptions[1] = {
      basePrice: 5432,
      numOfPeople: 1,
      material: "drugs"
    };
    productOptions[2] = {
      basePrice: 12456.95,
      numOfPeople: 4,
      material: "books"
    };
  });

  describe("Product#totalCost", function() {
    it("should calculate correctly for 'food' materials", function() {
      var p = new Product(productOptions[0]);
      expect(p.totalCost()).toEqual(1591.58);
    });

    it("should calculate correctly for 'drugs' materials", function() {
      p = new Product(productOptions[1]);
      expect(p.totalCost()).toEqual(6199.81);
    });

    it("should calculate correctly for 'books' materials", function() {
      p = new Product(productOptions[2]);
      expect(p.totalCost()).toEqual(13707.63);
    });
  });

  describe("Product#flatWithBase", function() {
    it("should calculate (basePrice + flatRate) for 'food' materials", function() {
      var p = new Product(productOptions[0]);
      expect(p.flatWithBase()).toEqual(1364.99);
    });

    it("should calculate (basePrice + flatRate) for 'drugs' materials", function() {
      p = new Product(productOptions[1]);
      expect(p.flatWithBase()).toEqual(5703.6);
    });

    it("should calculate (basePrice + flatRate) for 'books' materials", function() {
      p = new Product(productOptions[2]);
      expect(p.flatWithBase()).toEqual(13079.8);
    });
  });

  describe("Product#costForPeople", function() {
    it("should calculate the correct cost for 3 people", function() {
      var p = new Product(productOptions[0]);
      expect(p.costForPeople()).toEqual(49.14);
    });
    it("should calculate the correct cost for 1 person", function() {
      var p = new Product(productOptions[1]);
      expect(p.costForPeople()).toEqual(68.44);
    });
    it("should calculate the correct cost for 4 people", function() {
      var p = new Product(productOptions[2]);
      expect(p.costForPeople()).toEqual(627.83);
    });
  });

  describe("Product#costForMaterials", function() {
    it("should calculate the correct cost for 'food' materials", function() {
      var p = new Product(productOptions[0]);
      expect(p.costForMaterials()).toEqual(177.45);
    });
    it("should calculate the correct cost for 'drugs' materials", function() {
      var p = new Product(productOptions[1]);
      expect(p.costForMaterials()).toEqual(427.77);
    });
    it("should calculate the correct cost for 'books' materials", function() {
      var p = new Product(productOptions[2]);
      expect(p.costForMaterials()).toEqual(0);
    });
  });
});