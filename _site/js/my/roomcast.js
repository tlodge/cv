define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "roomcast",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

		menuItems = ko.observableArray([
			{id: 'panel', name: 'panel',  img: '../assets/img/splash.svg'},
			{id: 'register',  	name:'register', img: '../assets/img/register.svg'},
			{id: 'maker', name: 'maker',  img: '../assets/img/splash.svg'},
			{id: 'dashboard',  	name:'dashboard', img: '../assets/img/splash.svg'},
			{id: 'backend', name:'backend', img: '../assets/img/splash.svg'},
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
		},
		
        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected,
		menuItems: menuItems,
		selectedSrc:selectedSrc,
		selectItem:selectItem,
		amActive: amActive,
    }

});
        
