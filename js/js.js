'use strict';

// let username = prompt (' whats your name ?' );
// alert (`hello ${username}`);

let d=0 
// let  questionarr =  ['Did i achieve my dream??', 'do i still styding??', 'do i have brothers??', 'am i funny person??', 'am i winter lover??'];

// function generateQ(arr){
//     for(let i=0 ; i<= arr.length ; i++){
//        let input = prompt(arr[i]).toLowerCase();
//        while( input !== 'yes' && input !== 'y' && input !== 'no' && input !== 'n'){
//              input = prompt('please answer with yes  y  no or n').toLowerCase();
//        }
//       if ((arr[i] === 'do i have brothers??' || arr[i] === 'am i funny person??') && (input === 'yes' || input === 'y')){
//         alert('correct answer');
//           d++;
//       }
//       else if ((arr[i] === 'Did i achieve my dream??' || arr[i] === 'do i still styding??' || arr[i] === 'am i winter lover??') && (input === 'no' || input === 'n')){
//         alert('correct answer');
//         d++ ; 
//       }
//       else{
//         alert('incorrect answer');
//       }
//       }

// }



generateQ(questionarr);

function geussnum (){
let     ques1= prompt('guess the number i liked ?')
for (let i =0; i<4 ; i++){
    if (ques1=== 3){
        alert ('correct');
        d++;
        break;
    }
    else if 
        (ques1<3){
        ques1= prompt('too low')

        
    }
    else if (ques1>3){
        ques1=prompt('too high try again');
    }
   if (i!==3){
 alert ('sorry the answer is 3')
   }
}
}
geussnum ();


