for(let i=1;i<=30;i++){
let option=document.createElement('option');
option.value=i;
option.textContent='Theme '+i;
document.getElementById('themePicker').appendChild(option);
}

document.getElementById('themePicker').addEventListener('change',function(){
document.body.className='theme'+this.value;
});

function openStory(title,text){
document.getElementById('title').innerText=title;
document.getElementById('content').innerText=text;
document.getElementById('popup').classList.remove('hidden');
}

function closeStory(){
document.getElementById('popup').classList.add('hidden');
}