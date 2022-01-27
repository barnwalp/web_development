let posts = [
  {'title': 'post one', 'body': 'This is first post'},
  {'title': 'post two', 'body': 'This is second post'}
];

let getPost = () => {
  let content = '';
  setTimeout(()=>{
    for(let post of posts){
      content += `<li>${post.title}</li>`;
    }
    console.log(content)
  }, 2000);
};

let createPost = (post)=>{
  setTimeout(()=>{
    posts.push(post);
  }, 1000);
};

getPost(posts);
createPost({'title': 'post three', 'body': 'This is third post'});