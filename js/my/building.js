define(['jquery','knockout', 'd3building', 'model', 'uidelegate', 'knockoutpb'], function($, ko, d3building, model, ui){
	
	
	d3building.init({
		width: function (){
			return $(document).width();
		},
		
		height: function(){
			return $(document).height()/2;
		},
		
		x: function(){
			return 0;
		},
		
		y: function(){
			return 0;
		},
		
	});
	//model stuff
    model.init();

    //view stuff
    ui.init(model);
	
	d3building.setdelegate(ui);
	
	var 
		id = "building",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected
    }

});
        
