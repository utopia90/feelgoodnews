const sportsContainer = document.getElementById("sports-container");



window.onload = function displaySportsNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=sports')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currSportPost, sportmarkup = ``;
    
    const sportPostsArr = res.data.children;
  
    for (let i = 0; i < sportPostsArr.length; i++) {
       currSportPost = sportPostsArr[i].data;  
       sportmarkup += `
             <div class="title"> ${currSportPost.title} </div>
             <img class="image" src=${currSportPost.thumbnail} onerror="this.onerror=null;this.src='/sol.jpg';">
                 <span><a target="_blank" href=${currSportPost.url}>Link</a></span>
             </div>
          </a>
       `;
    }
    sportsContainer.insertAdjacentHTML('afterbegin',sportmarkup);
  })
  .catch(function(err) {
    console.log(err);   
  
  
  });
}  