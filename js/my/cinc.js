define(['jquery','knockout', 'knockoutpb'], function($, ko, d3building){
	
	var 
		id = "cinc",
		
		_kickoff = d3building.init(),
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected
    }

});
        
