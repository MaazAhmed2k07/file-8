//CHAP # 1 ANSWER # 1 :

alert("CHAP # 1 ANSWER # 1 : \n" + "Welcome To Our Website!!");
console.log("CHAP # 1 ANSWER # 1 : \n" + "Welcome To Our Website!!");

//CHAP # 1  ANSWER # 2 :

alert("CHAP # 1 ANSWER # 2 : \n" + "Error ! Please Enter A Valid Code");
console.log("CHAP # 1 ANSWER # 2 : \n" + "Error ! Please Enter A Valid Code")

//CHAP # 1  ANSWER # 3 :

alert("CHAP # 1  ANSWER # 3 : \nWelcome To JS Land ! \nHappy Coding !" );
console.log("CHAP # 1  ANSWER # 3 : \nWelcome To JS Land ! \nHappy Coding !" )

//CHAP # 2  ANSWER # 1 to 4 :

var age = "17 years old"
var myName = "Maaz Ahmed"
var message = "Studying In 1st Year"

alert("CHAP # 2  ANSWER # 1 to 4: \n" +myName);
alert(age);
alert(message);

console.log("CHAP # 2  ANSWER # 1 to 4: \n" ,myName,"\n" ,age,"\n", message)

//CHAP # 2  ANSWER # 5 :

alert("CHAP # 2  ANSWER # 5: \n PIZZA \n PIZZ \n PIZ \n PI \n P");
console.log("CHAP # 2  ANSWER # 5: \n PIZZA \n PIZZ \n PIZ \n PI \n P")

//CHAP # 2  ANSWER # 6 :

var email =" abc.123@gmail.com";

alert("CHAP # 2  ANSWER # 6: \n" +"My Gmail Is :" + email);
console.log("CHAP # 2  ANSWER # 6: \n" +"My Gmail Is :" + email)

//CHAP # 2  ANSWER # 7 :

var book = "A Smarter Way To Learn Java Script !";

alert("CHAP # 2  ANSWER # 7: \n"+"I Am Trying To Learn From The Book : " +book);
console.log("CHAP # 2  ANSWER # 7: \n"+"I Am Trying To Learn From The Book : " +book)

//CHAP # 3  ANSWER # 1 :

var age1 = "I Am 17 Years Old";

alert("CHAP # 3  ANSWER # 1: \n"+ age1);
console.log("CHAP # 3  ANSWER # 1: \n"+ age1)

//CHAP # 3  ANSWER # 3 :

var birthYear = "2007"
console.log("CHAP # 3  ANSWER # 3: \n"+"My Birth Year Is : "+ birthYear," \nData Type Of My Declared Variable Is Number" );

//CHAP # 3  ANSWER # 4 :

var visitorName = "John Doe"
var productTitle = "ABC General Store"
var quantity = "3 Kg Wheat"

console.log("CHAP # 3  ANSWER # 4: \n"+visitorName+" ordered "+ quantity+" from "+ productTitle);





// ("PAGE 21 to 25 ")
// ("Question 49")

console.log("PAGE 21 to 25 ")

 var q49_firstName = prompt("Q49 : Enter your first Name ")
 var q49_lastName = prompt("Q49 : Enter your last Name ")
 var q49_fullName =console.log("ANSWER # 49:"+"Hello ! " + q49_firstName +" "+ q49_lastName);

// ("Question 50")
 var q50_phone = prompt("Q50 : Enter your favourite mobile phone model")
 console.log("ANSWER # 50:"+"Length of string : " + q50_phone.length)

//("Question 51")
 var q50_pak = ("n")
 console.log("ANSWER # 51:"+"The index of 'n' in word 'Pakistani' is " + "Pakistani".indexOf(q50_pak) )

//("Question 52")
 var q51_lstIndx = ("l")
 console.log("ANSWER # 52:"+"The last index of 'l' in word 'Hello World' is " + "Hello World".lastIndexOf(q51_lstIndx))

//("Question 53")
/console.log("Pakistani".indexOf("i"))

