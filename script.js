/* =====================================================
   FPCOL - JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       NAVBAR AL HACER SCROLL
    ================================================= */

    const navbar = document.querySelector(".navbar");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });



    /* =================================================
       CERRAR MENÚ MOBILE
    ================================================= */

    const links = document.querySelectorAll(".nav-link");

    const menu = document.querySelector("#menu");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu.classList.contains("show")) {

                const bootstrapMenu =
                    bootstrap.Collapse.getInstance(menu);

                if (bootstrapMenu) {

                    bootstrapMenu.hide();

                }

            }

        });

    });



    /* =================================================
       ANIMACIÓN AL APARECER LAS SECCIONES
    ================================================= */

    const sections =
        document.querySelectorAll(".section");


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    sections.forEach(function (section) {

        observer.observe(section);

    });



    /* =================================================
       NAVEGACIÓN ACTIVA
    ================================================= */

    const navLinks =
        document.querySelectorAll(".nav-link");


    const sectionElements =
        document.querySelectorAll("section[id]");


    const navigationObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        navLinks.forEach(function (link) {

                            link.classList.remove("active");

                        });


                        const activeLink =
                            document.querySelector(
                                `.nav-link[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add("active");

                        }

                    }

                });

            },

            {
                threshold: 0.45
            }

        );


    sectionElements.forEach(function (section) {

        navigationObserver.observe(section);

    });



    /* =================================================
       BOTONES CON SCROLL SUAVE
    ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});