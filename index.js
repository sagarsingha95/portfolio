const burg_btn = document.getElementById('burg')
const close_btn = document.getElementById('close');
const menu =document.getElementById('menu')
const track1s = document.querySelectorAll('.track1');
const intro =document.getElementById('intro')

function openMenu() {
    burg_btn.style.display = 'none';
    menu.style.display = 'flex';
    close_btn.style.display = 'block';
    // Still needs to be visible for GSAP to animate
    // Animate the menu container
    gsap.to("#intro", {
    marginTop: "300px",
    duration: 0.5,
    ease: "power2.out"
    });
    gsap.from('#menu', {
        x: 1000,
        opacity: 0.1,
        duration: 1,
        ease: "power2.out"
    });

    // Animate each nav item one by one
    gsap.from("#menu ul li", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3
    });

    // Animate the close button
    gsap.from("#close", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 1 // show after menu starts sliding in
    });
    gsap.fromTo("#close", 
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 1 }
);


}

function closeMenu() {
  gsap.to('#menu', {
        x: 1000,
        opacity: 0.1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
            // Hide elements after animation finishes
            menu.style.display = 'none';
            burg_btn.style.display = 'block';
            close_btn.style.display = 'none';

            // Reset transform and opacity for next open
            gsap.set('#menu', { x: 0, opacity: 1 });
        }
    });
    gsap.to('#close',{
        opacity:0,
        ease:'power2.out'
    })
    gsap.to("#intro", {
    marginTop: "50px",
    duration: 0.5,
    ease: "power2.out"
    });
}


    
