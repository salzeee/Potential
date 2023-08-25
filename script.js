$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 1800,
    autoHeight: true,
    responsiveClass: true,
    nav: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        400: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1000: {
            items: 4
        }
    }
})



function changeContent(buttonNumber) {
    const contentWrapper = document.querySelector(".portfolio-left");
    contentWrapper.style.opacity = 0; // Fade out content
    setTimeout(() => {
        if (buttonNumber === 1) {
            document.getElementById("category").textContent = "AR";
            document.getElementById("title").textContent = "AR Library";
            document.getElementById("subtitle").textContent = "Mobile App Design";
            document.getElementById("description").textContent = "Avalanche is an open-source platform for building decentralized for AR Library - App Design.";
            document.getElementById("image").src = "assets/portfolio.png";
        } else if (buttonNumber === 2) {
            document.getElementById("category").textContent = "WEB";
            document.getElementById("title").textContent = "Landing Page";
            document.getElementById("subtitle").textContent = "Website Design & Development";
            document.getElementById("description").textContent = "We will provide you full of app design with development to follow the UI/UX process to grow your company success. ";
            document.getElementById("image").src = "assets/portfolio2.png";
        } else if (buttonNumber === 3) {
            document.getElementById("category").textContent = "APP";
            document.getElementById("title").textContent = "Architecture App";
            document.getElementById("subtitle").textContent = "App Design & Development";
            document.getElementById("description").textContent = "We will provide you full of app design with development to follow the UI/UX process to grow your company success. ";
            document.getElementById("image").src = "assets/portfolio3.png";
        }
        contentWrapper.style.opacity = 1; // Fade in content
    }, 300); // Adjust the delay as needed
}
