let field = [];
//let x;
let signTest;
let totalTest = false;
let fieldTest = 10;
//flatten 'display' via field on each click to show previously inputted values
let display;
let miniDisplay;
let dotCount = true;
                  
function calculator(value) {
  //console.log(btn);
  //let value = btn.value;
  switch (value) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      //console.log(totalTest);
      if (miniDisplay.length == fieldTest) {
        break;
      }
      if (field.length == 0 && value == 0) {
        break;
      }
      if (totalTest == true) {
        //console.log(totalTest);
        field.length = 0;
        field.push(parseFloat(value));
        totalTest = false;
        //dotCount = false;
      } else {
        //console.log(totalTest);
        field.push(parseFloat(value));
        //dotCount = false;
      }
      console.log(field);
      break;

    case "+":
    case "-":
    case "/":
    case "*":
    case ".":   
      signTest = field[field.length - 1];
      //console.log(signTest);
      if (/[\+\-\*\/\.]/.test(signTest)) {
        break;
      } else if (field.length == 0 && value == ".") {
          dotCount = false;
          console.log("period test case");
          field.push(0 + value);
      } else if (dotCount && value == ".") {
          field.push(value);
          dotCount = false;
          break;
      } else if(value !== ".") {
        field.push(value);
        dotCount = true;
      }
      totalTest = false;
      console.log(field);
      console.log(dotCount + ' dot count');
      break;

    case "=":
      signTest = field[field.length-1];
      if (/[\+\-\*\.\/]/.test(signTest)) {
        console.log('testcase ERROR');
        field.pop();
      }
      let resolved = field.join("");  
      resolved = eval(resolved);
      //console.log(resolved);
      field.length = 0;
      field.push(resolved);
      console.log(field);
      totalTest = true;
      dotCount = true;
      break;
    
    case "AC":
      field.length = 0;
      console.log(field);
      totalTest = false;
      break;
    
    case "ON/OFF":
      field.length = 0;
      console.log(field);
      totalTest = false;
      break;
      
    case "CE":
      signTest = field[field.length-1];
      console.log(signTest);
      //console.log(/[\+\-\*\/]/.test(signTest));
      if (/[\+\-\*\/]/.test(signTest)) {
      field.pop();
      } else {
        //console.log(field.lastIndexOf("+"));
        //console.log(field.length);
        for(var i = field.length - 1; i >= 0; i--) {
          if (/[\+\-\*\/]/.test(field[i])) {
            break;
          } else {
            field.pop();
          }
        }
        
        
      }
      //  field.length = [];
      //}
      //console.log(field);
      break;
      
    default:
     //code block
  }
  signTest = field[field.length];
  if (/[\+\-\*\/\.]/.test(signTest)) {
    miniDisplay = signTest;
  } else {
    let mini = field.slice();
    miniDisplay = [];
    for(var i = mini.length - 1; i >= 0; i--) {
          if (/[\+\-\*\/]/.test(mini[i])) {
            break;
          } else {
            miniDisplay.unshift(mini.pop());
          }
  }
  
  }  
  
  
  
  //miniDisplay = miniDisplay.join("");
  display = field.join("");
  
  if (miniDisplay[0] > 1000000000){
    miniDisplay = parseFloat(miniDisplay.join(""));
    document.getElementById("mini").innerHTML = miniDisplay.toExponential(5);
  } else {
    miniDisplay = miniDisplay.join("");
    document.getElementById("mini").innerHTML = miniDisplay;
  }   
  document.getElementById("field").innerHTML = display;
  console.log(miniDisplay);
  console.log(display);

}
//

// Get the parent DIV, add click listener...
//https://davidwalsh.name/event-delegate
//via https://stackoverflow.com/questions/23835150/javascript-event-listener-for-multiple-buttons-with-same-class-name
document.getElementById("calc").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches(".valv")) {
    //console.log(e.target.value);
    calculator(e.target.value);
	}
});