// ("Question 54")
 var q54_firstName = prompt("Q49 : Enter your first Name ")
 var q54_lastName = prompt("Q49 : Enter your last Name ")
  var q54_fullName =console.log("ANSWER # 53:"+"Hello " + q54_firstName.concat(q54_lastName))


//("Question 55")
console.log("ANSWER # 55:"+"Before Replacing")
var q55_word = ("Hyderabad")
 console.log(q55_word)
 console.log("After Replacing")
 var q55_replace = q55_word.replace("Hyder","Islam")
 console.log(q55_replace)


// ("Question 56")
var q56_sentence = ("Ali and sami are best friends. They paly cricket and football together ")
 console.log("ANSWER # 56:"+q56_sentence)
 console.log("after replacing")
 var q56_rep = q56_sentence.replace("and","&").replace("and","&")
 console.log(q56_rep)

// ("QUESTION 57")
 var q57_str = "472"
 console.log("ANSWER # 57:"+"Values = 472")
 console.log("Type = " +typeof(q57_str))
 console.log("Values = 472")
 var q57_num = parseInt(q57_str)
 console.log("Type = " + typeof(q57_num))

//("Question 58")
 var q58_input = prompt("Q58  : Type Input")
 var q58_upper = q58_input.toUpperCase()
 console.log("ANSWER # 58:"+q58_upper)

 //console.log("Question 59")
 var q59_input = prompt("Q59  : Type Input")
 var q59_upper = q59_input.charAt(0).toUpperCase() + q59_input.slice(1).toLowerCase();
 console.log("ANSWER # 59:"+q59_upper)

//("Question 60")
 var q60_num = 35.36
 var q60_con = q60_num.toString().replace("." , "")
 console.log("ANSWER # 60:"+q60_con)


 //console.log("Question 61")
 var q61_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var q61_input = prompt("Q61 : Enter the item you want:");
 for (var i = 0; i < q61_bakery.length; i++) 
   if (q61_bakery[i].toLowerCase() === q61_input.toLowerCase()) {
 { console.log("ANSWER # 61:"+q61_input + " is available in the list.");
 }
 }
 else {
     console.log("ANSWER # 61:"+q61_input + " is not available in the list.");
 } 

// ("Question 62")
 var q62_pass = prompt("Enter the password") 
 if(q62_pass.length > 6){
     console.log("ANSWER # 62:"+"Enter a valid password")
 }


//("Question 63")
 var q63_uni =("University Of Karachi ") 
 var q63_split = q63_uni.split("")

 for(var o = 0 ; o < q63_split.length ;  o++ ){
    console.log("ANSWER # 63:"+q63_split[o])
 }

//("Question 64")
var q64_input = ("Pakistan")
 var q64_lstChar = q64_input.charAt(q64_input.length -1)
 console.log("ANSWER # 64:"+"The last index is : "+q64_lstChar)


 
// ("PAGE 6 TO 9")


var a = 10;


console.log("CHAP # 6 To 9 ANSWER 1: \n"+"The value of a is: " + a );

console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a );

console.log("The value of a++ is: " + (a++));
console.log("Now the value of a is: " + a );

console.log("The value of --a is: " + (--a));
console.log("Now the value of a is: " + a );

console.log("The value of a-- is: " + (a--));
console.log("Now the value of a is: " + a );

// ("Question2")
var valueA = 2
var valueB = 1
var result = --valueA - --valueB + ++valueB + valueB-- ;

console.log("CHAP # 6 To 9 ANSWER 2: \n"+"The value of a is" + "" +valueA)
console.log ("The value of b is " +"" + valueB)
console.log("The value of result is " + "" + result)



 
// ("Question 3")
var userName = prompt("Q3 : ENTER YOUR NAME")
console.log("CHAP # 6 To 9 ANSWER 3: \n"+"HI " + userName)


//("Question 5")
var inputOfNum = prompt(" Q5 : Enter a number");
if (!inputOfNum){
inputOfNum = 5
}
inputOfNum = parseInt(inputOfNum);

