function openStory(title,text){
document.getElementById('storyTitle').textContent=title;
document.getElementById('storyText').textContent=text;
document.getElementById('overlay').classList.remove('hidden');
}

function closeStory(){
document.getElementById('overlay').classList.add('hidden');
}
