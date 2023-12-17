document.addEventListener('DOMContentLoaded', function () {
    // Your existing JavaScript code here



    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();


        alert('Message sent!');
    });

    document.getElementById('viewChloe').addEventListener('click', function () {
        document.getElementById('imageModal').style.display = 'block';
    });

    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('imageModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('imageModal')) {
            document.getElementById('imageModal').style.display = 'none';
        }
    });


    document.getElementById('viewRodErica').addEventListener('click', function () {
        document.getElementById('imageModal2').style.display = 'block';
    });

    document.getElementById('closeModal2').addEventListener('click', function () {
        document.getElementById('imageModal2').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === document.getElementById('imageModal')) {
            document.getElementById('imageModal').style.display = 'none';
        }
    });

    document.getElementById('downloadResume').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = 'resume.pdf'; //PDF file
        link.download = 'resume.pdf'; //downloaded file


        document.body.appendChild(link);


        link.click();


        document.body.removeChild(link);
    });

});