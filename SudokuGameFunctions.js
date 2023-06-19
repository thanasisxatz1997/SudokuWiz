const sudokuSolution=[["2","1","3","4"],["4","3","1","2"],["1","4","2","3"],["3","2","4","1"]]
const sudokuL=[[" ","1"," "," "],["4","3","1","2"],[" ","4"," ","3"],["3","2","4"," "]]
const sudokuEmptiesSolution=["2","3","4","1","2","1"]
let currSec=0
let currMin=0
let currHours=0
window.onload= LoadGame(4)
const sudokuButtons=document.querySelectorAll(".sudokuSquare")
console.log(sudokuButtons)
sudokuButtons.forEach( button=> {
    button.addEventListener("click",ChangeNumber.bind(this))
    console.log(this)
})
let timer=0
setInterval(ChangeTime,1000)



function LoadGame(size)
{
    console.log("LOADING GAME")
    var gameBoard=document.getElementById("gameContainer")
    gameBoard.style.minHeight=size*50+"px"
    gameBoard.style.minWidth=size*50+"px"
    gameBoard.style.maxHeight=size*50+"px"
    gameBoard.style.maxWidth=size*50+"px"
    gameBoard.style.Height=size*50+"px"
    gameBoard.style.Width=size*50+"px"
    for(i=0;i<size;i++)
    {
        var line=document.createElement('div')
        line.classList.add('sudokuLine')
        gameBoard.appendChild(line)
        for(j=0;j<size;j++)
        {
            if(sudokuL[i][j]!=" ")
            {
                var sudokuSquare=document.createElement('div')
                sudokuSquare.classList.add("sudokuSquareStandard")
                sudokuSquare.innerHTML="<a>"+sudokuL[i][j]+"</a>"
                line.appendChild(sudokuSquare)
            }
            else
            {
                var sudokuSquare=document.createElement('div')
                sudokuSquare.classList.add("sudokuSquare")
                sudokuSquare.innerHTML="<a>"+sudokuL[i][j]+"</a>"
                line.appendChild(sudokuSquare)
            } 
        }
    }
    console.log("DONE")
}

function ChangeNumber(e)
{
    numChoiceButton=document.getElementById("dropDownNumbersButton")
    var currentNum=numChoiceButton.innerHTML[0]
    e.target.textContent=currentNum
}

function ChoseNumber(num)
{
    var choiceButton=document.getElementById("dropDownNumbersButton")
    choiceButton.innerHTML=num+choiceButton.innerHTML.substring(1);
}

function CheckIfWon()
{
    var won=true
    i=0
    sudokuButtons.forEach( button=> {
        console.log("The content= "+button.textContent+"The sol="+sudokuEmptiesSolution[i])
        if(button.textContent==sudokuEmptiesSolution[i])
        {
            i++
        }
        else
        {
            won=false
        }
    })
    return won;
}

function Done()
{
    console.log("HERE")   
    if(CheckIfWon()==true)
    {
        console.log("WON THE GAME")
        location.replace("./GameResultWon.html")
    }
    else
    {
        console.log("LOST THE GAME")
        location.replace("./GameResultLost.html")
    }
    
}

// function ChangeTime()
// {
//     const gameTimer=document.getElementById("gameTimer")
//     currSec++
//     if(currSec>60)
//     {        
//         currMin++
//         currSec=0
//         if(currMin>60)
//         {
//             currHours++
//             currMin=0
//         }
//     }
//     gameTimer.innerText=currHours+":"+currMin+":"+currSec
//     console.log(gameTimer.textContent)
// }

function ChangeTime()
{
    console.log(timer)
    let min=String(Math.trunc(timer/60)).padStart(2,0)
    let sec=String(timer%60).padStart(2,0)
    document.getElementById("gameTimer").textContent=`${min}:${sec}`
    timer++
}