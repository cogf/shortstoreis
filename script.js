/* Minecraft font */
inset:0;
background:rgba(0,0,0,.7);
display:flex;
justify-content:center;
align-items:center;
padding:30px;
}

.hidden{
display:none;
}

.reader-box{
width:min(900px,90vw);
background:#fff8e7;
border:8px solid #6d4c21;
padding:50px;
box-shadow:0 20px 50px rgba(0,0,0,.35);
}

.reader-box button{
font-family:Minecraft;
padding:14px 24px;
margin-bottom:35px;
background:#f4e7bf;
border:4px solid #8d6e43;
cursor:pointer;
}

#storyTitle{
font-size:38px;
margin-bottom:35px;
}

#storyText{
font-size:20px;
line-height:2;
white-space:pre-wrap;
}

/* Mobile */
@media(max-width:900px){
.layout{
grid-template-columns:1fr;
}

.sidebar{
padding:40px 30px;
}

.bookshelf{
padding:30px;
gap:55px;
}

.book-card{
padding:40px;
min-height:auto;
}

.book-card h2{
font-size:30px;
}
}
