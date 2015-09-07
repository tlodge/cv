define(['jquery','knockout', 'd3building', 'knockoutpb'], function($, ko, d3building){
	
	d3building.init({
		width: function (){
			return $(document).width();
		},
		
		height: function(){
			return $(document).height();
		},
		
		x: function(){
			return 0;
		},
		
		y: function(){
			return 0;
		},
		
	});
	
	var 
		id = "cinc",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected
    }

});
        
