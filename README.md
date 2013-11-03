packnplay
=========

Working example can be found at:
http://troygdaniel.com/packnplay/index.html

Jasmine specs can be found running here:
http://troygdaniel.com/packnplay/jasmine/spec_runner.html

```javascript
var packingJob = new PackingJob({initialBasePrice:1299.99, numOfPeople:3, material:"food"});
var markupCalc = new MarkupCalculator(packingJob);

markupCalc.flatMarkup() // output is 1364.99
markupCalc.costForPeople() // output is 49.14
markupCalc.costForMaterials() // output is 177.45

markupCalc.finalCost(); // output is 1591.58
