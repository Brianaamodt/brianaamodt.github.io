function Dave(x){
	var x = 10;
		if (x >= 3){
			console.log("health is at " + x + " HP. Find a health pack");
			x--;
		} else if (x == 0){
			console.log("health is at " + x + " HP. FATALITY!!!" );
			x--;
		} else {
			console.log("health is at " + x + " HP.");
			x--;
		}
}
