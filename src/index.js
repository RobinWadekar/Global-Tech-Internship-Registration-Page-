import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));

// document.addEventListener('DOMContentLoaded', function () {
//     // Get the current page URL
//     var currentPage = window.location.pathname;

//     // Remove 'active' class from all nav links
//     document.querySelectorAll('.nav-link').forEach(function (link) {
//         link.classList.remove('active');
//     });

//     // Set 'active' class for the current page link
//     if (currentPage === '/') {
//         document.getElementById('home-link').classList.add('active');
//     } else if (currentPage === '/about') {
//         document.getElementById('about-link').classList.add('active');
//     } else if (currentPage === '/contact') {
//         document.getElementById('contact-link').classList.add('active');
//     }
// });

// const { window } = new JSDOM();
// globalThis.window = window;
// globalThis.document = window.document;

// $(".nav-item").click(function(){
//     let currentNavId = this.id;
//     $(".nav-item").removeAttribute("aria-current='page'");
//     $(`${currentNavId}`).addAttribute("aria-current='page'");
// });

// $(".nav-item").click(function () {
//     $(".nav-item").removeClass("active");
//     let currentClick = this.id;
//     $(this).addClass("active");
// });


app.use(express.static(__dirname+"/../public/"));

app.get("/", (req, res)=>{
    res.render(__dirname+"/../public/Registration.ejs");
});

app.post("/submit", (req, res)=>{
    // alert("Do you Want to Submit the Form?");
    res.render(__dirname+"/../public/Submit.ejs");
    
    setTimeout(function (){
        res.redirect("/");
    }, 5);
});

app.get("/about", (req, res) => {
    res.render(__dirname+"/../public/About.ejs");
});

app.get("/contact", (req, res) => {
    res.render(__dirname+"/../public/Contact.ejs");
});

app.listen(port, () => {
    // console.log(__dirname);
    console.log(`Server running on http://localhost:${port}`);
});
