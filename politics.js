const politicsContainer = document.getElementById("politics-container");



window.onload = function displayPoliticsNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=politics')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currPoliticsPost, politicsmarkup = ``;
    
    const politicsPostsArr = res.data.children;
  
    for (let i = 0; i < politicsPostsArr.length; i++) {
       currPoliticsPost = politicsPostsArr[i].data;  
       politicsmarkup += `
             <div class="post-title"> ${currPoliticsPost.title} </div>
             <img class="post-image" src=${currPoliticsPost.thumbnail} onerror="this.onerror=null;this.src='/sol.jpg';">
                 <span><a class="post-link" target="_blank" href=${currPoliticsPost.url}>Link</a></span>
             </div>
          </a>
       `;
    }
    politicsContainer.insertAdjacentHTML('afterbegin',politicsmarkup);
  })
  .catch(function(err) {
    console.log(err);   
  
  
  });
}  