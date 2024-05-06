document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        });
    });

</div >

<script src="script.js"></script> <!--Adicionando o script JavaScript-- >
</body >
</html >
