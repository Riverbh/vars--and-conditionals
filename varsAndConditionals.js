/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttack > jamieLannisterAttack){
    console.log("Jon Snow is more beefy");
}else if (jamieLannisterAttack === jonSnowAttack){
    console.log("Equally Strong");
}else{
    console.log("Jamie is the og");
}

let jonSnowHeath = 100;
let jonSnowDefence = 0;

if(jonSnowHeath <= jamieLannisterAttack){
    console.log("Jon Snow has been slain");
}else{
    jonSnowHeath -= jamieLannisterAttack;
    console.log("Jon's health is down to"+ jonSnowHeath);
}


jonSnowDefence += 25;

if(jonSnowHeath <= jamieLannisterAttack){
    console.log("Jon has been slain");
}else{
    jonSnowHeath -= jamieLannisterAttack - jonSnowDefence;
    console.log("Jon's health is down to"+ jonSnowHeath);
}

if(jonSnowHeath + 50 > 100){
    jonSnowHeath = 100;
}else{
    jonSnowHeath += 50;
}
console.log(jonSnowHeath)

let  coinLandsHeads = false;

if(coinLandsHeads){
    console.log("The fight continues!");
}else{
    console.log("Jon is allowed to run away.");
}

//if(coinLandsHeads !== false){
//    console.log("The fight continues!")
//}else{
//    console.log("Jon is allowed to run away.")
//}

for(let i=0; i < 5; i++){
    if(jonSnowHeath <=0){
        console.log("Jon has been slain");
    }else{
        jonSnowHeath -= jamieLannisterAttack - jonSnowDefence;
        console.log("Jom's health is now" + jonSnowHeath)
    }
}

while(jonSnowHeath > 0){
    jonSnowHeath -= jamieLannisterAttack - jonSnowDefence;
    if(jonSnowHeath <= 0){
        console.log("Jon Snow is finally dead");
    }else{
        console.log("Jom's health is now" + jonSnowHeath);
    }
}

if(jonSnowAttack > 25 && jonSnowAttack < 75){
    console.log("Jon is mid level beast")
}

if(jamieLannisterAttack < 25 || jamieLannisterAttack > 75){
    console.log("Jamie is Strong id he ate his wheaties");
}else{
    console.log("Jamie is mid level best");
}