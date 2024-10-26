var videotag=document.getElementById("videotag")
var buttons=document.getElementById("button")
var times=true
function video(){
    if(times==true){
    videotag.style.left="110%"
    videotag.style.transition="0.5s"
    setInterval(time,30000)
    times=false
}
else{
    videotag.style.left="-1100px"
    times=true
}
}
function time(){
    videotag.style.left="-1100px"
    videotag.style.left="-1100px"
    times=true
}