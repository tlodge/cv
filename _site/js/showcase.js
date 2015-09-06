require.config({
    baseUrl: 'js/my',

    paths: {
        "jquery": "../jquery/jquery-2.1.0.min",
        "d3": "../d3/d3",
    },
    
    "shim": {
    }
});

require(['jquery','d3building'], function($,d3building){
	console.log("ok am here!!!");
});



