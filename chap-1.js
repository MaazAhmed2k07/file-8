console.log("Chap 6 TO 9")

console.log("QUESTION #1")
var a = 10;

console.log("Result:");
console.log("The value of a is: " + a );

console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a );

console.log("The value of a++ is: " + (a++));
console.log("Now the value of a is: " + a );

console.log("The value of --a is: " + (--a));
console.log("Now the value of a is: " + a );

console.log("The value of a-- is: " + (a--));
console.log("Now the value of a is: " + a );

console.log("Question2")
var valueA = 2
var valueB = 1
var result = --valueA - --valueB + ++valueB + valueB-- ;

console.log("The value of a is" + "" +valueA)
console.log ("The value of b is " +"" + valueB)
console.log("The value of result is " + "" + result)



 
console.log ("Question 3")
var userName = prompt("Q3 : ENTER YOUR NAME")
console.log("HI " + userName)


console.log("Question 5")
var inputOfNum = prompt(" Q5 : Enter a number");
if (!inputOfNum){
  inputOfNum = 5
}
inputOfNum = parseInt(inputOfNum);

for (var i = 1; i <= 10; i++) {
  console.log("The Multiplication of your number is "+""+(inputOfNum * i) );
}



console.log("Question 6")
var subject1 = prompt("Q6 : Enter 1st Subject")
var subject2 = prompt("Q6 : Enter 2nd Subject")
var subject3 = prompt("Q6 : Enter 3rd Subject")
var totalMarks = 100;
var obtnMarks1 = prompt("Q6 : 1st subject obtained marks")
var obtnMarks2 = prompt("Q6 : 2nd subject obtained marks")
var obtnMarks3 = prompt("Q6 : 3rd subject obtained marks")
 var calcMarks1 = console.log("Marks of " + subject1 + " is = " + obtnMarks1/totalMarks*100 + "%")
 var calcMarks2 = console.log("Marks of " + subject2 + " is = " + obtnMarks2/totalMarks*100 + "%")
 var calcMarks3 = console.log("Marks of " + subject3 + " is = " + obtnMarks3/totalMarks*100 + "%")


console.log("Chap 9 TO 11")
console.log("Question 8")
var city = prompt ("Q8 : Enter your city")

if (city.toLowerCase === "karachi" ){
    console.log("WELCOME TO CITY OF LIGHTS")

}
else{
console.log("WELCOME TO " + city)
}



console.log("QUESTION 9")
var gender = prompt("Q9 : Enter your gender").toLowerCase();


if (gender === "male") {
  console.log("Hi sir");
} else if (gender === "female") {
  console.log("Hi madam");
}


console.log("Question 10")

var trafficLightColor = prompt("Q10 : Enter the traffic light color:").toLowerCase();


if (trafficLightColor === "red") {
  console.log(" Must Stop");
} else if (trafficLightColor === "yellow") {
  console.log("Ready To Move");
} else if (trafficLightColor === "green") {
  console.log("Move Now");
} 


console.log("Question 11")

var fuel = prompt ("Q11 : Enter your car fuel in Liters") 
fuel = parseFloat(fuel);
 if(fuel < 0.25){
    console.log("PLease refill the fuel in your car ")
 }

console.log("Question 12")
 var one = 4;
if (one++ === 5){
    console.log("Condition is true")
}else {
    console.log("False")
}


var two = 82 ;
if (two++ === 83){
    console.log("Condition is true")
}
else {
    console.log("False")
}

var three = 12 ;
if (three++ === 13){
    console.log("Condition is true")
}
else {
    console.log("False")
}
if(three === 13){
    console.log("Condition is true")
} 
else {
    console.log("False")
}


if (++three < 14){
    console.log("Condition is true")
}
else {
    console.log("False")
}

if (three === 14){
    console.log("Condition is true")
}
else {
    console.log("False")
}

var materialCost = 20000
var labourCost = 2000
var totalCost = materialCost + labourCost
if (totalCost === labourCost + materialCost){
    console.log("The cost is correct")
}
else{
    console.log("The cost is incorrect")
}



if(true){
    console.log("true")
}
if(false){
    console.log("false")
}
if ("car" < "cat"){
    console.log("Car is smaller than cat")
}else{
    console.log("Car is bigger then cat")
}


