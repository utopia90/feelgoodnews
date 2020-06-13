const storiesContainer = document.getElementById("stories-container");



window.onload = function displayStoriesNews(){
    fetch('https://www.reddit.com/r/HumansBeingBros/top/.json')
    .then(res => {
    return (res.json());
  }).then(function(res) {
    let currStoriesPost, storiesmarkup = ``;
    
    const storiesPostsArr = res.data.children;
  
    for (let i = 0; i < storiesPostsArr.length; i++) {
       currStoriesPost = storiesPostsArr[i].data;  
       storiesmarkup += `
             <div class="post-title"> ${currStoriesPost.title} </div>
             <img class="post-image" src=${currStoriesPost.thumbnail} onerror="this.onerror=null;this.src='/sol.jpg';">
                 <span><a class="post-link" target="_blank" href=${currStoriesPost.url}>Link</a></span>
             </div>
          </a>
       `;
    }
    storiesContainer.insertAdjacentHTML('afterbegin',storiesmarkup);
  })
  .catch(function(err) {
    console.log(err);   
  
  
  });
}  