function fetch1(){
    var xhttp=new XMLHttpRequest(); // Creating XHR object


    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('dataset').innerHTML=this.responseText;
    }
}










    xhttp.open("GET", "data.json", true);
    xhttp.send();
}