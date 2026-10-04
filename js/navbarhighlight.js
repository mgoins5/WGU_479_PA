function setActiveNav() {
    const faqLink = document.getElementById("faqLink");
    const aboutLink = document.getElementById("aboutLink");

    if (window.location.toString().includes("#faq")) {
        faqLink.classList.add('active');
        aboutLink.classList.remove('active');
    }
    else {
        faqLink.classList.remove('active');
        aboutLink.classList.add('active');
    }
}

setActiveNav();
window.addEventListener('hashchange', setActiveNav);