var svgWidth = 250;
var svgHeight = 250;
var barPadding = 1; 

// Creat SVG element
var svg = d3.select("#users")
			.append("svg")
			.attr("width", svgWidth)
			.attr("height", svgHeight);

var dataset = [];
var month = [];
// doing this asynchronously arrrgggggggggggggg! 
$.getJSON('https://spreadsheets.google.com/feeds/list/1d__Mnshweud84zEuamDmTWljojQNFC2SHWTZ_GB0L9A/od6/public/values?alt=json', function(data) { 
		console.log(data);
	 	lengthofArray = data.feed.entry.length;
	 	for (i = 0; i < lengthofArray; i++) { 
			//console.log(data.feed.entry[i]['gsx$state']['$t']);
			//console.log(data.feed.entry[i]['gsx$numberofusers']['$t']);
			dataset.push(data.feed.entry[i]['gsx$numberofusers']['$t']);
			console.log(dataset)
		};
		//console.log(dataset);

	svg.selectAll ("rect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
			return i * (svgWidth / dataset.length); //Bar width of 20 plus 1 for padding
		})
		.attr("y", function(d) {
			return svgHeight - d;  //Height minus data value
		})
		.attr("width", svgWidth / dataset.length - barPadding)
		.attr("height", function(d) {
			return d; 
		})
		.attr("fill", "purple");

	svg.selectAll("text")
	   	.data(dataset)
	   	.enter()
	   	.append("text")
	   	.text(function(d) {
			return d;
			})
	   	.attr("x", function(d, i) {
			return i * (svgWidth / dataset.length) + 30;
		})
			.attr("y", function(d) {
				 return svgHeight - d + 14;
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "white")
			.attr("text-anchor", "middle");

	});