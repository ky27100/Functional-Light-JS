var fn1 = value => value * 1;
var fn10 = value => value * 10;
var fn100 = value => value * 100;
var fn1000 = value => value * 1000;

var fn3 = (pa1, pa2, pa3) => pa1+pa2+pa3;

function curryK(fn, arity){
	return (function looping(paras){
		return function curried(arg){
			var args = [...paras,arg];
			debugger;
			if (args.length >= arity){ return fn(...args)}
			else { return looping(args)}
		}	
	})([])

}

function curryK2(fn, arity){
	var args = [];
	return function currying(param){
		args.push(param);
		debugger;
		if (args.length >= arity) return fn(...args) 
		else return currying		

	}
}