for (var i = 1; i <= 10; i++) {
console.log("CHAP # 6 To 9 ANSWER 5: \n"+"The Multiplication of your number is "+""+(inputOfNum * i) );
}



// ("Question 6")
var subject1 = prompt("Q6 : Enter 1st Subject")
var subject2 = prompt("Q6 : Enter 2nd Subject")
var subject3 = prompt("Q6 : Enter 3rd Subject")
var totalMarks = 100;
var obtnMarks1 = prompt("Q6 : 1st subject obtained marks")
var obtnMarks2 = prompt("Q6 : 2nd subject obtained marks")
var obtnMarks3 = prompt("Q6 : 3rd subject obtained marks")
var calcMarks1 = console.log("CHAP # 6 To 9 ANSWER 6: \n"+"Marks of " + subject1 + " is = " + obtnMarks1/totalMarks*100 + "%")
var calcMarks2 = console.log("Marks of " + subject2 + " is = " + obtnMarks2/totalMarks*100 + "%")
var calcMarks3 = console.log("Marks of " + subject3 + " is = " + obtnMarks3/totalMarks*100 + "%")


console.log("PAGE 9 TO 11")
//("Question 8")
var city = prompt ("Q8 : Enter your city")

if (city.toLowerCase === "karachi" ){
console.log("CHAP # 9 To 11 ANSWER 8: \n"+"WELCOME TO CITY OF LIGHTS")

}
else{
console.log("CHAP # 9 To 11 ANSWER 8: \n"+"WELCOME TO " + city)
}



// ("QUESTION 9")
var gender = prompt("Q9 : Enter your gender").toLowerCase();


if (gender === "male") {
console.log("CHAP # 9 To 11 ANSWER 9: \n"+"Hi sir");
} else if (gender === "female") {
console.log("Hi madam");
}


//("Question 10")

var trafficLightColor = prompt("Q10 : Enter the traffic light color:").toLowerCase();


if (trafficLightColor === "red") {
console.log("CHAP # 9 To 11 ANSWER 10: \n"+" Must Stop");
 } else if (trafficLightColor === "yellow") {
  console.log("CHAP # 9 To 11 ANSWER 10: \n"+"Ready To Move");
 } else if (trafficLightColor === "green") {
 console.log("CHAP # 9 To 11 ANSWER 10: \n"+"Move Now");
} 


//("Question 11")

var fuel = prompt ("Q11 : Enter your car fuel in Liters") 
fuel = parseFloat(fuel);
if(fuel < 0.25){
    console.log("CHAP # 9 To 11 ANSWER 11: \n"+"PLease refill the fuel in your car ")
  }

// ("Question 12")
 var one = 4;
if (one++ === 5){
console.log("CHAP # 9 To 11 ANSWER 12: \n"+"Condition is true")
}else {    console.log("CHAP # 9 To 11 ANSWER 12: \n"+"False")
 }

 var two = 82 ;
 if (two++ === 83){
    console.log("CHAP # 9 To 11 ANSWER 13: \n"+"Condition is true")
}
else {
    console.log("CHAP # 9 To 11 ANSWER 13: \n"+"False")
}

 var three = 12 ;
 if (three++ === 13){
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"Condition is true")
 }
 else {
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"False")
 }
 if(three === 13){
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"Condition is true")
 } 
 else {
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"False")
 }


if (++three < 14){
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"Condition is true")
 }
else {
   console.log("CHAP # 9 To 11 ANSWER 13: \n"+"False")
 }
 if (three === 14){
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"Condition is true")
 }
 else {
     console.log("CHAP # 9 To 11 ANSWER 13: \n"+"False")
 }




// ("Question 14")
 var div3 = prompt("Q14 : Write a number Divisible of 3")
 div3Two = parseInt(div3)
 if (div3Two % 3 === 0 ){
     console.log("CHAP # 9 To 11 ANSWER 1: \n"+"The number is divisible by 3")
 }else{
     console.log("The number is not divisible by 3")
 }

