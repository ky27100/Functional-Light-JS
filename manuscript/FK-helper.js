"use strict";

function reduce(fn,initial,arr){
	var acc = initial;
	for(let idx =0; idx < arr.length; idx++){
		acc = fn(acc, arr[idx]);
	}
	return acc;
}

function map(mapperFn, arr){
	var newArr = [];
	for(let idx=0; idx < arr.length; idx++){
		newArr.push( mapperFn(arr[idx]))
	}
	return newArr;
}
