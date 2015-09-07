define(['jquery','knockout', 'knockoutpb'], function($, ko){
	
	var 
		id = "roomcast",
		
        selectedItem    = ko.observable().subscribeTo("menu_event", true),

		menuItems = ko.observableArray([
			{
				id: 'overview', 
				name: 'overview',  
				img: '../assets/img/splash.svg', 
				html: "<h4>roomcast</h4> <p class='text-justify'>Roomcast is an inventive new platform for managing residents in high-rise residential buildings.  It is built on top of <strong>React/Flux/Node</strong> and uses a graph database: <strong>Neo4j</strong> as its datastore.  Neo4j is great for modelling the physical structure of a building and has helped create a platform that will allow users and developers to express intentions more naturally.</p>"
			},
			{
				id: 'panel',  	
				name:'panel', 
				img: '../assets/img/register.svg',
				html: "<h4>the user experience</h4>  <p class='text-justify'>Buildings are complex and as a result the management of the wants and needs of the users living within them is challenging.  Roomcast provides a delightfully simple interface of <strong>buttons</strong> to users which will allow them to quickly and easily accomplish tasks.  Buttons hook into <a href='http://nodered.org'>node red</a> a visual 'Internet of Things' toolkit, which means that buttons can be wired to do pretty much anything </p>"
			},	
			{
				id: 'register',  	
				name:'register', 
				img: '../assets/img/register.svg',
				html: "<h4>registration</h4> <p class='text-justify'>As ever, users can register through social media accounts.  Managers (such as on-site concierges) can permit or deny registrations as standard.  More importantly, they are provided with rich set of tools for reaching out to specific sets of users, whether by block, floor or tenancy or even adjacency (such as all landlords that own flats beneath apartment 10) </p>"
			},	
			{
				id: 'maker', 
				name: 'maker',  
				img: '../assets/img/splash.svg',
				html:"<h4> Management tools</h4> <p class='text-justify'>Roomcast provides a simple and powerful 'maker' dashboard that allows management (or residents) to create new buttons to target at one or more residents.  Buttons can be created and removed with complete ease which means that new buttons can be published in immediate response to issues and removed if and when they are no longer appropriate.  Roomcast gives users an exciting set of tools and a platform that gets them out into the community immediately.</p> "		
			},
			{
				id: 'dashboard',  	
				name:'dashboard', 
				img: '../assets/img/splash.svg',
				html:"<h4>Live reports</h4> <p class='text-justify'> Button creation, management and tracking is all built into roomcast.  Management get live updates when buttons are pressed, and responsibilities can be assigned to different sets of buttons.  All button presses are tracked, providing residents and managers useful, timely information on their community</p>"
		
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
		selectedItem:selectedItem,
    }

});
        
