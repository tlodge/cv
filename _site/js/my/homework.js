define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "homework",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected,
		selectedItem:selectedItem,
    }

});
        
