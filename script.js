function openStory(title,text){
document.getElementById('storyTitle').textContent=title;
document.getElementById('storyText').textContent=text;
document.getElementById('popup').classList.remove('hidden');
}

function closeStory(){
document.getElementById('popup').classList.add('hidden');
}
