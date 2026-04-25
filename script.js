const picker=document.getElementById('themePicker');

for(let i=1;i<=10;i++){
 let option=document.createElement('option');
 option.value=i;
 option.textContent='Theme '+i;
 picker.appendChild(option);
}

picker.addEventListener('change',function(){
 document.body.className='theme'+this.value;
});

function openStory(title,text){
 document.getElementById('title').textContent=title;
 document.getElementById('content').textContent=text;
 document.getElementById('popup').classList.remove('hidden');
}

function closeStory(){
 document.getElementById('popup').classList.add('hidden');
}

/* click dark area to close */
document.getElementById('popup').addEventListener('click',function(e){
 if(e.target.id==='popup'){
   closeStory();
 }
});
