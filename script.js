for(let i=1;i<=30;i++){
let option=document.createElement('option');
option.value=i;
option.textContent='Theme '+i;
themePicker.appendChild(option);
}

themePicker.addEventListener('change',function(){
document.body.className='theme'+this.value;
});

function openStory(title,text){
titleEl.innerText=title;
content.innerText=text;
popup.classList.remove('hidden');
}

function closeStory(){
popup.classList.add('hidden');
}
