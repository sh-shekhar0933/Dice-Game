

var randomnumber1=Math.floor((Math.random()*6))+1;
var randomnumber2=Math.floor((Math.random()*6))+1;

var rimages="dice"+randomnumber1+".png";
var source="images/"+rimages;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",source);

var rimages2="dice"+randomnumber2+".png";
var sourc2="images/"+rimages2;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",sourc2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player2 Wins"
}
else {
    document.querySelector("h1").innerHTML="Match Tied"
}
