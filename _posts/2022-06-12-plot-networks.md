---
layout: post
title: "Exploring Plot Structure with Networks"
image: assets/2022-06-14-plot-networks/img000.jpg
featured: true
hidden: true
description: "Stories as networks"
categories: [networks, dataviz]
---

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>

<!-- Load styling for the slider -->
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<!-- Format the UI elements -->
<style type="text/css">
	#slider {margin:auto; width:80%; display:block}
	.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default { width:20px; }
	.sidebox{
		background:#333333;
		border-radius:25px;
		color:#bbbbbb;
		float:right;
		font-size:10pt;
		margin:20px 0 20px 20px;
		padding:25px;
		width:25%;
	}

#chartdiv {
  display: inline-block;
  overflow: hidden;
  padding-bottom: 1%;
  position: relative;
  vertical-align: middle;
  width: 100%;
}

</style>

<div id="chartdiv"></div>
<div class="image" style="margin:5px auto 25px auto;">
	<span style="margin:auto">Play : 
		<select id="plays"> </select>
	</span>
	<span>Color by : 		
		<select id="colors">
			<option selected="selected">Status</option>
			<option>Gender</option>
		</select>
	</span>
	<br/>Use the slider to adjust links: <span id="slider"></span>
</div>

<div class="sidebox">This visualization uses HTML5 and should work on most current standards compliant browsers such as Chrome, Firefox and Safari, but might fail on many older browsers. Please revisit with a current standards compliant browser if you can't see the networks.</div>

![The two worlds of 1 Henry IV](/assets/2022-06-14-plot-networks/img001.jpg){:style="display:block; margin-left:auto; margin-right:auto"}

### Building the Network



### Tweaking the Network: Exploring Patterns

To begin with, the graphs represent every relationship in the play and can contain a large number of edges, and therefore a large number of constraints on the positioning of individual nodes. How can we bring out more significant plot patterns from this network? We might think of snipping off the most insignificant links and preserving the more important ones to get a better sense of structure, and the slider under the visualization-panel lets us do just that. When placed at the extreme left, the slider preserves every edge and node, while at the extreme right position, only the most significant relationship in the play is preserved. Nodes that no longer have any edges vanish to clear clutter. Playing with the slider might require a little trial-and-error since small movements over a section can have significant effects while there might be other stretches where no new edges are cut.

As you tweak the network you will notice that while edges approximate their ideal distances better and better, unconnected nodes don't respond to each other or arrange themselves mutually in any meaningful way. Thus, for example, in the visualization of _1 Henry IV_, the thieves might occasionally land amidst the noblemen even though they are not connected by a node. This does not represent any significant relationship (it is a function of a "gravitational field" to prevent nodes flying off the canvas) and it might aid interpretation if such nodes are simply dragged apart. In fact, dragging node-groups is a great way to explore the networks, highlight interlinkages and centrality, and most importantly arrange groups of nodes together to reflect particular interpretations of plots.

###Overlaying Gender and Status

The drop-down selections allow you to switch plays but also to switch the way the nodes are color-coded. Gender and status are the currently available categories, although much of this information is still missing and will only eventually be filled in (see below). "Not available" is visualized a black for status and gray for gender. While gender tags are clear for most characters, the notion of coding by "status" is fraught with danger. When I was writing my dissertation, I would be paranoid about deploying status or the concept of "class" in the context of early modern England. The only cure for this fear of anachronistically projecting nineteenth century ideas and social structures on sixteenth century England was voluminous apologetic footnote references to the Marxist and Weberian traditions and somewhat more defiant citations of the many recent historians who have fruitfully discussed class and status in the period. Thus, while this is a problem best discussed at length elsewhere, let me just note some of the underlying assumptions of this encoding. It is of course problematic to take Shakespeare's England and its social structure as the benchmark for plays that are either set elsewhere, or in different periods, or both. What might have been extremely productive and relatively easier to agree upon for, say, City-comedy, becomes a muddier problem for many Shakespeare texts. Also, such tagging can involve major interpretive decisions - for example, I decided to tag Sir John Falstaff with the vagrants and criminals that keep him company because I felt this represented his role better than the position of knight that he officially holds. This decision arises, of course, out of a particular reading of the play - of Hal as torn between and linking two distinct worlds - rather than any objective and absolute measure of social position. However, given that our aim here is to explore plots in innovative ways, even such subjective encodings can add great insights.

###A Little Crowdsourcing?

Some rudimentary crowdsourcing would not be out of place here to help me gather more data for the status and gender categories. To this end, I've put up a simple spreadsheet on Google Docs(edit: this is no longer active) that has four columns: the first two are uneditable but I'd appreciate some help gathering information for the last two columns which represent gender and status. The gender column should be self explanatory and I've already managed to mine enough data from Wikipedia to mostly fill the entries in it, although there are still many slippages and mistakes that need correcting. But it is the final column where I need most help. So if you're reading a play and wouldn't mind filling in some information on it, I'd really appreciate it. Every so often, I'll update the data-files with new information, and hopefully we'll eventually have enough information to cover all characters.

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ base.url | prepend: site.url }}/assets/2022-06-14-plot-networks/plot-networks.js"> </script>





