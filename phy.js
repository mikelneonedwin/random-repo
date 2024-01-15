/*
 * Graph Plotter
 *
 * This tool is used to give accurate locations of points on the graph, based on the scale used on the y-axis 
*/

const unit = process.argv[2]; // The first value after zero
const scale = process.argv[3]; // The amount of CM's before the "unit" is gotten
const pointx = 5 * scale;
const lineUnit = unit / (pointx); // The unit represented by one line on the graph

const point = process.argv[4]; // The point the user is drawing to
const lineValue = point / lineUnit;

console.log('On line', lineValue);

const pointy = Math.floor(lineValue / pointx);
console.log(`At point`, pointy, `go`, lineValue % pointx, `line(s) up`);