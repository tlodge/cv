require.config({
    baseUrl: 'js/my',

    paths: {
        "jquery": "../jquery/jquery-2.1.0.min",
        "d3": "../d3/d3",
    },
    
    "shim": {
    }
});

require(['jquery','demomenu'], function($,menu){
	console.log("ok am here!!!");
	ko.applyBindings(menu, document.getElementById("menu"));
});



