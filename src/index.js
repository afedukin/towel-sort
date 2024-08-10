
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let n = []
  if (matrix === undefined) {return n}
  else {
  return matrix.reduce((accumulator, item, index) => { 
    
    
    return accumulator.concat((!(index % 2) ? item : item.reverse()));

  }, [])};

}
