document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible-header");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
            fetch('footer.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('footer-placeholder').innerHTML = data;
                });
});

window.onload = function() {
    const buttons = document.querySelectorAll('button');
    const sections = document.querySelectorAll('.courses');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all sections and remove active class
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the corresponding section
            const sectionId = button.id.replace('button', 'section');
            document.getElementById(sectionId).classList.add('active');

            // Set the clicked button as active
            button.classList.add('active');
        });
    });

    // Set the first button and section as active by default
    document.getElementById('button1').classList.add('active');
    document.getElementById('section1').classList.add('active');
};