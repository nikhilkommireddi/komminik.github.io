// Show welcome message on load
window.onload = function () {
    alert("🍝 Welcome to Pasta Delight!");
};

// Show alert on Contact button click
function contactAlert() {
    alert("📞 We'll be happy to hear from you! Contact us at info@pastadelight.com");
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide Back to Top button
window.onscroll = function () {
    let btn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
