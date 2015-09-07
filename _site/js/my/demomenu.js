define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
	
		menuItems = ko.observableArray([
											{name:"roomcast", 	id: "roomcast"},
											{name:"erith park", id: "erith"}, 
											{name:"ucn", 		id: "ucn"}, 
											{name:"communities in the clouds", id: "building"},
											{name:"homework", 	id:"homework"},
											{name:"becoming dataware", id:"dataware"},
										]),
		
		loadedTemplates = [],
		
		selectedItem    = ko.observable().publishOn("menu_event"),
		
		_subscription = selectedItem.subscribe(function(item){
			loadTemplate(item);
		}),
		
		amActive = function(item){
			return selectedItem() ? item.id === selectedItem().id : false;
		},
		
		loadTemplate = function(item){
			
			 if (loadedTemplates.indexOf(item.id) < 0){
			 
                require([item.id],
                    function(vm){
                       
                        $.ajax({
                            type: "GET",
                            url:  item.id + ".html",
                            dataType: "html",

                            success: function (response) {
                            	
                                $("#" + item.id).append("<div data-bind='visible:amSelected()'>" + response + "</div>");
                                ko.applyBindings(vm, $("#" + item.id)[0]);
                                loadedTemplates.push(item.id);
                                //vm.selectedItem(item);
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
			selectedItem(menuItems()[0]); 
			//loadTemplate((menuItems()[0]);
		};
	
	return {
		init: init,
		menuItems: menuItems,
		selectedItem:selectedItem,
		amActive: amActive,
	}
});