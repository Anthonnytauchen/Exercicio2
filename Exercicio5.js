function debounce(fn, delay){
let timerId

return function(...args){
const context = this
clearTimeout(timerId)

timerId = setTimeout(()=>{
    fn.apply(context,args)

},delay)
}

}
console.log(debounce())