console.log("Question 12")
var Marks = prompt("Q12 : Enter total marks")
var new0 = parseInt(Marks)

var MarksSub1 = prompt ("Q12 : Enter your 1st subject obtained marks")
var new1 = parseInt(MarksSub1)

var MarksSub2 = prompt("Q12 : Enter your 2nd subject obtained marks")
var new2 = parseInt(MarksSub2)

var MarksSub3 = prompt(" Q12 : Enter your 3rd subject obtained marks")
var new3 = parseInt(MarksSub3)

var obtMarks = new1 + new2 + new3;
var percentage = obtMarks/Marks*100
var newPercent = parseInt(percentage)

console.log("Total marks : "+""+Marks)
console.log("Obtained marks :"+""+obtMarks)
console.log("Percentage is : "+""+newPercent +"%")
if(newPercent >= 80){
console.log("Grade :"+""+"A-1")
}else if (newPercent >= 70){
    console.log("Grade :"+""+"A")
}else if (newPercent >= 60){
    console.log("Grade :"+""+"B")
}else if (newPercent >= 50){
    console.log("Grade :"+""+"C")
}else if (newPercent >= 40){
    console.log("Grade :"+""+"F")
}


console.log("Question 13")
var sceretNum =Number(6);
var userQue = prompt("Q6 : Guess the sceret number between 1 to 10")
userQueTo = parseInt(userQue)
if(sceretNum === userQueTo){
    console.log("Bingo ! Correct Answer")
}else{
    console.log("Incorrect Answer ! hint(The answer is between 1 to 7)")
}

console.log("Question 14")
var div3 = prompt("Q14 : Write a number Divisible of 3")
div3Two = parseInt(div3)
if (div3Two % 3 === 0 ){
    console.log("The number is divisible by 3")
}else{
    console.log("The number is not divisible by 3")
}

console.log("Question 15")
    var evenOrOdd = prompt("Q15 : Enter a number")
   var evenOrOdd2 = parseInt(evenOrOdd)
   if (evenOrOdd2 % 2 ===0){
    console.log("The number is even")
   }else{
    console.log("The number is odd")
}
   

console.log("Question 16")
var temp = prompt("Q16 : Whats the temperature outside")
var outTemp = parseInt(temp)
if (outTemp >= 40){
    console.log("It is to hot outside")
}else if(outTemp >= 30){
    console.log("The weather today is normal")
}
else if(outTemp >= 20){
    console.log("Today weather is cool")
}
else if(outTemp >= 10){
    console.log("OMG ! Today weather is soo cool")
}

console.log("Question 17")
var firstOp = prompt("Q17 : Enter first number")
var firstOpe = parseInt(firstOp)
var op = prompt("Enter  operator")
var scndOp = prompt("Enter second number")
var scndOpe = parseInt(scndOp)
if(op === "+"){
    console.log("Your answer is "+""+firstOpe + scndOpe)
}else if(op === "-"){
    console.log("Your answer is "+""+firstOpe - scndOpe)
}else if(op === "*"){
    console.log("Your answer is "+""+firstOpe * scndOpe)
}else if(op === "/"){
    console.log("Your answer is "+""+firstOpe / scndOpe)
}else if(op === "%"){
    console.log("Your answer is "+""+firstOpe % scndOpe)
}


console.log("Chap 12 TO 13")
console.log("Question 18")


console.log("Question 19")
 var q19 = prompt ("Q19 : Enter 1st Integer")
 var q19_0 = prompt ("Enter 2nd Integer")

 var q19_1 = parseInt(q19);
 var q19_2 = parseInt(q19_0);

 if (q19_1 > q19_2){
   console.log("1st Integer is larger ")
 }
 else if (q19_1 < q19_2){
   console.log("2nd Integer is larger")
 }
 else if (q19_1 === q19_2){
   console.log ("Both Integer's are qual")
 }else{
   console.log("Enter a valid Integer")
 }

console.log("Question 20")
var q20 = prompt("Q20 : Enter a Number")
if (q20 > 0){
   console.log("The number is positive")
}
else if (q20 < 0){
   console.log("The number is negative")
}else if (q20 === 0){
   console.log("The number is 0")
}else{
   console.log("Enter a valid Number")
}

