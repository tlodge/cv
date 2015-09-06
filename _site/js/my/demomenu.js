define(['knockout'], function(ko){
	
	
	var 
		menuItems = ko.observableArray([]),
		
		init = function(){
			console.log("initing!! menu items!!");
			menuItems([{name:"test one"}, {name:"test two"}, {name:"test three!"}]);
		};
	
	return {
		init: init,
		menuItems: menuItems,
	}
});