function toast(ct) {

    var x = document.getElementById("clipboard");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


    navigator.clipboard.writeText(ct);
    
}