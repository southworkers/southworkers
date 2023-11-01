document.getElementById('electriction_btn').addEventListener('click', function() {
    document.getElementById('electricians').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('asthetic_btn').addEventListener('click', function() {
    document.getElementById('aesthetics').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('driver_btn').addEventListener('click', function() {
    document.getElementById('drivers').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('gardner_btn').addEventListener('click', function() {
    document.getElementById('gardners').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('plumber_btn').addEventListener('click', function() {
    document.getElementById('plumbers').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('assorted_btn').addEventListener('click', function() {
    document.getElementById('assorted').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});

// document.getElementById('scrollToTopButton').addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

var scrollToTopButton = document.getElementById('scrollToTopButton');

// Function to show/hide the button based on scroll position
function toggleScrollButtonVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Add a scroll event listener to trigger the function
window.addEventListener('scroll', toggleScrollButtonVisibility);

// Function to scroll to the top
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
