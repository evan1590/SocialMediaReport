var svgWidth = 250;
var svgHeight = 300;
var barPadding = 10; 


$.getJSON('https://spreadsheets.google.com/feeds/list/1gs8MWVzYQQ90xYe04JGitxE_5wwOQCHlNe4706vVS34/oerti3x/public/values?alt=json', function(data) { 
		//console.log(data);
		var dataset = [];
		var month = [];
		var textValue = [];
		var tobeDisplayed = [];
	 	lengthofArray = data.feed.entry.length;
	 	for (i = 0; i < lengthofArray; i++) { 
			textValue.push(data.feed.entry[i]['gsx$instagramtotalengagement']['$t']);
			var value = data.feed.entry[i]['gsx$instagramtotalengagement']['$t'];
			var result = value / 10;
			month.push(result);
			
		};
	
	dataset.push(month[9]);
	dataset.push(month[21]);
	tobeDisplayed.push(textValue[9]);
	tobeDisplayed.push(textValue[21]);
	
	// Creat SVG element
	var svg = d3.select("#instagramEngagement")
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
		.attr("fill", "#675144");

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
	
	$.getJSON('https://spreadsheets.google.com/feeds/list/1gs8MWVzYQQ90xYe04JGitxE_5wwOQCHlNe4706vVS34/oerti3x/public/values?alt=json', function(data) { 
		//console.log(data);
		var dataset = [];
		var month = [];
	 	lengthofArray = data.feed.entry.length;
	 	for (i = 0; i < lengthofArray; i++) { 
			//console.log(data.feed.entry[i]['gsx$state']['$t']);
			//console.log(data.feed.entry[i]['gsx$numberofusers']['$t']);
			month.push(data.feed.entry[i]['gsx$engagementpostratio']['$t']);
			
		};
	
		dataset.push(month[9]);
		dataset.push(month[21]);
		
		
		// Creat SVG element
		var svg = d3.select("#instagramRatio")
				.append("svg")
				.attr("width", svgWidth)
				.attr("height", svgHeight);

		svg.selectAll ("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", function(d, i) {
				return i * (svgWidth / dataset.length); //Bar width of 20 plus 10 for padding
			})
			.attr("y", function(d) {
				return svgHeight - d;  //Height minus data value
			})
			.attr("width", svgWidth / dataset.length - barPadding)
			.attr("height", function(d) {
				return d; 
			})
			.attr("fill", "#675144");

		svg.selectAll("text")
		   	.data(dataset)
		   	.enter()
		   	.append("text")
		   	.text(function(d) {
				return d;
				})
		   	.attr("x", function(d, i) {
				return i * (svgWidth / dataset.length) + 55;
			})
				.attr("y", function(d) {
					 return svgHeight - d + 14;
				})
				.attr("font-family", "sans-serif")
				.attr("font-size", "11px")
				.attr("fill", "white")
				.attr("text-anchor", "middle");

		$.getJSON('https://spreadsheets.google.com/feeds/list/1gs8MWVzYQQ90xYe04JGitxE_5wwOQCHlNe4706vVS34/opbh014/public/values?alt=json', function(data) { 
				var dataset = [];
				dataset.push(data.feed.entry[21]['gsx$mostpopularinstagram']['$t']);
				// $('#mostPopInsta').append("<blockquote class='instagram-media' data-instgrm-captioned data-instgrm-version='4' style='background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);'><div style='padding:8px;''> <div style='background:#F8F8F8; line-height:0; margin-top:40px; padding:50% 0; text-align:center; width:100%;'> <div style='background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;'></div></div> <p style='margin:8px 0 0 0; padding:0 4px;'> <a href=" + data[0] + " style='color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;' target='_top'>missing my castle #edinburgh</a></p> <p style='color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;'>A photo posted by Alicia Herbert (@lish739) on <time style=' font-family:Arial,sans-serif; font-size:14px; line-height:17px;' datetime='2013-05-29T17:10:30+00:00'>May 5, 2013 at 10:10am PDT</time></p></div></blockquote><script async defer src='//platform.instagram.com/en_US/embeds.js'></script>");
				$('#mostPopInsta').append(dataset[0]);
					
		});
	});
});


//gsx$instagramtotalengagement
//gsx$engagementpostratio
//#instagramEngagement
//#instagramRatio
//oerti3x