// ("Question 15")
  var evenOrOdd = prompt("Q15 : Enter a number")
   var evenOrOdd2 = parseInt(evenOrOdd)
   if (evenOrOdd2 % 2 ===0){
    console.log("ANSWER # 15:"+"The number is even")
    }else{
    console.log("ANSWER # 15:"+"The number is odd")
 }
   



//("Question 17")
 var firstOp = prompt("Q17 : Enter first number")
 var firstOpe = parseInt(firstOp)
 var op = prompt("Enter  operator")
 var scndOp = prompt("Enter second number")
 var scndOpe = parseInt(scndOp)
 if(op === "+"){
     console.log("ANSWER # 17:"+"Your answer is "+""+firstOpe + scndOpe)
 }else if(op === "-"){
     console.log("ANSWER # 17:"+"Your answer is "+""+firstOpe - scndOpe)
 }else if(op === "*"){
     console.log("ANSWER # 17:"+"Your answer is "+""+firstOpe * scndOpe)
 }else if(op === "/"){
     console.log("ANSWER # 17:"+"Your answer is "+""+firstOpe / scndOpe)
 }else if(op === "%"){
     console.log("ANSWER # 17:"+"Your answer is "+""+firstOpe % scndOpe)
 }





// ("Question 19")
  var q19 = prompt ("Q19 : Enter 1st Integer")
  var q19_0 = prompt ("Enter 2nd Integer")

  var q19_1 = parseInt(q19);
  var q19_2 = parseInt(q19_0);

 if (q19_1 > q19_2){
    console.log("ANSWER # 19:"+"1st Integer is larger ")
  }
  else if (q19_1 < q19_2){
    console.log("ANSWER # 19:"+"2nd Integer is larger")
  }
  else if (q19_1 === q19_2){
    console.log ("ANSWER # 19:"+"Both Integer's are qual")
  }else{
    console.log("ANSWER # 19:"+"Enter a valid Integer")
  }

//("Question 20")
 var q20 = prompt("Q20 : Enter a Number")
 if (q20 > 0){
    console.log("ANSWER # 20:"+"The number is positive")
 }
 else if (q20 < 0){
    console.log("ANSWER # 20:"+"The number is negative")
 }else if (q20 === 0){
    console.log("ANSWER # 20:"+"The number is 0")
 }else{
    console.log("ANSWER # 20:"+"Enter a valid Number")
 }

//("Question 21")
  var q21 = prompt("Q21 : Enter a single character ")
 if (q21.length === 1 ){
    var q21_1 = q21.toLowerCase;
 }
 else{
    console.log (" Please enter a single character")
}
if (q21 === "a"|| q21 === "e" || q21 === "i" || q21 === "o" || q21 === "u"){
   console.log("ANSWER # 21:"+"Chracter is a Vowel")
}else{
   console.log("ANSWER # 21:"+"Character is not a vowel")
}



// ("Question 22")
 var q22 = "abc123"
 var q22_1 = prompt("Q22 : Enter the password")
 if (q22 === q22_1){
    console.log("ANSWER # 22:"+"The password you enters matches the original password")
 }else{
  console.log("ANSWER # 22:"+"Incorrect password")
 }

// ("Question 23")
 var q23 = prompt("Q23 : Enter Hour")
 if (q23 >= 18){
    console.log("ANSWER # 23:"+"Good day")
 }else{
    console.log("ANSWER # 23:"+"Good evening")
 }

 //console.log("Question 24")
 var q24  = prompt("Q24 : Enter time (in 24hr colock format)")

 if (q24 >= "0000" && q24 < "1200" ){
    console.log("ANSWER # 24:"+"Good Morning")
 }
 else if (q24 >= "1200" && q24 < "1700"){
    console.log("ANSWER # 24:"+"Good Afternoon")


 }else if (q24 >= "1700" && q24 < "2100"){
     console.log("ANSWER # 24:"+"Good Evening")
 }

 else if (q24 >= "2100" && q24 < "2359"){
    console.log("ANSWER # 24:"+"Good Night")
 }else {
    console.log("ANSWER # 24:"+"Enter a valid Time")
 }



