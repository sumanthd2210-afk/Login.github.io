let button=document.querySelector("button");


button.addEventListener("click",function(){
    let username=document.getElementById("User").value;
    let password=document.getElementById("password").value;
    let message=document.getElementById("message")


    if(username=="Sumanth"&& password=="22334@"){
        message.innerText="login successful!"
        message.style.color="green"
    }else{
       message.innerText="login error!"
        message.style.color="red"  
    }
})