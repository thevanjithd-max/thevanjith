var typed= new Typed(".text", {
    strings:["Generative AI Visual Artist." , "AI Video & Motion Specialist." , "Advanced AI Image & Content Creator."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation Setup
    const targets = document.querySelectorAll(
        '.about-content, .education-list .con, .services-list .con, .technical-bar .bar, .skill-item, .workflow-list .con, .project-list .con, .contact-list'
    );

    // මුලින්ම elements සියල්ල සඟවා JS මඟින් Animate කිරීමට සූදානම් කිරීම
    targets.forEach(target => {
        target.style.opacity = "0";
        target.style.transform = "translateY(50px)";
        target.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // සක්‍රීය වන විට animation එක ලබා දීම
                entry.target.classList.add('reveal-active');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                
                // Technical Progress Bars Fill කිරීම
                if (entry.target.classList.contains('bar')) {
                    const progressLine = entry.target.querySelector('.progress-line span');
                    if (progressLine) {
                        if (progressLine.parentElement.classList.contains('image')) progressLine.style.width = "95%";
                        if (progressLine.parentElement.classList.contains('video')) progressLine.style.width = "90%";
                        if (progressLine.parentElement.classList.contains('prompt')) progressLine.style.width = "95%";
                        if (progressLine.parentElement.classList.contains('ps')) progressLine.style.width = "85%";
                    }
                }

                // Radial Progress Circles Fill කිරීම
                if (entry.target.classList.contains('skill-item')) {
                    const circle = entry.target.querySelector('.progress-circle');
                    const skillName = entry.target.querySelector('.skill-name')?.textContent.toLowerCase();
                    if (circle && skillName) {
                        let percent = "80%"; 
                        if (skillName.includes("creativity")) percent = "90%";
                        if (skillName.includes("communication")) percent = "85%";
                        circle.style.setProperty('--percentage', percent);
                    }
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targets.forEach(target => scrollObserver.observe(target));
});

document.getElementById('submitBtn').addEventListener('click', function() {
    // Textarea එකේ තියන text එක ගන්නවා
    var message = document.getElementById('userMessage').value;
    
    // මැසේජ් එකක් type කරලා තියනවාද කියා බලනවා
    if (message.trim() !== "") {
        // ඔයාගේ WhatsApp අංකය මෙතනට දාන්න (உදා: 94771234567)
        var phoneNumber = "94714900699"; 
        
        // URL එකට ගැළපෙන ලෙස මැසේජ් එක encode කරනවා
        var encodedMessage = encodeURIComponent(message);
        
        // WhatsApp API link එක සාදා ගැනීම
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
        
        // අලුත් tab එකක WhatsApp open කිරීම
        window.open(whatsappUrl, '_blank');
    } else {
        alert("Please enter a message.");
    }
});