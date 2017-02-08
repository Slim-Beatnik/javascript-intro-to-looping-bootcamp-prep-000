strangeLoop="I am ${i} strange loops."
weirdArray=['..']
function forLoop(weirdArray){
  for (var i=0;i<25;i++){
    weirdArray.push(strangeLoop)
  }
return weirdArray
}
function whileLoop(n){
  while (n>0){
    console.log(--n)
  }
  return 'done'
}
function maybeTrue(){
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  do{array.pop()
  }
  while(array.length>0&&maybeTrue())
  return array
}
