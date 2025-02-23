// index

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('history-html-js').addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = 'history.html';
    });

    document.getElementById('blog-html-js').addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = 'blog.html';
    });
});


// after going to history page

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('home-html-js').addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = 'index.html';
    });
});

// after going to blog page

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('index-home-js').addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = 'index.html';
    });
});