
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph')
};

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};


    
function appendCat(name) {

  return [...cats, "Broom"];
}


  
function prependCat(name) {
    return ["Arnold", ...cats];
}

  
  
  function removeLastCat() {
      let allCats1 = cats.slice(0,-1)
      return allCats1;
  
  }
  

  
  function removeFirstCat() {
      let allCats2 = cats.slice(1)
      return allCats2;
  
  }
  

