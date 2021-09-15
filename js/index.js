//  ----Top bar buttons------

console.log( "This is linked correctly!" );
    
function displayMessage() {
    alert("Loading weather report");
}



//-----Code to change values according dropdwon menu-----


function celsiusToFarenheit(temp){
    result = Math.round((temp*9/5)+32);
    return result;
}

function farenheitToCelsius(temp){
    result = Math.round((temp-32)*5/9);
    return result;
}


function detectDegrees(element){
    console.log(element.value);
    if(element.value==="C"){
        let spansMax = document.querySelectorAll('.spanMax');
        for( i = 0; i <= spansMax.length-1 ; i ++){
        //Instructions for maximum temperatures
        let numMax = spansMax[i].innerText;
        let tempMax = parseInt(numMax);
        tempMax = farenheitToCelsius(tempMax);
        spansMax[i].innerText= tempMax
        //Instructions for minimum temperatures
        let spansMin = document.querySelectorAll('.spanMin');
        let numMin = spansMin[i].innerText;
        let tempMin = parseInt(numMin);
        tempMin = farenheitToCelsius(tempMin);
        spansMin[i].innerText= tempMin
        }
    }
    else{
        let spansMax = document.querySelectorAll('.spanMax');
        for( i = 0; i <= spansMax.length-1 ; i ++){
            //Instructions for maximum temperatures
            let numMax = spansMax[i].innerText;
            let tempMax = parseInt(numMax);
            tempMax = celsiusToFarenheit(tempMax);
            spansMax[i].innerText= tempMax
            //Instructions for minimum temperatures
            let spansMin = document.querySelectorAll('.spanMin');
            let numMin = spansMin[i].innerText;
            let tempMin = parseInt(numMin);
            tempMin = celsiusToFarenheit(tempMin);
            spansMin[i].innerText= tempMin
        }
    }
}



//-----Using onclic button on HTML to remove the cookies box--------*/

function deleteElement( event ) {  
    let entireElement = event.target.closest ('.cookiesContainer');
    entireElement.remove();
}

let acceptButton = document.querySelector('.btnAccept');
acceptButton.addEventListener("click", deleteElement);
