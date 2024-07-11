// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}
const destructivelyPrependCat = (name)=>{
    return cats.unshift(name)
}
const destructivelyRemoveLastCat = ()=>{
    return cats.pop()

}
const destructivelyRemoveFirstCat =()=>{
    return cats.shift()
}
const appendCat= (name)=>{
    return [].concat(cats,name)
}
const prependCat =(name)=>{
    return [].concat(name,cats)
}
const removeLastCat =()=>{
    return cats.slice(0,2)
}
const removeFirstCat=()=>{
    return cats.slice(1,3)
}