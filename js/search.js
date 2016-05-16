// JavaScript Document

 $(function(){
 var searchString = [
		"San Francisco",
		"Oakland",
		"San Carlos",
		"Richmond"
		];
	$("#autocomplete-1").autocomplete({
		source: searchString
		});
		
 });