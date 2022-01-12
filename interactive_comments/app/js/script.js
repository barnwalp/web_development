// To ensure that logic runs only after document is loaded
window.onload = function(){
    const rating = document.querySelector('.test .vote');
    const upvote = document.querySelector('.test .plus');
    const downvote = document.querySelector('.test .minus');

    upvote.addEventListener("click", function(){
        console.log('clicked upvote sign');
        if (upvote.classList.contains('clicked')) {
          rating.innerHTML = Number(rating.innerHTML)-1;
        }
        else {
          rating.innerHTML = Number(rating.innerHTML)+1;

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
    });
}
