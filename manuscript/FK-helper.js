"use strict";

function reduce(fn,initial,arr){
	var acc = initial;
	
	for(let idx =0; idx < arr.length; idx++){
		acc = fn(acc, arr[idx]);
	}
	return acc;
}

function map(fn,arr){
	for(let idx =0; idx<arr.length; idx++){
		arr[idx] = fn(arr[idx]);
	}
}