// ("Question 33")
 var q33_color = ["green","orange","black"]
 console.log("ANSWER # 33:"+"Colors in array are " + q33_color);

 var q33_1 =prompt("Q33 : What color do you want to add ?")
 q33_color.unshift (q33_1)
 console.log("ANSWER # 33:"+"The Updated array is " +q33_color)

 var q33_2 =prompt("Q33 : What color do you want to add in the end ?")
 q33_color.push(q33_2)
 console.log("ANSWER # 33:"+"The updated array is " + q33_color)


 q33_color.unshift("Purple","Lime")
 console.log("ANSWER # 33:"+"The updated array is " + q33_color)

 q33_color.shift();
 console.log("ANSWER # 33:"+"After deleting first element " + q33_color)

 q33_color.pop();
 console.log("ANSWER # 33:"+"After deleting last element " + q33_color)



 q33_del = parseInt(prompt("Enter the Index you want to delete color"))
 q33_delColor = parseInt(prompt("How many colors do you want to delete"))

 q33_color.splice[q33_del,q33_delColor]
 console.log("ANSWER # 33:"+"ANSWER # 20:"+"The updated result is "+ q33_color)


//("Question 34")
var q34_scoreStudent = [650 , 290 , 780 , 520];
 q34_scoreStudent.sort()
 console.log("ANSWER # 34:"+q34_scoreStudent)

// ("Question 35")
 var q35_cityList = ["Karachi","Islambad","Quetta","Lahore","Multan",]
 var q35_selectCity = q35_cityList.slice(2,4)
 console.log("ANSWER # 35:"+q35_selectCity)

//("Question 36")
 var q36_names = ["This","is","my","cat"];
 console.log("ANSWER # 36:"+"Without using join method " + ":"  + q36_names)
 var q36_join = q36_names.join(" ")
 console.log("ANSWER # 36:"+"After using join method " + ":"  + q36_join)

// ("Question 37")
 var q37_fifo = ["keyboard ","mouse","printer","monitor"]
 console.log("ANSWER # 37:"+q37_fifo)
console.log("After using shift method")
 console.log(q37_fifo.shift(0))
 console.log(q37_fifo.shift(1))
 console.log(q37_fifo.shift(2))
 console.log(q37_fifo.shift(3))

// ("Question 38")
var q38_fifo = ["keyboard ","mouse","printer","monitor"]
 console.log("ANSWER # 38:"+q38_fifo)
 console.log("After using unshift method")
 console.log(q38_fifo.reverse())
console.log(q38_fifo.reverse(1))
 console.log(q38_fifo.reverse(2))
 console.log(q38_fifo.reverse(3))

//("PAGE 17 TO 20")
console.log("PAGE 17 TO 20")


 //("Question 40")
 var q40_multiDimension = [[0,1,2,3] , [1,0,1,2]  , [2,1,0,1] ]
 console.log("ANSWER # 40:"+q40_multiDimension)

// ("Question 41")
 for ( q = 1;q <= 10; q++){
 console.log("ANSWER # 41:"+q)
 }

// ("Question 42")
 var q42_number = parseInt(prompt("Q42 : Enter a number to show its multiplication number "))
 var q42_length = parseInt(prompt("Q42 : Enter the length multiplication table "))
 for(var w = 1; w <= q42_length; w++){
     console.log("ANSWER # 42:"+q42_number + "*" + w + "=" + q42_number*w);
 }

//("Question 43")
 var fruits = ["apple","banana","orange","mango"]

 for (var r = 0; r < fruits.length; r++) {
     console.log("ANSWER # 43:"+fruits[r]);
 }

 for (var r = 0; r < fruits.length; r++) {
     console.log("ANSWER # 43:"+"Element at index  "+ r  +"  is  " +fruits[r]);
 }

