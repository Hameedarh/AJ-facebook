let database = [
    {
    username: "Tolu",
    password: "userone11"
},
{
    username: "Chichi",
    password: "userone12"
},
{
    username: "Ola",
    password: "userone13"
},
{
    username: "Michael",
    password: "userone14"
},
{
    username: "Ifeanyi",
    password: "userone15"
},
{
    username: "Gideon",
    password: "userone16"
}
]
newsfeed=[
    {
    username: "Tolu",
    timeline: function(){
        location=("homepage.html")
    }
},
    {
    username: "Chichi",
    timeline: function(){
        location=("homepage.html")
    }
},
    {
    username: "Ola",
    timeline: function(){
        location=("homepage.html")
    }
},
{
    username: "Michael",
    timeline: function(){
        alert("Happy Moments!!!")
    }
},
    {
    username: "Ifeanyi",
    timeline: function(){
        location=("homepage.html")
    }
},
    {
    username: "Gideon",
    timeline: function(){
        alert("A sunny day")
    }
}
];


// the app version

var us = document.getElementById("user")
us.addEventListener("keypress",function(event){
    if (event.key==="Enter"){
      // document.getElementById("butt")
      if(us.value !== ''){
        var x= document.createTextNode("username1");
      }
    }
  });
 
  
var pa = document.getElementById("pass")
pa.addEventListener("keypress",function(event){
    if (event.key==="Enter"){
      if(pa.value !== ''){
        var x= document.createTextNode("password1");
       
      } 
      signIn()
    }
  })

var sp = document.getElementById("pass")

let check = document.getElementById('check')
check.addEventListener('click',tick)
function tick(){
    if(check.checked === true){
        sp.type ='text'
    }else{
        sp.type = 'password'
    }
}

var bat = document.getElementById("sign")
bat.addEventListener("click", signIn)


function isUserValid(username, password){
    for (var i= 0; i< database.length; i++){
        if (us.value === database[i].username && pa.value === database[i].password) {return true}
}
return false; 
}

function signIn(username, password){
    if (isUserValid(username, password) === true) {
        for (var k=0; k<=newsfeed.length; k++){
            if (us.value === newsfeed[k].username){alert("Login successful. you will be directed to your newsfeed shortly")
            break;
        }
        }
        newsfeed[k].timeline()
    }


    else{alert("incorrect username or password")}
}
signIn(userName, passWord)





