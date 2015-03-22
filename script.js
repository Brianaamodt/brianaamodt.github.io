function Dave(x){
	for (var x = 10; x >= 0; x--; ) {
		if (x >= 3){
			console.log("health is at " + x + " HP. Find a health pack");
		} else if (x == 0){
			console.log("health is at " + x + " HP. FATALITY!!!" );
		} else {
			console.log("health is at " + x + " HP.");
		}
	}
}
