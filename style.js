
const typeOfWords = ["Want to know how to improve your typing speed? The first step to learn to type fast and increase your typing speed is to take a timed typing test!", "There are many reasons why you might want to take a typing speed test.", "or maybe you want to see if you need to improve your accuracy."," Either way, a typing speed test is a great way to estimate your progress."]

const msg = document.getElementById("message")
const typeWords = document.getElementById("mywords")
const btn = document.getElementById("btn")
let startTime , endTime;


typeWords.style.color = "white"

//defined a function
const playGames = ()=>{
    //function to check random words of array
  let randomNumber = Math.floor(Math.random() * typeOfWords.length)
  msg.innerHTML = typeOfWords[randomNumber];

  //btn click and time
  let date = new Date()
  startTime = date;
  btn.innerHTML = "Done"
}

//defined end play
const endplay= ()=>{
    let date = new Date()
  endTime = date;
  let totalTime = ((endTime - startTime)/ 1000)
  console.log(totalTime);

  //declare wordcounter function
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr)
 
  //formula to check
  let speed =Math.round((wordCount / totalTime)*60 )
  let finalMsg  = "You typed total at  " + speed + " words per minuts ";


  finalMsg += comparewords(msg.innerText , totalStr);

  msg.innerText = finalMsg
}


const comparewords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0

    //arrayName then forEcah use
    words1.forEach(function (items , index) {
        if(items == words2[index]){
            count++
        }
    });

    let errorWords  = (words2.length - count);
    return(count + " Correct out of " + words1.length + " words and the total number of error are " + errorWords)
}


const wordCounter = (str)=>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
    
}




btn.addEventListener("click" , function(){
    if(this.innerHTML == "Start"){
        typeOfWords.disabled = false
        playGames()
    }else if(this.innerHTML == "Done"){
        typeOfWords.disabled = true;
        btn.innerHTML = "Start"
        //call a function 
        endplay()
    }
})