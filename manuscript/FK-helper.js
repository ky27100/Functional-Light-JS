"use strict";

function reduce(reducerfn,initial,arr){
	var acc = initial;
	for(let idx =0; idx < arr.length; idx++){
		acc = reducerfn(acc, arr[idx], idx, arr);
	}
	return acc;
}

function map(mapperFn, arr){
	var newArr = [];
	for(let idx=0; idx < arr.length; idx++){
		newArr.push( mapperFn(arr[idx], idx, arr));
	}
	return newArr;
}

function filter(predicateFn, arr){   // (= filterIn)
	var newArr=[];
	for(let idx=0; idx <  arr.length; idx++){
		if (predicateFn(arr[idx], idx, arr)) newArr.push(arr[idx])
	}
	return newArr;
}