// ("Question 44")
var q44_counting = [1,2,3,4,5,6,7,8,9,10]
console.log("ANSWER # 44:"+"Counting = "+ q44_counting.join(" "))

 var q44_counting = [1,2,3,4,5,6,7,8,9,10]
 console.log("Reverse Counting = " + q44_counting.reverse())


 var q44_num = [1,2,3,4,5,6,7,8,9,10]
 for(var t = 0; t < q44_num.length ; t++){
     if (q44_num[t]%2 === 0){
         console.log(q44_num[t])
     }
 }

 var q44_num = [1,2,3,4,5,6,7,8,9,10]
 for(var y = 0; y < q44_num.length ; y++){
     if (q44_num[y]%3 === 0){
         console.log(q44_num[y])
     }
 }

//("Question 45")

var q45_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
 var q45_input = prompt("Q45 : Enter the item you want:");



 for (var i = 0; i < q45_bakery.length; i++) 
   if (q45_bakery[i].toLowerCase() === q45_input.toLowerCase()) {
     {
         console.log("ANSWER # 45:"+q45_input + " is available in the list.");
       } 
       }else {
         console.log("ANSWER # 45:"+q45_input + " is not available in the list.");
 }


//("Question 46")
 var q46_num = [1,5,7,3,2,9,]
 var q46_largest = q46_num[0]

 for (var s = 1;s < q46_num.length; s++ ){
     if(q46_num[s] > q46_largest){
      q46_largest = q46_num[s]   }
 }
 console.log("ANSWER # 46:"+"the largest number in array is " + q46_largest)


//("Question 47")
var q46_number = [1,5,7,3,2,9,]
 var q46_small = q46_number[0]

for (var s = 1;s < q46_number.length; s++ ){
     if(q46_number[s] < q46_small){
      q46_small = q46_number[s]   }
 }
 console.log("ANSWER # 47:"+"the largest number in array is " + q46_small)


//("Question 48")
 for(var d = 1; d <= 100 ; d++){
     if(d % 5 === 0 ){
         console.log("ANSWER # 48:"+d)
     }
   
 }



// console.log("PAGE 26 TO 30")
// ("Question 65")
 var q65_input = prompt("Q65 : Enter a positive integer")
 console.log("ANSWER # 65:"+"Number : " + q65_input)
 var q65_round = Math.round(q65_input)
 console.log("Round of value : " + q65_round)
 var q65_floor = Math.floor(q65_input)
 console.log("Floor value : " + q65_floor)
 var q65_ceil = Math.ceil(q65_input)
 console.log("Ceil value : " + q65_ceil)

//("Question 66")
 var q66_input = prompt("Q66 : Enter a negative floating point integer")
 console.log("ANSWER # 66:"+"Number : " + q66_input)
 var q66_round = Math.round(q66_input)
console.log("Round of value : " + q66_round)
 var q66_floor = Math.floor(q66_input)
console.log("Floor value : " + q66_floor)
 var q66_ceil = Math.ceil(q66_input)
 console.log("Ceil value : " + q66_ceil)

//("Question 67")
 var q67_input = prompt("Q67 : Enter a value")
 console.log("ANSWER # 67:"+"Value  : " + q67_input)
 var q67_abs = Math.abs(q67_input)
 console.log("Absolute value :  " + q67_abs)

//("Question 68")
 var q68_dice = Math.ceil(Math.random()*6)
 alert("Random dice value is : " +  q68_dice )

//("Question 69")
 var q68_dice = Math.ceil(Math.random()*2)
 if(q68_dice === 1){
     console.log("ANSWER # 69:"+"Random coin value : Heads")
 }else if(q68_dice === 2){
     console.log("Random coin value : Tails")
 }


//("question 70")
 var q69_num = Math.ceil(Math.random()*100)
 console.log("ANSWER # 70:"+"Random number between 1 to 100 is : " + q69_num)


