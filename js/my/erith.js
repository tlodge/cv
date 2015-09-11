define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "erith",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

		menuItems = ko.observableArray([
			{
				id: 'overview', 
				name: 'overview',  
				img: '../assets/img/erithmain.jpg', 
				html: "<h4>erith park</h4> <p class='text-justify'>	<p> This situated display is being installed in Erith Park, a development in South East London.  The code is written in <strong>react/flux and D3</strong> and hooks up with a <strong>nodejs</strong> backend, <strong>socket.io</strong> for live updates and simple <strong>MySQL</strong> database. There is a also a simple android container which is used to run it full screen on android tablets </p>"
			},
			{
				id: 'tagging',  	
				name:'panel', 
				img: '../assets/img/erithtagging.jpg', 
				html: "<h4>erith park</h4> <p class='text-justify'>	<p> This situated display is being installed in Erith Park, a development in South East London.  The code is written in <strong>react/flux and D3</strong> and hooks up with a <strong>nodejs</strong> backend, <strong>socket.io</strong> for live updates and simple <strong>MySQL</strong> database. There is a also a simple android container which is used to run it full screen on android tablets </p>"
			},	
			{
				id: 'admin',  	
				name:'register', 
				img: '../assets/img/erithadmin.jpg', 
				html: "<h4>erith park</h4> <p class='text-justify'>	<p> All images are seen immediately on an admin iterface where they can be moderated.  The admin interface allows managers to send messages to the main display and to update the selection of tags that can be chosen for an image </p>"
			},	
		]),
		
		selected = ko.observable(menuItems()[0]),
		
		selectItem = function(item){
			selected(item);
		},
		
		amActive	= function(item){
			return item.id === selected().id
		},
		
		selectedSrc = ko.computed(function(){
			return selected().img
		}),
		
		selectedHTML = ko.computed(function(){
			return selected().html
		}),
		
        amSelected    = ko.computed(function(){
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected,
		menuItems: menuItems,
		selectedSrc:selectedSrc,
		selectItem:selectItem,
		amActive: amActive,
		selectedHTML:selectedHTML,
    }
        
});
        
