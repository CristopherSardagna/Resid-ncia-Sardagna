var asd = "Casas";

console.log(window);

console.log(window.location);

console.log(window.location.href);

var url = window.location.href;

console.log(url);

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)


function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}