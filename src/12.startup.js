function init(){
	var state;
	if(window.localStorage && localStorage.getItem){
		try{
			if(state = localStorage.getItem("graph-tk")){
				state = JSON.parse(state);
			}
		}catch(ex){
			throw("Could not load saved state.");
			state = undefined;
		}
	}
	if(state == undefined){
		state = {}
	}
	app.ui = ui_init(window);
	app.createGraph("z=x+sin(y)");
}

document.body.removeChild(document.getElementById("loading"));

track.time(init)("full load", new Date()-startupTime);