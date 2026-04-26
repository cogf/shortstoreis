const themePicker =
document.getElementById("themePicker");

for(let i=1;i<=30;i++){
let option=document.createElement("option");
option.value=i;
option.textContent="Theme "+i;
themePicker.appendChild(option);
}

themePicker.addEventListener("change",function(){
document.body.className="theme"+this.value;
});


/* book pages */

let currentPages=[];
let currentPage=0;

function openStory(title,pages){

if(!Array.isArray(pages)){
pages=[pages];
}

currentPages=pages;
currentPage=0;

document.getElementById("title").textContent=title;

showPage();

document.getElementById("popup")
.classList.remove("hidden");
}

function showPage(){

document.getElementById("content")
.textContent=currentPages[currentPage];

document.querySelector(".page-number")
.textContent=
"Page "+(currentPage+1);

}

function nextPage(){
if(currentPage<currentPages.length-1){
currentPage++;
showPage();
}
}

function prevPage(){
if(currentPage>0){
currentPage--;
showPage();
}
}

function closeStory(){
document.getElementById("popup")
.classList.add("hidden");
}

document.getElementById("popup")
.addEventListener("click",function(e){
if(e.target.id==="popup"){
closeStory();
}
});

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){
closeStory();
}

if(e.key==="ArrowRight"){
nextPage();
}

if(e.key==="ArrowLeft"){
prevPage();
}

});
