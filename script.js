/* =========================================
   NEXORIZON WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

});


/* Close mobile menu when clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-open");

    });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".course-card, .benefit, .about-content, .about-image, .section-heading, .cta, .contact-grid"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   COURSE CARD STAGGER ANIMATION
========================================= */

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 80}ms`;

});


/* =========================================
   BENEFIT CARD STAGGER ANIMATION
========================================= */

const benefits = document.querySelectorAll(".benefit");

benefits.forEach((benefit, index) => {

    benefit.style.transitionDelay = `${index * 100}ms`;

});


/* =========================================
   MOUSE MOVEMENT HERO EFFECT
========================================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual) {

    heroVisual.addEventListener("mousemove", (event) => {

        const rect = heroVisual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;


        const codeCard =
            document.querySelector(".code-card");

        const circles =
            document.querySelectorAll(".tech-circle");


        codeCard.style.transform =
            `translate(${x * 15}px, ${y * 15}px)`;


        circles.forEach((circle, index) => {

            const amount =
                index === 0 ? 8 : -8;

            circle.style.transform =
                `translate(${x * amount}px, ${y * amount}px)`;

        });

    });


    heroVisual.addEventListener("mouseleave", () => {

        const codeCard =
            document.querySelector(".code-card");

        const circles =
            document.querySelectorAll(".tech-circle");


        codeCard.style.transform = "";


        circles.forEach(circle => {

            circle.style.transform = "";

        });

    });

}


/* =========================================
   DAILY UPDATE - LIVE DATE
========================================= */

const liveDate = document.getElementById("live-date");

function updateLiveDate() {

    if (!liveDate) return;

    const now = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    liveDate.textContent = now
        .toLocaleDateString("en-GB", options)
        .toUpperCase();
}


/* Update date immediately */

updateLiveDate();


/* Check for date change every minute */

setInterval(updateLiveDate, 60000);

/* =========================================
   BUTTON CLICK EFFECT
========================================= */

const buttons =
    document.querySelectorAll(".primary-button, .secondary-button, .nav-button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "🚀 Welcome to Nexorizon Institute of Technology!"
);