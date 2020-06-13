const techContainer = document.getElementById("tech-container");



window.onload = function displayTechNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/search.json?q=tech')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currTechPost, techmarkup = ``;
    
    const techPostsArr = res.data.children;
  
    for (let i = 0; i < techPostsArr.length; i++) {
       currTechPost = techPostsArr[i].data;  
       techmarkup += `
             <div class="post-title"> ${currTechPost.title} </div>
             <img class="post-image" src=${currTechPost.thumbnail} onerror="this.onerror=null;this.src='/sol.jpg';">
                 <span><a class="post-link" target="_blank" href=${currTechPost.url}>Link</a></span>
             </div>
          </a>
       `;
    }
    techContainer.insertAdjacentHTML('afterbegin',techmarkup);
  })
  .catch(function(err) {
    console.log(err);   
  
  
  });
}  