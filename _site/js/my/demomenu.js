define(['knockout'], function(ko){
	
	
	var 
		menuItems = ko.observableArray([{name:"test one", name:"test two", name:"test three!"}]),
		
		init = function(){
			console.log("initing!!");
		};
	
	return {
		init: init,
		menuItems: menuItems,
	}
});