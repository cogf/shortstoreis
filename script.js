const themePicker=
let option=document.createElement("option");
option.value=i;
option.textContent="Theme "+i;
themePicker.appendChild(option);
}

themePicker.addEventListener(
"change",
function(){
document.body.className="theme"+this.value;
}
);


function openStory(docLink){

document.getElementById(
"storyFrame"
).src=docLink;

document.getElementById(
"popup"
).classList.remove(
"hidden"
);

}


function closeStory(){

document.getElementById(
"popup"
).classList.add(
"hidden"
);

document.getElementById(
"storyFrame"
).src="";

}


document.getElementById(
"popup"
).addEventListener(
"click",
function(e){
if(e.target.id==="popup"){
closeStory();
}
}
);


document.addEventListener(
"keydown",
function(e){
if(e.key==="Escape"){
closeStory();
}
}
);
