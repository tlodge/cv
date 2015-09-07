define(['jquery','knockout', 'knockoutpb', 'erith-react'], function($, ko){
	
	var 
		id = "erith",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected
    }

});
        
