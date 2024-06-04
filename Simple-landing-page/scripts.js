document.addEventListener('DOMContentLoaded', function () {
    // Check if the popup was already shown in this session
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(function () {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }, 5000);
    }

    // Add event listeners to buttons
    document.querySelector('.close-btn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        sessionStorage.setItem('popupShown', 'true');
    });

    document.querySelector('.enjoy-btn').addEventListener('click', function () {
        alert('Enjoy your offer!');
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        sessionStorage.setItem('popupShown', 'true');
    });
});
