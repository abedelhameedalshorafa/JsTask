//   Part 1 ////////


let operation=prompt("Please Enter Your Operation");
let num1=parseFloat(prompt("Please Enter Your First Num"));
let num2=parseFloat(prompt("Please Enter Your Second Num"));



switch(operation)
{
    case '+':
        console.log(`${num1} + ${num2} = ${num1+num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1-num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1*num2}`);
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1/num2}`);
        break;
}


//   part 2 ///////

const mark=parseFloat(prompt("Please Enter Your Mark",74));
let grade;

if(mark<50){
    grade="FAIL";
}
else if(mark>=50 && mark<=59)
{
    grade="D";
}
else if(mark>=60 && mark<=69)
{
    grade="C";
}
else if(mark>=70 && mark<=79)
{
    grade="B";
}
else if(mark>=80 && mark<=89)
{
    grade="A";
}
else if(mark>=90 && mark<=100)
{
    grade="A+";
}   
else{
    grade="Invalid";
}


document.writeln(`Your Grade Is ${grade} <br>`);


///// part 3 /////

const radius=5;
const area= Math.PI * radius * radius;


console.log(`The Area of Circle with a Radius ${radius} is ${area}` );



/// part 4 ///////

const x = parseFloat(prompt(" Please Enter The Value Of x "));
const y = parseFloat(prompt(" Please Enter The Value Of y "));

if(x>y)
{
    alert("Hello World");
    console.log("Hello World");
    // document.getElementsByClassName("result").innerHTML="Hello World";
    document.write(`Hello World`);
}
else {
    alert("Goodbye");
    console.log("Goodbye");
    // document.getElementsByClassName("result").innerHTML="Goodbye";
    document.write("Goodbye")
}