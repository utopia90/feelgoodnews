const scienceContainer = document.getElementById("science-container");



window.onload = function displayScienceNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=science')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currSciencePost, sciencemarkup = ``;
    
    const sciencePostsArr = res.data.children;
  
    for (let i = 0; i < sciencePostsArr.length; i++) {
       currSciencePost = sciencePostsArr[i].data;  
       sciencemarkup += `
             <div class="post-title"> ${currSciencePost.title} </div>
             <img class="post-image" src=${currSciencePost.thumbnail} onerror="this.onerror=null;this.src='/sol.jpg';">
                 <span><a class="post-link" target="_blank" href=${currSciencePost.url}>Link</a></span>
             </div>
          </a>
       `;
    }
    scienceContainer.insertAdjacentHTML('afterbegin',sciencemarkup);
  })
  .catch(function(err) {
    console.log(err);   
  
  
  });
}  