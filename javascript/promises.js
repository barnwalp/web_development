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

// let createPost = (post, callback)=>{
//   setTimeout(()=>{
//     posts.push(post);
//     callback();
//   }, 1000);
// };

// Using promises to achieve the same results
let createPost = (post) => {
  // when createPost is called, this promise will be returned
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      posts.push(post);

      const error = true;
      if(!error) {
        console.log('resolved');
        resolve();
      } else {
        console.log('rejected');
        reject('something went wrong');
      }
    }, 2000);
  });
}

createPost({'title': 'post three', 'body': 'This is third post'})
  .then(getPost)
  .catch((err) => console.log(err));