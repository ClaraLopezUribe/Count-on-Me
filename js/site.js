//CONTROLLER function:

function getValues() {
    
    //1. Get values from the page
   
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
   
    //2. Validate input to ensure the use of integers, not strings:
    
        //Attempt to parse into integers 
    
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

        //boolean test to determine next steps 
   
    if (Number.isInteger(startValue) && Number.isInteger(endValue) && (startValue >=0 && endValue <= 100)) {

        //Call LOGIC function
        let numbers = generateNumbers(startValue, endValue);

    //3. Call displayNumbers

        displayNumbers(numbers);

        // OR display alert
    } else {

        alert("Error: You must enter whole numbers between 0-100");

    }
}

//LOGIC function(s)
function generateNumbers(sValue, eValue) {
    
    let numbers = [];
    
    //generate all the numbers from start to end
     //This loop will execute until index = eValue

    for (let index = sValue; index <= eValue; index ++) {
        
        numbers.push(index);
    }

    return numbers;

}

//DISPLAY function(s)

function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        //display numbers and mark even numbers in bold

      

        if(number % 2 == 0) {
            
                className = "even";

            } else {

                className = "odd";
                
            }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRows

}





/* Find accessible way to display the even numbers that does not rely exclusively on visual cues

if(number % 2 == 0) {
    templateRows += `<tr><td>${number}</td></tr>`;
} else{
    templateRows += `<tr><td>${number}</td></tr>`;
}  */
