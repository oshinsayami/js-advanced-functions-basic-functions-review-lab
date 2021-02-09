// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(character="*"){
    return function(string = "special"){
        return `You are ${character}${string}${character}!`
    }

}

const Calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(int,arr){
    let a= int
    for(let i=0; i< arr.length; i++){
        a= arr[i](a)
    }
    return a
}