console.log("Question 21")
 var q21 = prompt("Q21 : Enter a single character ")
if (q21.length === 1 ){
   var q21_1 = q21.toLowerCase;
}
else{
   console.log (" Please enter a single character")
}
if (q21 === "a"|| q21 === "e" || q21 === "i" || q21 === "o" || q21 === "u"){
   console.log("Chracter is a Vowel")
}else{
   console.log("Character is not a vowel")
}



console.log("Question 22")
var q22 = "abc123"
var q22_1 = prompt("Q22 : Enter the password")
if (q22 === q22_1){
   console.log("The password you enters matches the original password")
}else{
   console.log("Incorrect password")
}

console.log("Question 23")
var q23 = prompt("Q23 : Enter Hour")
if (q23 >= 18){
   console.log("Good day")
}else{
   console.log("Good evening")
}

console.log("Question 24")
var q24  = prompt("Q24 : Enter time (in 24hr colock format)")

if (q24 >= "0000" && q24 < "1200" ){
   console.log("Good Morning")
}
else if (q24 >= "1200" && q24 < "1700"){
   console.log("Good Afternoon")


}else if (q24 >= "1700" && q24 < "2100"){
    console.log("Good Evening")
}

else if (q24 >= "2100" && q24 < "2359"){
   console.log("Good Night")
}else {
   console.log("Enter a valid Time")
}


console.log("Question 25")
var q25StudentName = {};

console.log("Question 27") 
var q27_arrayString = ("Ahmed","Mutahir","Ahsan","Daniyal" )

console.log("Question 28")
var q28_numArray = (1 , 5 ,7, 6) ;

console.log("Question 29")
var q29_booleanArray =("True,False" )

console.log("Question 30")
var q30_mixArray = ("Mutahir",26 , true);


console.log("Question 31")
var q31_eduArray =  ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

for (var m = 0 ; m < q31_eduArray.length ; m++){
    console.log((m+1)+")"+q31_eduArray[m])
}

console.log("Question 32")
var q32_studentName = ["Mutahir" , "Ahmed" , "Ali"];
var q32_score = [450 , 320 , 239]



for(var n = 0; n < q32_studentName.length ; n++ ){
    var q32_percent = (q32_score[n] / 500 ) * 100;
    console.log("Score of "+q32_studentName[n]+ " is " + q32_score[n] +". Percentage : "+  q32_percent + "%")
} 


console.log("Question 33")
var q33_color = ["green","orange","black"]
console.log("Colors in array are " + q33_color);

var q33_1 =prompt("Q33 : What color do you want to add ?")
q33_color.unshift (q33_1)
console.log("The Updated array is " +q33_color)

var q33_2 =prompt("Q33 : What color do you want to add in the end ?")
q33_color.push(q33_2)
console.log("The updated array is " + q33_color)


q33_color.unshift("Purple","Lime")
console.log("The updated array is " + q33_color)

q33_color.shift();
console.log("After deleting first element " + q33_color)

q33_color.pop();
console.log("After deleting last element " + q33_color)



q33_del = parseInt(prompt("Enter the Index you want to delete color"))
q33_delColor = parseInt(prompt("How many colors do you want to delete"))

q33_color.splice[q33_del,q33_delColor]
console.log("The updated result is "+ q33_color)


console.log("Question 34")
var q34_scoreStudent = [320 , 230 , 480 , 120];
q34_scoreStudent.sort()
console.log(q34_scoreStudent)

console.log("Question 35")
var q35_cityList = ["Karachi","Islambad","Quetta","Lahore","Multan",]
var q35_selectCity = q35_cityList.slice(1,3)
console.log(q35_selectCity)

console.log("Question 36")
var q36_names = ["This","is","my","cat"];
console.log("Without using join method " + ":"  + q36_names)
var q36_join = q36_names.join(" ")
console.log("After using join method " + ":"  + q36_join)

console.log("Question 37")
var q37_fifo = ["keyboard ","mouse","printer","monitor"]
console.log(q37_fifo)
console.log("After using shift method")
console.log(q37_fifo.shift(0))
console.log(q37_fifo.shift(1))
console.log(q37_fifo.shift(2))
console.log(q37_fifo.shift(3))

