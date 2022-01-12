// To ensure that logic runs only after document is loaded
window.onload = function(){
    const rating = document.querySelector('.test .vote');
    const upvote = document.querySelector('.test .plus');
    const downvote = document.querySelector('.test .minus');

    upvote.addEventListener("click", function(){
      console.log('clicked upvote sign');
      if (upvote.classList.contains('clicked')) {
        rating.innerHTML = Number(rating.innerHTML)-1;
        upvote.classList.remove('clicked');
      }
      else if (downvote.classList.contains('clicked')) {
        rating.innerHTML = Number(rating.innerHTML)+2;
        downvote.classList.remove('clicked');
        upvote.classList.add('clicked');
      }
      else {
        rating.innerHTML = Number(rating.innerHTML)+1;
        upvote.classList.add("clicked");
      }
    });
    downvote.addEventListener('click', function() {
      console.log('clicked downvote sign');
      if (downvote.classList.contains('clicked')) {
        rating.innerHTML = Number(rating.innerHTML)+1;
        downvote.classList.remove('clicked');
      }
      else if (upvote.classList.contains('clicked')) {
        rating.innerHTML = Number(rating.innerHTML)-2;
        upvote.classList.remove('clicked');
        downvote.classList.add('clicked');
      }
      else {
        rating.innerHTML = Number(rating.innerHTML)-1;
        downvote.classList.add("clicked");
      }
    })
        /*
        // remove overlay
        if (header.classList.contains('open')){
            overlay.classList.add('fade-out');
            overlay.classList.remove('fade-in');
            menu.classList.add('fade-out');
            menu.classList.remove('fade-in');
            header.classList.remove('open');
        }
        // open overlay
        else {
            header.classList.add('open');
            overlay.classList.add('fade-in');
            overlay.classList.remove('fade-out');
            menu.classList.add('fade-in');
            menu.classList.remove('fade-out');
        }
        */
}
