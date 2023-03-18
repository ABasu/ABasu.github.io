var root = "/assets/2022-06-14-plot-networks/data/"
var json;
var scale;
var slider;

// JQuery Slider 
$(document).ready(function() {
	slider = $("#slider").slider({ animate:true, change: function(event, ui){ drawNetwork(ui.value);}, max:100, min:0});
});


// Set the canvas size
// var width = 75, height = 500;

// Setup the scales 
var node_scale = d3.scale.sqrt()
	.domain([0, 100])
	.range([10, 30]);

var edge_dist_scale = d3.scale.sqrt()
	.domain([0, 100])
	.range([300, 75]);

var edge_strength_scale = d3.scale.sqrt()
	.domain([0, 100])
	.range([0, 1]);

var edge_threshold_scale = d3.scale.pow()
	.exponent(9)
	.domain([0, 100])
	.range([0, 100]);

var status_scale = d3.scale.linear()
	.domain([0, 5, 9])
	.range(["purple", "orange", "green"]);

var gender_scale = d3.scale.ordinal()
	.domain(["M", "F", "NA"])
	.range(["darkred", "darkslateblue", "gray"]);

// Set the basic svg parameters
var svg = d3.select("#chartdiv")
	.append("svg")
	.attr("style", "background-color:#333333;border-radius:10px;")
	.attr("viewBox", "0 0 800 500")
	.attr("preserveAspectRatio", "xMidYMid meet");
	//	.attr("width", width)
	//	.attr("height", height);

// Set the force parameters for the network
var force = d3.layout.force()
	.linkDistance(function(d) { return edge_dist_scale(d.ew); })
	.linkStrength(function(d) { return edge_strength_scale(d.ew); })
	.friction(.88)
	.charge(-220)
	.size([svg.style("width").replace("px", ""), svg.style("height").replace("px", "")]);
	//.size([width, height]);

// Setup an event listener for the plays list
d3.select("#plays").on("change", loadNewPlay);
// Setup a new listener for the colors
d3.select("#colors").on("change", loadNewColors);


// Load filename data from the index.csv file and build the dropdown filelist
d3.csv(root + "play-index.csv", function(csv){
	var plays = d3.select("#plays")
		.selectAll("option")
		.data(csv)
		.enter()
		.append("option")
		.attr("value", function(d) {return d.filename;})
		.text(function(d) {return d.title;});

	// Set the first play to be 1Hiv 	
	document.getElementById('plays').selectedIndex = 8;
	loadNewPlay();
});


/*******************************************************************************
 * The main functions.
 *******************************************************************************/
// Listener for plays dropdown
// Load a new play
function loadNewPlay() { 
	var play = document.getElementById('plays');
	file = play[play.selectedIndex].value;

	d3.selectAll("circle.node")
	.remove();
	d3.selectAll("line.link")
	.remove();

	d3.json(root + file, function(d) {
		json = d; 
		$("#slider").slider("value", $("#slider").slider("option", "min"));
	}); 
}

// Listener for status/gender dropdown
// Load new colors
function loadNewColors() {
	drawNetwork($("#slider").slider("option", "value"));
}


// Uses the json global variable
// The main network drawing function
function drawNetwork(threshold) {
	if(arguments.length == 0)
		threshold = 0; 		//if no threshold was passed, show all links

	// Check the state of the color menu and assign scale accordingly
	var col = d3.select("#colors")[0][0];
	if(col.options[col.selectedIndex].text == "Status") {
		scale = 0;
	} else {
		scale = 1;
	}
	
	// This bit is redundant but has to be done to take care of a weird bug
	// which requires the force routine to be called for the indices of the 
	// sub-objects to work correctly
	force.nodes(json.nodes)
		.links(json.links)
		.start();

	var links = selectLinks(json, threshold); 
	var nodes = selectNodes(json, links);

	force.nodes(json.nodes)
		.links(links)
		.start();

	var link = svg.selectAll("line.link")
		.data(links);

	link.enter()
		.append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) { return (Math.pow(d.ew, .5) + 1); })
		.style("stroke-opacity", .5)
		.style("stroke", "#fff");

	link.exit()
		.remove();


	svg.selectAll("circle.node")
		.remove();

	var node = svg.selectAll("circle.node")
		.data(nodes);
	
	node.enter()
		.append("circle")
		.attr("class", "node")
		.attr("r", function(d) { return node_scale(d.nw); })
		.style("fill", function(d) { if(scale == 0) return status_scale(d.s); else return gender_scale(d.g); }) 
		.style("stroke", "#fff")
		.style("stroke-width", "1.5px")
		.call(force.drag);
	
	node.append("title")
		.text(function(d) { return d.id; });

	svg.selectAll("text.label")
		.remove();

	labels = svg.selectAll("text.label")
		.data(nodes)
		.enter()
		.append("text")
		.attr("class","label")
		.attr("text-anchor", "middle")
		.style("font-size", "5pt")
		.style("font-family", "Arial")
		.style("fill", "LightGray");

	force.on("tick", function(d) {
		link
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; })
		.style("stroke-width", function(d) { return (Math.pow(d.ew, .5) + 1); });

		node
		.attr("cx", function(d) { return d.x })
		.attr("cy", function(d) { return d.y });

		labels
		.attr("x", function(d) { return d.x;})
		.attr("y", function(d) { return d.y;})
		.text(function(d) { return d.id; });
	});
}

// Return a subselection of links
function selectLinks(json, threshold){
	var ln = [],
		i = 0;
	if(threshold == 0){
		return json.links;
	}
	for(i = 0; i < json.links.length; i++){
		if(json.links[i].ew >= edge_threshold_scale(threshold)){
			ln.push(json.links[i]);
		}
	}
	return ln;
}

// Return a subset of nodes
function selectNodes(js, lnks){
	var nds = [],
		i = 0;
	var n;
	for(i = 0; i < lnks.length; i++){
		n = js.nodes[lnks[i].source.index];
		if(nds.indexOf(n) == -1)
			nds.push(n);	
		n = js.nodes[lnks[i].target.index];
		if(nds.indexOf(n) == -1)
			nds.push(n);
	}
	return nds;
}