console.log("Question 38")
var q38_fifo = ["keyboard ","mouse","printer","monitor"]
console.log(q38_fifo)
console.log("After using unshift method")
console.log(q38_fifo.reverse())
console.log(q38_fifo.reverse(1))
console.log(q38_fifo.reverse(2))
console.log(q38_fifo.reverse(3))

console.log("Chap 17 TO 20")
console.log("Question 39")
var q39_array = []

console.log("Question 40")
var q40_multiDimension = [[0,1,2,3] , [1,0,1,2]  , [2,1,0,1] ]
console.log(q40_multiDimension)

console.log("Question 41")
for ( q = 1;q <= 10; q++){
console.log(q)
}

console.log("Question 42")
var q42_number = parseInt(prompt("Q42 : Enter a number to show its multiplication number "))
var q42_length = parseInt(prompt("Q42 : Enter the length multiplication table "))
for(var w = 1; w <= q42_length; w++){
    console.log(q42_number + "*" + w + "=" + q42_number*w);
}

console.log("Question 43")
var fruits = ["apple","banana","orange","mango"]

for (var r = 0; r < fruits.length; r++) {
    console.log(fruits[r]);
}

for (var r = 0; r < fruits.length; r++) {
    console.log("Element at index  "+ r  +"  is  " +fruits[r]);
}

console.log("Question 44")
var q44_counting = [1,2,3,4,5,6,7,8,9,10]
console.log("Counting = "+ q44_counting.join(" "))

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

console.log("Question 45")

var q45_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var q45_input = prompt("Q45 : Enter the item you want:");




for (var i = 0; i < q45_bakery.length; i++) 
  if (q45_bakery[i].toLowerCase() === q45_input.toLowerCase()) {
    {
        console.log(q45_input + " is available in the list.");
      } 
      }else {
        console.log(q45_input + " is not available in the list.");
}


console.log("Question 46")
var q46_num = [1,5,7,3,2,9,]
var q46_largest = q46_num[0]

for (var s = 1;s < q46_num.length; s++ ){
    if(q46_num[s] > q46_largest){
     q46_largest = q46_num[s]   }
}
console.log("the largest number in array is " + q46_largest)


console.log("Question 47")
var q46_number = [1,5,7,3,2,9,]
var q46_small = q46_number[0]

for (var s = 1;s < q46_number.length; s++ ){
    if(q46_number[s] < q46_small){
     q46_small = q46_number[s]   }
}
console.log("the largest number in array is " + q46_small)


console.log("Question 48")
for(var d = 1; d <= 100 ; d++){
    if(d % 5 === 0 ){
        console.log(d)
    }
   
}

console.log("Chap 21 to 25 ")
console.log("Question 49")
var q49_firstName = prompt("Q49 : Enter your first Name ")
var q49_lastName = prompt("Q49 : Enter your last Name ")
var q49_fullName =console.log("Hello ! " + q49_firstName +" "+ q49_lastName);

console.log("Question 50")
var q50_phone = prompt("Q50 : Enter your favourite mobile phone model")
console.log("Length of string : " + q50_phone.length)

console.log("Question 51")
var q50_pak = ("n")
console.log("The index of 'n' in word 'Pakistani' is " + "Pakistani".indexOf(q50_pak) )

console.log("Question 52")
var q51_lstIndx = ("l")
console.log("The last index of 'l' in word 'Hello World' is " + "Hello World".lastIndexOf(q51_lstIndx))

console.log("Question 53")
console.log("Pakistani".indexOf("i"))

console.log("Question 54")
var q54_firstName = prompt("Q49 : Enter your first Name ")
var q54_lastName = prompt("Q49 : Enter your last Name ")
 var q54_fullName =console.log("Hello " + q54_firstName.concat(q54_lastName))


console.log("Question 55")
console.log("Before Replacing")
var q55_word = ("Hyderabad")
console.log(q55_word)
console.log("After Replacing")
var q55_replace = q55_word.replace("Hyder","Islam")
console.log(q55_replace)


