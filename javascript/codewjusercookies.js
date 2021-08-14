//cookie onload webpage
var codewj_cookie_status = document.querySelector("body");
codewj_cookie_status.onload = function(){
    codewjCheckCookie()
};


//set cookie function
function codewjSetCookie(codewj_cookie_name, codewj_cookie_value, cookie_expiry_day)
{
    const day_s = new Date();
    day_s.setTime(day_s.getTime() + (cookie_expiry_day*24*60*60*1000));
    let expires = "expires="+ day_s.toDateString();
    document.cookie = codewj_cookie_name + "=" + codewj_cookie_value + ";" + expires + ";path=/"
}
//get cookie function
function codewjGetCookie(codewj_cookie_name)
{
   let codewj_cookie = codewj_cookie_name + "=";
   let codewj_decoded_cookie = decodeURIComponent(document.cookie);
   let codewj_ca = codewj_decoded_cookie.split(';');
   for(let i = 0 ; i<codewj_ca.length; i++)
   {
       let codewj_cookie_element = codewj_ca[i];
       while (codewj_cookie_element.charAt(0) == ' '){
           codewj_cookie_element = codewj_cookie_element.substring(1);
       }

       if(codewj_cookie_element.indexOf(codewj_cookie) == 0)
       {
           return codewj_cookie_element.substring(codewj_cookie.length, codewj_cookie_element.length);
       }
   } 
   return "";
}
//check cookie function

function codewjCheckCookie(){
    // if(navigator.cookieEnabled == true){
    //     alert("cookie enabled");

    // }else{
    //     alert("please enable cookies to keep track of your activities from this site");
    // }
    let codewj_user = codewjGetCookie("codewj_user");
    if(codewj_user != ""){
        alert("Welcome " + codewj_user);
    }else{
        codewj_user = prompt("Enter your name or username to keep trackof your activities while suffing in this webpage ", "");
        if(codewj_user != '' && codewj_user != null){
            codewjSetCookie("codewj_user", codewj_user, 1);
        }
    }

}

