/* =====================================
   OASIP LANDING PAGE
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "OASIP Landing Page Loaded"
        );


        /* =================================
           SMOOTH SCROLL
        ================================= */

        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );

        links.forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });


        /* =================================
           PROJECT CARD CLICK EFFECT
        ================================= */

        const cards =
            document.querySelectorAll(
                ".project-card"
            );

        cards.forEach(function (card) {

            card.addEventListener(
                "mousedown",
                function () {

                    card.style.transform =
                        "scale(0.98)";

                }
            );

            card.addEventListener(
                "mouseup",
                function () {

                    card.style.transform = "";

                }
            );

        });


        /* =================================
           SCROLL REVEAL
        ================================= */

        const projectCards =
            document.querySelectorAll(
                ".project-card"
            );

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        projectCards.forEach(
            function (card) {

                observer.observe(card);

            }
        );

    }
);