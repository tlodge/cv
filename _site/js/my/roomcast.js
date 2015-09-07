define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "roomcast",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

		menuItems = ko.observableArray([
			{id: 'panel', name: 'panel'},
			{id: 'login',  	name:'login'},
			{id: 'maker', name: 'maker'},
			{id: 'dashboard',  	name:'dashboard'},
			{id: 'backend', name:'backend'},
		]),
		
        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected,
		menuItems: menuItems,
    }

});
        
