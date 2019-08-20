// Create a function called args_count that returns the number of arguments provided
function args_count(args){
  //let count = Array.prototype.slice.call(arguments);
  return arguments.length
}

function args_count(...args){
    return args.length
  }