define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "cinc",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id());
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected
    }

});
        
