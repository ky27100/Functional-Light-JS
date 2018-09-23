"use strict";

function reduce(reducer, arr, initial = undefined){
	var acc = initial, i=0;
	
	if (!initial) {
		acc = arr[0];
		i=1;
	}

	for( i; i<arr.length; i++){
		acc = reducer(acc, arr[i]);
	}	

	return acc;
}
