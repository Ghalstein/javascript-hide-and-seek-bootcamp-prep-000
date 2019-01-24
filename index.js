function getFirstSelector(selector){
  return document.querySelector(''+selector);
}
function nestedTarget(){
  return document.querySelector('div#nested div div div div.target');
}
function deepestChild(){
  const child = document.getElementById('app').querySelectorAll('div#grande-node div div div div');
  var test = child[i].innerHTML;
  var i = 0;
  while (i<child.length) {
    child[i].innerHTML = (i + 1).toString();
    i++;
  }
  return test;
}
function increaseRankBy(n){
  let child = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i<child.length; i++){
    child[i].innerHTML = parseInt(child[i].innerHTML)+n;
  }
}
