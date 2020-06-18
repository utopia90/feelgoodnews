const techContainer = document.getElementById("tech-container");
const latestNewsContainer = document.getElementById("latest-news-container");
const quoteContainer = document.getElementById("quote");


window.onload = function(){
  displayLatestNews();
  displayTechNews();
  displayQuote();
}
function displayTechNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=tech')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currTechPost, techmarkup = ``;
    
    const techPostsArr = res.data.children;
  
    for (let i = 0; i < techPostsArr.length; i++) {
       currTechPost = techPostsArr[i].data;  
       techmarkup += `
       <div class="card w-55">
       <div class="card-body">
          <img class="card-img card-image" src=${currTechPost.thumbnail}
          alt="Card image cap" onerror="this.onerror=null;this.src='/sol.jpg';">
          <a href=${currTechPost.url} target="_blank" class="post-link btn btn-primary">Read More</a>   
          <h6 class="card-title">${currTechPost.title}</h6>
       </div>
    </div>
  </div>
       `;
    }
    techContainer.insertAdjacentHTML('afterbegin',techmarkup);
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
    
      for (let i = 0; i < latestpostsArr.length; i++) {
         currlatestPost = latestpostsArr[i].data;  
         latestmarkup += `
    <a class="latest-news-link" target="_blank" href='${currlatestPost.url}'<p class="latest-news-text">${currlatestPost.title}</p></a>
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