// ("Question 71")
 var q71_input =prompt("Q71 : Enter your weight in kg")
 var q71_weight = parseFloat(q71_input)

 if(!isNaN(q71_weight)){
     console.log("ANSWER # 71:"+"The weight of user is " + q71_weight +"kg")
 }else{
     console.log("ANSWER # 71:"+"Enter your valid weight")
 }


//("Question 72")
 var q72_scrt = Math.ceil(Math.random()*10)
 console.log("ANSWER # 72:"+"The sceret number is " + q72_scrt)
 var q72_input = prompt ("Q72 : Enter the sceret number (number is between 1 to 10)")

 if(q72_scrt === q72_input){
     console.log("Congratulation ! you enter the right number")
 }else{
     console.log("Try Again!")
 }



 console.log("PAGE 31 to 34")
//("Question 73")
 var q73_time = new Date()
 console.log("ANSWER # 73:"+q73_time)

//("Question 74")
var q74_date = new Date()

var q74_month = [    "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
var q74_crntMonth = q74_month[q74_date.getMonth()];
console.log("Current Month : " + q74_crntMonth)

// ("Question 75")
var q75_date = new Date()
var q75_day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
var q75_crntDay = q75_day[q75_date.getDay()]
console.log("ANSWER # 75:"+"Day : " + q75_crntDay)

// ("Question 76")
var q76_date = new Date()
var q76_day = q76_date.getDay()
if(q76_day === 0 || q76_day === 6 ){
    console.log("ANSWER # 76:"+"Its a fun day!")
}

// ("Question 77")
var q77_Newdate = new Date()
var q77_date = q77_Newdate.getDate()
if(q77_date <= 15 ){
    console.log("ANSWER # 77:"+"First Fifiteen Days of the month")
} else(
    console.log("ANSWER # 7:"+"Last days of the month")
)

// ("Question 78")
var q78_New = new Date()
var q78_time = q78_New.getTime()
console.log("ANSWER # 78:"+"Current time : " +  q78_time)
var q78_crnt = q78_time/(1000*60)
console.log("ANSWER # 78:"+"ellasped milliSecond since Jan 1, 1970 : " +q78_crnt)

// ("Question 79")
var q79_New = new Date()
var q79_hr = q79_New.getHours()
if(q79_hr > 12){
    console.log("ANSWER # 79:"+"Its PM")
}else{
    console.log("ANSWER # 79:"+"Its AM")
}

//console.log("Question 80")
var q80_laterDate = new Date(2020,11,31,0,0,0,0)
console.log("ANSWER # 80:"+"Later Date : " + q80_laterDate)


// ("Question 81")
var q81_date = new Date(2023,10,21)
var q81_today = new Date()
var q81_left = q81_today - q81_date  ; 
var q81_dayPass = Math.floor(q81_left/(1000*60*60*24))
console.log("ANSWER # 81:"+q81_dayPass + "  days have passed since 1st Ramdan 2023")


// ("question 82")
var q82_New = new Date(2015,11,16,22,)
var q82_crnt = new Date()
var q82_minus = q82_crnt - q82_New;
var q82_sec = Math.floor(q82_minus/(1000*60));
console.log("ANSWER # 82:"+q82_sec + "  Seconds have passed since beginging of 2015")

// ("Question 83")
var q83_new = new Date()
var q83_then = q83_new.getHours()
console.log("ANSWER # 3:"+"Hours Before changing is : " + q83_new)
q83_new.setHours(q83_then + 1)
console.log("ANSWER # 83:"+"Hours after changing is : " + q83_new)

// ("Question 84")
var q84_new = new Date()
var q84_time = q84_new.getDate()
console.log("ANSWER # 84:"+"Date Before changing is : " + q84_new)
q84_new.setDate(q84_time - 100)
console.log("ANSWER # 84:"+"Hours after changing is : " + q84_new)

//("Question 85")
var q85_prompt = prompt("Q85 : Enter your age")
var q85_New = new Date()
var q85_year = q85_New.getFullYear()
var q85_birth = q85_year - q85_prompt;
console.log("ANSWER # 85:"+"Your Birth Year is : " + q85_birth)
