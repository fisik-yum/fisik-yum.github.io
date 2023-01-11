var url = window.location.pathname;
    console.log(url)
    document.getElementById("headerlink").innerHTML="~/World/fisik"+url;
    document.getElementById("headerlink").href=url;

    function toast(ct) {

    var x = document.getElementById("clipboard");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);


    navigator.clipboard.writeText(ct);
    
}