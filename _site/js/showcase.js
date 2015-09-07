require.config({
    baseUrl: 'js/my',

    paths: {
        "jquery": "../jquery/jquery-2.1.0.min",
        "d3": "../d3/d3",
        "knockout": "../knockout/knockout",
        "knockoutpb": "../knockout/knockoutpb",
        "ramda":"../ramda/ramda.min",
    },
    
    "shim": {
    }
});

require(['jquery','knockout','demomenu'], function($,ko,menu){
	ko.applyBindings(menu, document.getElementById("menu"));
});



