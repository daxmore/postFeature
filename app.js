let like = document.querySelector(".heart");
let post = document.querySelector("#post");
let bookmark = document.querySelector("#bookmark");
let heartIcon = document.querySelector(".heartIcon");
let heart = 0;
let mark = 0;

like.addEventListener("click", (e) => {
    if (heart == 0) {
        like.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="color: #d2042d;"></i>`
        heart = 1;

        setTimeout(() => {
            heartIcon.style.transform = "scale(7)"
        }, 0);

        setTimeout(() => {
            heartIcon.style.transform = "scale(0)"
        }, 2000);

    }
    else {
        like.innerHTML = `<i class="fa-regular fa-heart fa-lg" style="color: #000000;"></i>`
        heart = 0;
    }
})

post.addEventListener("dblclick", (e) => {
    if (heart == 0) {
        like.innerHTML = `<i class="fa-solid fa-heart fa-lg" style="color: #d2042d;"></i>`
        heart = 1;


        setTimeout(() => {
            heartIcon.style.transform = "scale(7)"
        }, 0);

        setTimeout(() => {
            heartIcon.style.transform = "scale(0)"
        }, 2000);
    }
    else {
        like.innerHTML = `<i class="fa-regular fa-heart fa-lg" style="color: #000000;"></i>`
        heart = 0;
    }
})

bookmark.addEventListener("click", () => {
    if (mark == 0) {
        bookmark.innerHTML = `<i class="fa-solid fa-bookmark fa-lg" style="color: #000000;"></i>`
        mark = 1;
    } else {
        bookmark.innerHTML = `<i class="fa-regular fa-bookmark fa-lg" style="color: #000000;"></i>`
        mark = 0;
    }
})