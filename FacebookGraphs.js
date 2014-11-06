var svgWidth = 250;
var svgHeight = 300;
var barPadding = 10; 


$.getJSON('https://spreadsheets.google.com/feeds/list/1gs8MWVzYQQ90xYe04JGitxE_5wwOQCHlNe4706vVS34/o4qt7pd/public/values?alt=json', function(data) { 
		console.log(data);
		var dataset = [];
		var month = [];
		var textValue = [];
		var tobeDisplayed = [];
	 	lengthofArray = data.feed.entry.length;
	 	for (i = 0; i < lengthofArray; i++) { 
		console.log(data.feed.entry[i]['gsx$facebooktotalfanengagement']['$t']);
			//console.log(data.feed.entry[i]['gsx$numberofusers']['$t']);
			textValue.push(data.feed.entry[i]['gsx$facebooktotalfanengagement']['$t']);
			var value = data.feed.entry[i]['gsx$facebooktotalfanengagement']['$t'];
			var result = value / 10;
			month.push(result);
			
		};
	
	dataset.push(month[9]);
	dataset.push(month[21]);
	tobeDisplayed.push(textValue[9]);
	tobeDisplayed.push(textValue[21]);
	console.log(dataset);
	
	// Creat SVG element
	var svg = d3.select("#facebookEngagement")
			.append("svg")
			.attr("width", svgWidth)
			.attr("height", svgHeight);

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
		.attr("fill", "#3b5998");

	svg.selectAll("text")
	   	.data(tobeDisplayed)
	   	.enter()
	   	.append("text")
	   	.text(function(d) {
			return d;
			})
	   	.attr("x", function(d, i) {
			return i * (svgWidth / dataset.length) + 55;
		})
			.attr("y", function(d) {
				 return svgHeight - (d / 10) + 14;
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "white")
			.attr("text-anchor", "middle");
	$.getJSON('https://spreadsheets.google.com/feeds/list/1gs8MWVzYQQ90xYe04JGitxE_5wwOQCHlNe4706vVS34/o4qt7pd/public/values?alt=json', function(data) { 
				//console.log(data);
				var dataset = [];
				var month = [];
				var textValue = [];
				var tobeDisplayed = [];
			 	lengthofArray = data.feed.entry.length;
			 	for (i = 0; i < lengthofArray; i++) { 
					//console.log(data.feed.entry[i]['gsx$state']['$t']);
					//console.log(data.feed.entry[i]['gsx$numberofusers']['$t']);
					textValue.push(data.feed.entry[i]['gsx$facebookoffansengaged']['$t']);
					var value = data.feed.entry[i]['gsx$facebookoffansengaged']['$t'];
					var result = value * 10;
					month.push(result);
					
				};
			
			dataset.push(month[9]);
			dataset.push(month[21]);
			tobeDisplayed.push(textValue[9]);
			tobeDisplayed.push(textValue[21]);
			console.log(dataset);
			
			// Creat SVG element
			var svg = d3.select("#fansEngaged")
					.append("svg")
					.attr("width", svgWidth)
					.attr("height", svgHeight);

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
				.attr("fill", "#8b9dc3");

			svg.selectAll("text")
			   	.data(tobeDisplayed)
			   	.enter()
			   	.append("text")
			   	.text(function(d) {
					return d;
					})
			   	.attr("x", function(d, i) {
					return i * (svgWidth / dataset.length) + 55;
				})
					.attr("y", function(d) {
						 return svgHeight - (d * 10) + 14;
					})
					.attr("font-family", "sans-serif")
					.attr("font-size", "11px")
					.attr("fill", "white")
					.attr("text-anchor", "middle");
			
			
		});
	
});