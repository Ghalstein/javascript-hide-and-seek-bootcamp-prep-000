function getFirstSelector(selector){
  return document.querySelector(''+selector);
}
function nestedTarget(){
  return document.querySelector('div#nested div div div div.target');
}
function deepestChild(){
  const child = document.getElementById('app').querySelectorAll('#grande-node div div div div');
  return child;
}
function increaseRankBy(n){
  let child = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i<child.length; i++){
    child[i].innerHTML = parseInt(child[i].innerHTML)+n;
  }
}
