const questions = [
  {
    'que': 'Which of the following is a markup language?',
    'a': 'C#',
    'b': 'HTML',
    'c': 'Java',
    'd': 'PHP',
    'Correct': 'b' // Correct option is 'b' (HTML)
  },
  {
    'que': 'Dot net is a technology by?',
    'a': 'Microsoft',
    'b': 'Google',
    'c': 'OBM',
    'd': 'Facebook',
    'Correct': 'a' // Correct option is 'a' (Microsoft)
  },
  {
    'que': 'Azure technology  by?',
    'a': 'IBM',
    'b': 'AWS',
    'c': 'Mirosoft',
    'd': 'Facebook',
    'Correct': 'c' // Correct option is 'a' (Microsoft)
  },
  {
    'que': 'football is global?',
    'a': 'No',
    'b': 'Yes',
    'c': 'Limited scope',
    'd': 'Do not know',
    'Correct': 'b' // Correct option is 'a' (Microsoft)
  }
];

let index = 0;
const quesbox = document.getElementById("quebox");
const optionLabels = document.querySelectorAll(".option label"); // Targeting the labels inside .option divs
const nextBtn=document.querySelector(".nxt-btn");
// const chkbtn=document.querySelector(".Chk-btn");
const bkc=document.querySelector(".bkc-btn");
const sbt=document.querySelector(".Sbt-btn");
const anscorrect=document.querySelector(".Ans-text");
const feedback=document.querySelector(".Ans-text");
const feedback2=document.querySelector(".Ans-text");
const mesg=document.querySelector(".message-ans");

const loadquestion = () => {  

  if (questions && questions[index]) {
    const data = questions[index];
    console.log(data); // Logs the current question object

    // Update the question text
    quesbox.innerText = `${index + 1}) ${data.que}`;

    // Assign the options to their respective labels
    optionLabels[0].innerText = data.a; // Option 1
    optionLabels[1].innerText = data.b; // Option 2
    optionLabels[2].innerText = data.c; // Option 3
    optionLabels[3].innerText = data.d; // Option 4
    
    
  } 
  else
  {
    console.log("No question data available at this index");
  }

};

const bksquestion = () => {
  console.log("Back button clicked,current index: ", index);
  if (index > 0) {
    index--; // Move to the previous question
    loadquestion(); // Load the previous question
  }
  else{
    alert("you are on  first question")
  }
};

const nextquestion =()=>{
  sbt.disabled = false;

  const radioButtons = document.querySelectorAll('input[name="nm"]');
  
  // Debugging: Log the radio buttons to check if they are being selected
  console.log("Radio Buttons:", radioButtons);
  
  // Use Array.from to convert the NodeList to an array and uncheck all radio buttons
  Array.from(radioButtons).forEach(radio => {
    radio.checked = false; // Uncheck each radio button

  });

    index++; 

    if(index >=questions.length){

        nextBtn.disabled = false; // Disable Next button if no more questions
        alert("No more questions");
       
    }
    else{

        loadquestion();
        feedback.innerHTML="";

    }
}

const checkAnwser = () => {
  const selectoption = document.querySelector('input[name="nm"]:checked');
  
 // console.log(selectoption); // Check what `selectoption` contains when you click the "Check Answer" button
  
  if(!selectoption){

    alert( "please select option");
   

  }
    const selectvalue = selectoption.value;
    const correctvalue = questions[index].Correct;
    
    if (selectvalue == correctvalue) {

      anscorrect.value = "Correct Answer";   
       
      sbt.disabled = true;

     feedback.innerHTML="well-done answer correct" 
    } else {
      
      feedback2.innerHTML="Incorrect Answer! Try again." 
    }
    
    
};
nextBtn.addEventListener("click", nextquestion);
// chkbtn.addEventListener("click",checkAnwser);
bkc.addEventListener("click",bksquestion);
sbt.addEventListener("click",checkAnwser);
// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadquestion();
});
 