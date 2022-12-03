document.getElementById("btn").addEventListener("click", makerequest);

function makerequest(){
    console.log("Done");

    const xhr = new XMLHttpRequest();   //creating a request using open xhr method
    xhr.open("GET", "data.txt", true)   //true means asynchronous

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log(xhr);
            }
        }
    };

    xhr.send();  // to send the request from client to server
}