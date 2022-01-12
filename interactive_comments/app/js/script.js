// To ensure that logic runs only after document is loaded
window.onload = function(){
    const ratings = document.querySelectorAll('.vote');
    const upvote = document.querySelectorAll('.plus');
    const downvote = document.querySelectorAll('.minus');

    for (const [index, rating] of ratings.entries()) {
      upvote[index].addEventListener("click", function(){
        console.log('clicked upvote sign');
        if (upvote[index].classList.contains('clicked')) {
          rating.innerHTML = Number(rating.innerHTML)-1;
          upvote[index].classList.remove('clicked');
        }
        else if (downvote[index].classList.contains('clicked')) {
          rating.innerHTML = Number(rating.innerHTML)+2;
          downvote[index].classList.remove('clicked');
          upvote[index].classList.add('clicked');
        }
        else {
          rating.innerHTML = Number(rating.innerHTML)+1;
          upvote[index].classList.add("clicked");
        }
      });
      downvote[index].addEventListener('click', function() {
        console.log('clicked downvote sign');
        if (downvote[index].classList.contains('clicked')) {
          rating.innerHTML = Number(rating.innerHTML)+1;
          downvote[index].classList.remove('clicked');
        }
        else if (upvote[index].classList.contains('clicked')) {
          rating.innerHTML = Number(rating.innerHTML)-2;
          upvote[index].classList.remove('clicked');
          downvote[index].classList.add('clicked');
        }
        else {
          rating.innerHTML = Number(rating.innerHTML)-1;
          downvote[index].classList.add("clicked");
        }
      });
    }
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
