const slider = document.querySelector(".business-slider");

const slides = slider.querySelectorAll(".slide");

const next = slider.querySelector(".next");

const prev = slider.querySelector(".prev");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

next.onclick = ()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

prev.onclick = ()=>{

    current--;

    if(current<0){

        current=slides.length-1;

    }

    showSlide(current);

}

setInterval(()=>{

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

},3000);


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value;

    const whatsappNumber = "919581209506"; // Mee WhatsApp Number

    const text =
`Hello JAI ENTERPRISES,

New Enquiry

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

🛠 Service: ${service}

💬 Message:
${message}`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url,"_blank");

});

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

header.classList.toggle("scrolled",window.scrollY>30);

});

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 30){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>30){

        navbar.style.marginTop="10px";

        navbar.style.background="rgba(255,255,255,.95)";

    }else{

        navbar.style.marginTop="18px";

        navbar.style.background="rgba(255,255,255,.82)";

    }

});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});