console.log("Question 56")
var q56_sentence = ("Ali and sami are best friends. They paly cricket and football together ")
console.log(q56_sentence)
console.log("after replacing")
var q56_rep = q56_sentence.replace("and","&").replace("and","&")
console.log(q56_rep)

console.log("QUESTION 57")
var q57_str = "472"
console.log("Values = 472")
console.log("Type = " +typeof(q57_str))
console.log("Values = 472")
var q57_num = parseInt(q57_str)
console.log("Type = " + typeof(q57_num))

console.log("Question 58")
var q58_input = prompt("Q58  : Type Input")
var q58_upper = q58_input.toUpperCase()
console.log(q58_upper)

console.log("Question 59")
var q59_input = prompt("Q59  : Type Input")
var q59_upper = q59_input.charAt(0).toUpperCase() + q59_input.slice(1).toLowerCase();
console.log(q59_upper)

console.log("Question 60")
var q60_num = 35.36
var q60_con = q60_num.toString().replace("." , "")
console.log(q60_con)


console.log("Question 61")
var q61_bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var q61_input = prompt("Q61 : Enter the item you want:");
for (var i = 0; i < q61_bakery.length; i++) 
  if (q61_bakery[i].toLowerCase() === q61_input.toLowerCase()) {
{ console.log(q61_input + " is available in the list.");
}
}
else {
    console.log(q61_input + " is not available in the list.");
} 

console.log("Question 62")
var q62_pass = prompt("Enter the password") 
if(q62_pass.length > 6){
    console.log("Enter a valid password")
}


console.log("Question 63")
var q63_uni =("University Of Karachi ") 
var q63_split = q63_uni.split("")

for(var o = 0 ; o < q63_split.length ;  o++ ){
    console.log(q63_split[o])
}

console.log("Question 64")
var q64_input = ("Pakistan")
var q64_lstChar = q64_input.charAt(q64_input.length -1)
console.log("The last index is : "+q64_lstChar)


console.log("Chap 26 TO 30")
console.log("Question 65")
var q65_input = prompt("Q65 : Enter a positive integer")
console.log("Number : " + q65_input)
var q65_round = Math.round(q65_input)
console.log("Round of value : " + q65_round)
var q65_floor = Math.floor(q65_input)
console.log("Floor value : " + q65_floor)
var q65_ceil = Math.ceil(q65_input)
console.log("Ceil value : " + q65_ceil)

console.log("Question 66")
var q66_input = prompt("Q66 : Enter a negative floating point integer")
console.log("Number : " + q66_input)
var q66_round = Math.round(q66_input)
console.log("Round of value : " + q66_round)
var q66_floor = Math.floor(q66_input)
console.log("Floor value : " + q66_floor)
var q66_ceil = Math.ceil(q66_input)
console.log("Ceil value : " + q66_ceil)

console.log("Question 67")
var q67_input = prompt("Q67 : Enter a value")
console.log("Value  : " + q67_input)
var q67_abs = Math.abs(q67_input)
console.log("Absolute value :  " + q67_abs)

console.log("Question 68")
var q68_dice = Math.ceil(Math.random()*6)
alert("Random dice value is : " +  q68_dice )

console.log("Question 69")
var q68_dice = Math.ceil(Math.random()*2)
if(q68_dice === 1){
    console.log("Random coin value : Heads")
}else if(q68_dice === 2){
    console.log("Random coin value : Tails")
}


console.log("question 70")
var q69_num = Math.ceil(Math.random()*100)
console.log("Random number between 1 to 100 is : " + q69_num)


console.log("Question 71")
var q71_input =prompt("Q71 : Enter your weight in kg")
var q71_weight = parseFloat(q71_input)

if(!isNaN(q71_weight)){
    console.log("The weight of user is " + q71_weight +"kg")
}else{
    console.log("Enter your valid weight")
}


console.log("Question 72")
var q72_scrt = Math.ceil(Math.random()*10)
console.log("The sceret number is " + q72_scrt)
var q72_input = prompt ("Q72 : Enter the sceret number (number is between 1 to 10)")

if(q72_scrt === q72_input){
    console.log("Congratulation ! you enter the right number")
}else{
    console.log("Try Again!")
}


// chap 31 - 34

// answer # 1

console.log("chap 31 - 34")

