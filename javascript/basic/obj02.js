

let scores = [10, 30, 50, 70];


for(let i=0; i<scores.length; i++) {
    console.log(i)
    console.log(scores[i])
}

//for ... in
for(let i in scores){
    console.log(i + ' ' + scores[i])
}

//for ... of
for(let score of scores){
    console.log(score)
}

scores.forEach( (item, index)=> {
    console.log(item + " " + index)
}  )