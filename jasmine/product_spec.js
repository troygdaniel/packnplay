// TODO: test invalid data and scenarios
describe("PackNPlay Product.js specs", function() {
  var productOptions = [], invalidProductOptions;

  beforeEach(function() {
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

    // TODO: consider only setting these values when required
    badProductOptions = {
      basePrice: "dsdsad",
      numberOfPeopleThatAreWorking: 0,
      mateial: 123
    };
    invalidProductOptions = {
      initialBasePrice: "dsdsad",
      numOfPeople: "dd",
      material: 123
    };
  });

  describe("Product#finalCost", function() {
    it("should calculate correctly for 'food' materials", function() {
      var p = new Product(productOptions[0]);
      expect(p.finalCost()).toEqual(1591.58);
    });

    it("should calculate correctly for 'drugs' materials", function() {
      p = new Product(productOptions[1]);
      expect(p.finalCost()).toEqual(6199.81);
    });

    it("should calculate correctly for 'books' materials", function() {
      p = new Product(productOptions[2]);
      expect(p.finalCost()).toEqual(13707.63);
    });
  });

  describe("Product#basePrice", function() {
    it("should calculate (basePrice + flatRate) for 'food' materials", function() {
      var p = new Product(productOptions[0]);
      expect(p.basePrice()).toEqual(1364.99);
    });

    it("should calculate (basePrice + flatRate) for 'drugs' materials", function() {
      p = new Product(productOptions[1]);
      expect(p.basePrice()).toEqual(5703.6);
    });

    it("should calculate (basePrice + flatRate) for 'books' materials", function() {
      p = new Product(productOptions[2]);
      expect(p.basePrice()).toEqual(13079.8);
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

  describe("Product#setInitialBasePrice", function() {
    
    it("should not accept incorrect options", function() {
      badProductOptions.numOfPeople=1;
      var err = new Error('initialBasePrice is a required value for Products.');
      expect(function () {new Product(badProductOptions);}).toThrow(err);
    });
    it("should reject non-numeric values", function() {
      invalidProductOptions.numOfPeople=1;
      var err = new Error('initialBasePrice must be a numeric value.');
      expect(function () {new Product(invalidProductOptions);}).toThrow(err);
    });
  });

  describe("Product#setNumOfPeople", function() {
    it("should not accept incorrect options", function() {
      badProductOptions.initialBasePrice=1;
      badProductOptions.material = "k";
      var err = new Error('numOfPeople is a required value for Products.');
      expect(function () {new Product(badProductOptions);}).toThrow(err);
    });
    it("should reject non-numeric values", function() {
      invalidProductOptions.initialBasePrice=1;
      var err = new Error('numOfPeople must be a numeric value.');
      expect(function () {new Product(invalidProductOptions);}).toThrow(err);
    });    
    it("should reject any value less than 1", function() {
      invalidProductOptions.initialBasePrice=1;
      invalidProductOptions.numOfPeople=0;
      var err = new Error('numOfPeople must be at least 1.');
      expect(function () {new Product(invalidProductOptions);}).toThrow(err);
    });    
  });

  describe("Product#initialBasePrice", function() {
    it("should return the initial base price", function() {
    });
  });

  describe("Product#numOfPeople", function() {
    it("should ", function() {
    });
  });

  describe("Product#setMaterial", function() {
    it("should ", function() {
    });
  });

  describe("Product#material", function() {
    it("should ", function() {
    });
  });

});