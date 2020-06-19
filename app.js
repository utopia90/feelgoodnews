const container = document.getElementById('container');
const latestNewsContainer = document.getElementById("latest-news-container");
const quoteContainer = document.getElementById("quote");
const searchBtn = document.getElementsByClassName("search-btn");
const searchInput = document.getElementsByClassName("search-bar");


window.onload = function(){
  displayLatestNews();
  displayNews();
  displayQuote();
}

 function displayNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/top.json')
    .then(res => {
    return (res.json());
    
  }).then(function(res) {
    let currPost, markup = ``;
    
    const postsArr = res.data.children;
  
    for (let i = 0; i < postsArr.length; i++) {
       currPost = postsArr[i].data; 
       let currPostTitle = currPost.title;
       if (currPostTitle.length > 111) {
         currPostTitle = currPostTitle.substring(0, 110) + '&hellip;';
       }
       markup += `
       <div class="card w-55">
  <div class="card-body">
  <img class="card-img card-image" src=${currPost.thumbnail} alt="Card image cap" onerror="this.onerror=null;this.src='/sol.jpg';">   
  <a href=${currPost.url} target="_blank" class="post-link btn btn-primary">Read More</a>
  <h6 class="card-title">${currPostTitle}</h6>
  </div><br>
</div>
       `;
    }
    container.insertAdjacentHTML('afterbegin',markup);
 })
 .catch(function(err) {
    console.log(err);   


 });
}
function displayLatestNews(){ 

fetch("https://www.reddit.com/r/Positive_News/new.json")
  .then(res => {
    return (res.json());
    
  }).then(function(res) {
    let currlatestPost, latestmarkup = ``;

    const latestpostsArr = res.data.children;
  
    for (let i = 0; i < latestpostsArr.length -15; i++) {
       currlatestPost = latestpostsArr[i].data;  
       latestmarkup += `
  <a class="latest-news-link" target="_blank" href='${currlatestPost.url}'<p class="latest-news-text">${currlatestPost.title}</p><hr class="latest-news-hr"></a>
       `;
    }
    latestNewsContainer.insertAdjacentHTML('afterbegin',latestmarkup);
 })
 .catch(function(err) {
    console.log(err);   


 });

}

function displayQuote(){
  fetch("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
		"x-rapidapi-key": "a0f62248edmsha80f5f690d48e62p1ac60djsnc0f5ecf310ba"
	}
}).then(res => res.json())
  .then(res => {
    quoteContainer.innerHTML=`<p class="quote-text"><i>${res.text}</i>"<b><br>&nbsp;&nbsp;${res.author}</b></p></span>`
  }).catch(err => {
  console.log(err);
  });}

$(document).ready(function(){
  $(searchBtn).click(function(){
    window.location.replace("https://google.com/")
})});


