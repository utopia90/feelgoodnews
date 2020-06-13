const container = document.getElementById('container');





window.onload = function displayNews(){
    fetch('https://www.reddit.com/r/UpliftingNews/top.json')
    .then(res => {
    return (res.json());
    
  }).then(function(res) {
    let currPost, markup = ``;
    
    const postsArr = res.data.children;
  
    for (let i = 0; i < postsArr.length; i++) {
       currPost = postsArr[i].data;  
       markup += `
         <div class="card">
            <div class="card-body">
               <img class="card-img card-image" src=${currPost.thumbnail}
               alt="Card image cap" onerror="this.onerror=null;this.src='/sol.jpg';">   
               <h6 class="card-title">${currPost.title}</h6>
               <a href=${currPost.url} target="_blank" class="post-link btn btn-primary">Read More</a>
            </div>
         </div>
       </div>
       `;
    }
    container.insertAdjacentHTML('afterbegin',markup);
 })
 .catch(function(err) {
    console.log(err);   


 });
};


