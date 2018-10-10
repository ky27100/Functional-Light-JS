
function curryK(fn, arity){
	return (function looping(paras){
		return function curried(arg){
			var args = [...paras,arg];
			if (args.length >= arity){ return fn(...args)}
			else { return looping(args)}
		}	
	})([])

}

function curryK2(fn, arity){
	var args = [];
	return function currying(param){
		args.push(param);
		if (args.length >= arity) return fn(...args) 
		else return currying		

	}
}
