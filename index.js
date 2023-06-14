function spy(greet,person){
    return `${greet},${person}`
}

function receivesAFunction(callback){
    return callback("Hello","Natalie");
}






function  returnsANamedFunction(){
    return (function greet(){
        return`Hello`
    })

}

// console.log(returnsANamedFunction())


function returnsAnAnonymousFunction(){
     return (function(){
        return `Hello`
     })
}

console.log(returnsAnAnonymousFunction())