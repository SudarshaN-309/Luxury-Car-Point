document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            alert('More details coming soon!');
        });
    });
});

