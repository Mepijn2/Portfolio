// Select all collapses
const collapses = document.querySelectorAll('.accordion-collapse');

// Function to toggle a collapse
function toggleCollapse(targetId) {
    const target = document.getElementById(targetId);

    collapses.forEach((collapse) => {
        // Close everything except the target
        if (collapse !== target) collapse.classList.remove('show');
    });

    // Toggle the target itself
    if (target.classList.contains('show')) {
        target.classList.remove('show'); // if already open, close it
    } else {
        target.classList.add('show'); // if closed, open it
    }
}

// Add click listeners to buttons
const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // optional: prevents Bootstrap auto-toggle
        const targetId = btn.getAttribute('data-bs-target').replace('#', '');
        toggleCollapse(targetId);
    });
});