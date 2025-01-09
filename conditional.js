//Example 1

let number = 0;

if (number>0)
    console.log("Postive number");
else if (number<0)
    console.log("Negative number");
else
 console.log("Number is Zero");

 //Example 2
 //Checks if the age is greater than or equal to 18

 let age=13;
 let message;

 if (age < 18 )
 {
    message="Not eligible to Vote";

 }
 else
 {
    message="Eligible to Vote";
 }
 console.log(message)


 //Example 2

 //Condition: Checks the temperature to give a suggestion:
//If the temperature is above 25°C, it suggests wearing light clothes.
//If the temperature is between 15°C and 25°C, it suggests wearing a jacket.
//If it's below 15°C, it suggests dressing warmly.

let temp=25;

if(temp>25){
    console.log("light clothes");
}
else if (temp>=15 && temp<=25)
{
    console.log("wear a jacket");
}
else{
    console.log("wear warm clothes");
}