const politicsContainer = document.getElementById("politics-container");
const latestNewsContainer = document.getElementById("latest-news-container");
const quoteContainer = document.getElementById("quote");



window.onload = function(){
  displayLatestNews();
  displayPoliticsNews();
  displayQuote();
}


function displayPoliticsNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=politics')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currPoliticsPost, politicsmarkup = ``;
    
    const politicsPostsArr = res.data.children;
  
    for (let i = 0; i < politicsPostsArr.length; i++) {
       currPoliticsPost = politicsPostsArr[i].data;  
       politicsmarkup += `
       <div class="card w-55">
       <div class="card-body">
          <img class="card-img card-image" src=${currPoliticsPost.thumbnail}
          alt="Card image cap" onerror="this.onerror=null;this.src='/sol.jpg';">  
          <a href=${currPoliticsPost.url} target="_blank" class="post-link btn btn-primary">Read More</a> 
          <h6 class="card-title">${currPoliticsPost.title}</h6>
       </div>
    </div>
  </div>
       `;
    }
    politicsContainer.insertAdjacentHTML('afterbegin',politicsmarkup);
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