var NewTime = new Date()

console.log("Answer # 1"," ",NewTime)

// answer # 2

var CurrentMonth = new Date()
var currentMonth = new Date().getMonth();
var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
var currentMonthName = monthNames[currentMonth];


alert("The current month is " + currentMonthName );
console.log("Answer # 2"," ","The current month is " + currentMonthName );

// answer # 3


var CurrentDay = new Date().getDay();
var DayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var CurrentDayName = DayName[CurrentDay];

alert("Today is " + CurrentDayName );
console.log("Answer # 3 "," ","Today is " + CurrentDayName );

// answer # 4

var ans3_date = new Date()
var ans3_day = ans3_date.getDay()
if(ans3_day === 0 || ans3_day === 6 ){
    console.log("Answer # 4 "," ","It's a fun day!")
}

// answer # 5

var ans5_Newdate = new Date()
var ans5_date = ans5_Newdate.getDate()

if(ans5_date >= 15 ){
    console.log("Answer # 5 "," ","First Fifiteen Days of the month")
} else(
    console.log("Answer # 5 "," ","Last days of the month")
)

// answer # 6

var ans6_New = new Date()
var ans6_time = ans6_New.getTime()
var ans6_crnt = ans6_time/(1000*60)
console.log("Answer # 6 "," ","Current milliseconds : " +  ans6_time,"\n","            ","ellasped milliSecond since Jan 1, 1970 : " +ans6_crnt)

// answer # 7

var ans7_New = new Date()
var ans7_hr = ans7_New.getHours()
if(ans7_hr > 12){
    console.log("Answer # 7 "," ","Its PM")
}else{
    console.log("Answer # 7 "," ","Its AM")
}

// answer # 8

var ans8_laterDate = new Date(2020,11,31,0,0,0,0)
console.log("Answer # 8 "," ","Later Date : " + ans8_laterDate)

// answer # 9

var ans9_date = new Date(2023,10,21)
var ans9_today = new Date()
var ans9_left = ans9_today - ans9_date  ; 
var ans9_dayPass = Math.floor(ans9_left/(1000*60*60*24))
console.log(ans9_dayPass + "  days have passed since 1st Ramdan 2023")

// answer # 10

var ans10_New = new Date(2015,11,16,22,)
var ans10_crnt = new Date()
var ans10_minus = ans10_crnt - ans10_New;
var ans10_sec = Math.floor(ans10_minus/(1000*60));
console.log("Answer # 10 "," ",ans10_sec + "  Seconds have passed since beginging of 2015")

// answer # 11

var ans11_new = new Date()
var ans11_then = ans11_new.getHours()
ans11_new.setHours(ans11_then + 1)
console.log("Answer # 11 "," ","Hours Before changing is : " + ans11_new,"\n","             ","Hours after changing is : " + ans11_new)

// answer # 12

var q84_new = new Date()
var q84_time = q84_new.getDate()
console.log("Answer # 12 "," ","Date Before changing is : " + q84_new,"\n","             ","Hours after changing is : " + q84_new)
q84_new.setDate(q84_time - 100)
console.log()

// answer # 13

var q85_prompt = prompt("Q85 : Enter your age")
var q85_New = new Date()
var q85_year = q85_New.getFullYear()
var q85_birth = q85_year - q85_prompt;
console.log("Answer # 13 "," ","Your Birth Year is : " + q85_birth)

// answer # 14


var q86_Name = "Maaz Ahmed"
var q86_Month = "December" 
var q86_units = Number(410);
var q86_charges = Number(16)
var q86_Payable =(q86_units * q86_charges)
var q86_donePayable = q86_Payable.toFixed(2)
var q86_late = Number(350)
var q86_gross = q86_Payable + q86_late;

console.log("Answer # 14 "," "," Customer Name : " + q86_Name,"\n",
    "              ","Month : " + q86_Month,
    "\n","              ","Number of Units : " + q86_units,
    "\n","              ","Charges per Unit : " + q86_charges,
    "\n","              ","Net Amount Payable (Within Due Date) : " + q86_donePayable,
    "\n","              ","Late payment charges : " + q86_late,
    "\n","              ","Gross amount payable (After Due Date) : " + q86_gross)