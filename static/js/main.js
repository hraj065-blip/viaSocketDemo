document.addEventListener('DOMContentLoaded', () => {
    // Scroll Observer for Sophisticated Fade-ins
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.hasAttribute('data-target')) {
                    runCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up, [data-target]').forEach(el => observer.observe(el));

    // Numerical Proof-Point Animation
    function runCounter(el) {
        const target = +el.dataset.target;
        const speed = 2000 / target;
        let count = 0;
        const update = () => {
            count += Math.ceil(target / 100);
            if (count < target) {
                el.innerText = count.toLocaleString();
                setTimeout(update, 20);
            } else {
                el.innerText = target.toLocaleString() + (el.dataset.suffix || "");
            }
        };
        update();
    }
});