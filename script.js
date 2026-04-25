// Theme picker
const themePicker = document.getElementById("themePicker");

for(let i=1;i<=30;i++){
 let option = document.createElement("option");
 option.value=i;
 option.textContent="Theme "+i;
 themePicker.appendChild(option);
}

themePicker.addEventListener("change",function(){
 document.body.className="theme"+this.value;
});


// Story popup
function openStory(title,text){
 document.getElementById("title").textContent=title;
 document.getElementById("content").textContent=text;

 document.getElementById("popup").classList.remove("hidden");
}

function closeStory(){
 document.getElementById("popup").classList.add("hidden");
}


// Click outside book closes popup
document.getElementById("popup").addEventListener("click", function(e){
 if(e.target.id==="popup"){
   closeStory();
 }
});


// Escape key closes popup
document.addEventListener("keydown", function(e){
 if(e.key==="Escape"){
   closeStory();
 }
});
