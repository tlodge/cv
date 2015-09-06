define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
	
		menuItems = ko.observableArray([
											{name:"roomcast", 	id: "roomcast"},
											{name:"erith park", id: "erith"}, 
											{name:"ucn", 		id: "ucn"}, 
											{name:"communities in the clouds", id: "cinc"},
											{name:"homework", 	id:"homework"},
											{name:"becoming dataware", id:"dataware"},
										]),
		
		loadedTemplates = [],
		
		selectedItem    = ko.observable().publishOn("menu_event"),
		
		_subscription = selectedItem.subscribe(function(item){
			console.log("subscription....seeen load template for");
			console.log(item);
			loadTemplate(item);
		}),
		
		loadTemplate = function(item){
			 console.log("loading a template for");
			 console.log(item);
			 if (loadedTemplates.indexOf(item.id) < 0){
                require([],
                    function(){
                       
                        $.ajax({
                            type: "GET",
                            url:  item.id + ".html",
                            dataType: "html",

                            success: function (response) {
                                $("#" + item.id).append("<div data-bind='visible:amSelected()'>" + response + "</div>");
                                ko.applyBindings(vm, $("#" + item.id)[0]);
                                loadedTemplates.push(item.id);
                                //vm.loadData();
                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                //handle error appropriately!
                            }
                        });
                    }
                );
            }
		},
		
		init = function(){
			
		};
	
	return {
		init: init,
		menuItems: menuItems,
		selectedItem:selectedItem,
	}
});