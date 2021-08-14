
let cookie = document.querySelector("body");
cookie.onload = function(){checkCookie()};    
   // function to set cookie
        // to set cookie, you need to state clearly the kind of info you want the cookie to store
            //cname- cookie name, vname- cookie value, exdays- cookie expiry

                // set cookie function 

                    function setCookie(cname, cvalue, exdays)
                    {
                        const d = new Date();

                        d.setTime(d.getTime() + (exdays*24*60*60*1000));

                        let expires = "expires="+ d.toUTCString();
                        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                    }
    // function to get cookie 

                    // this function return the value the specified cookie

                    function getCookie(cname){
                        let name = cname + "=";
                        let decodedCookie = decodeURIComponent(document.cookie);
                        let ca = decodedCookie.split(';');
                        for(let i = 0; i<ca.length; i++)
                        {
                            let c = ca[i];
                            while (c.charAt(0) == ' '){
                                c = c.substring(1);
                            }
                            if (c.indexOf(name) == 0)
                            {
                                return c.substring(name.length, c.length);
                            }
                        }
                        return "";
                    }

    //function to check cookie

                function checkCookie(){
                    if(navigator.cookieEnabled == true)
                    {
                        alert("en");
                        let username = getCookie("username");
                        if(username != ""){
                           
                            document.getElementById("cookie").innerHTML =  ("welcome again " + username);
                        }else{
                            username = prompt("Please enter your name:", "");
                            if(username !="" && username != null){
                                setCookie("username", username, 365);
                            }
                        }
                    }
                    else{
                        alert("Please enable cookiesto ease the su")
                    }

                }
