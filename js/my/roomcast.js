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
		
		selectedSrc = ko.observable(menuItems()[0].img),
		
		selectSrc = function(src){
			console.log("great seen img selected");
			console.log(src);
			selectedSrc(src);
		},
		
        amSelected      = ko.computed(function(){
            console.log("checking selected for id " + id);
            return id === selectedItem().id
        });
        
    return {
		amSelected: amSelected,
		menuItems: menuItems,
		selectedSrc:selectedSrc,
		selectSrc:selectSrc,
    }

});
        
