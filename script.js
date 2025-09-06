
let userS = 0;
let compS = 0;


let msgbox = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontainer"); 
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
let usercount = userscore.innerText;
let compcount = compscore.innerText;
let newbtn = document.querySelector(".newbtn");

newbtn.addEventListener("click",() => {
    
    usercount = 0;
    compcount = 0;
    userscore.innerText = usercount;
    compscore.innerText = compcount;
    msgbox.innerText = "Play your move";
})

const choices = document.querySelectorAll(".choices");

choices.forEach( (choice) => {
        let userchoice = choice.getAttribute("id");
        choice.addEventListener("click",() => {
            playgame(userchoice);
        })
})

let compchoice = () =>{
    let options = ["rock", "paper","scissors"];
    let randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}
const resetmsgbox = () => {
    msgbox.innerText = "Play your move";

}

const draw = () => {

    msgbox.innerText = "It's a DRAW";
    msgcontainer.style.backgroundColor = "cadetblue";

    
}

const showwinner = (userwin , comptchoice, userchoice ) => {
    if(userwin){
        console.log("youwin");
        msgbox.innerText = `you WON!!\nYour ${userchoice} beats ${comptchoice}`; 
        msgcontainer.style.backgroundColor = "green";
        usercount++;
        userscore.innerText = usercount;
    }
    else{
        console.log("you loose");
        msgbox.innerText = `You LOOSE.\n${comptchoice} beats Your ${userchoice}`;
        msgcontainer.style.backgroundColor = "red";
        compcount++;
        compscore.innerText = compcount;
    }
}

const playgame = (userchoice) => {
    //generate comp choice
    console.log(userchoice);
    const comptchoice = compchoice();
    console.log(comptchoice);

    if(userchoice == comptchoice){
        draw();
    }
    else{
       let userwin = true;
     if(userchoice == "rock"){
        // comp choices - scissors/paper
         userwin = comptchoice == "scissors"? true : false;
     }
     else if(userchoice == "paper"){
        //comp choices - rock/scissors
        userwin = comptchoice == "rock" ? true : false;
     }
     else{
        //comp choices - rock/paper
        userwin = comptchoice == paper ? true : false;
     }
     showwinner(userwin , comptchoice , userchoice);
    }
    

}
