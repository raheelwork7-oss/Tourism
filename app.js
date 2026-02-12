document.addEventListener("DOMContentLoaded", () => {
    const panel = document.getElementById("sidePanel");
    const closeBtn = document.querySelector(".close-btn");
    const saveBtn = document.getElementById("saveData");

    // 1. Page load hone ke 2 second baad panel dikhao
    setTimeout(() => {
        panel.classList.add("active");
    }, 2000);

    // 2. Close button click handle
    closeBtn.addEventListener("click", () => {
        panel.classList.remove("active");
    });

    // 3. Data save to console
    saveBtn.addEventListener("click", () => {
        const name = document.getElementById("uName").value;
        const email = document.getElementById("uEmail").value;

        if (name && email) {
            console.log("%c--- User Lead Captured ---", "color: #645bff; font-weight: bold;");
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Time: " + new Date().toLocaleString());
            
            // Success message and close
            alert("Thanks " + name + "! We will contact you soon.");
            panel.classList.remove("active");
        } else {
            alert("Please fill all details!");
        }
    });
});



function toggleDetails(element) {
    // Adding a subtle click feedback animation
    element.style.transform = "scale(0.96)";
    
    setTimeout(() => {
        element.style.transform = "translateY(-15px)"; // Resets to hover state
        
        const serviceName = element.querySelector('h3').innerText;
        
        // Professional English Alert
        alert("Thank you for your interest in our " + serviceName + "!\n\nOur travel expert will contact you shortly with the best available packages and exclusive deals.");
        
    }, 200);

    // Analytics logging (helpful for developers)
    console.log("User lead generated for: " + element.querySelector('h3').innerText);
}


function handleServiceClick(element) {
    // Visual feedback for clicking
    element.style.transform = "scale(0.97)";
    
    setTimeout(() => {
        // Smoothly returns to original hover state
        element.style.transform = "translateY(-20px)";
        
        const serviceTitle = element.querySelector('h3').innerText;
        
        // Professional English interaction
        alert("Inquiry Sent Successfully!\n\nYou have expressed interest in: " + serviceTitle + "\n\nOur travel consultant will review your request and get back to you with personalized offers within 24 hours.");
        
    }, 200);

    // Logs the event for tracking purposes
    console.info("Travel inquiry started for: " + element.querySelector('h3').innerText);
}















document.getElementById('contactV2Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitBtn = this.querySelector('.contact-v2-submit-btn');
    const btnText = submitBtn.querySelector('span');
    
    // Simple UI feedback
    btnText.innerText = "Processing...";
    submitBtn.style.opacity = "0.7";

    setTimeout(() => {
        alert("Success! Your travel inquiry has been sent.\nOur team will reach out to you shortly.");
        
        // Reset form
        this.reset();
        btnText.innerText = "Send Message";
        submitBtn.style.opacity = "1";
    }, 1500);
});








document.getElementById('footerNewsletter').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Smooth Feedback
    const btn = this.querySelector('button');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.style.backgroundColor = '#28a745'; // Green success
    
    setTimeout(() => {
        alert("Awesome! " + email + " has been subscribed to our travel deals.");
        this.reset();
        btn.innerHTML = '<i class="fas fa-paper-plane"></i>';
        btn.style.backgroundColor = 'rgb(57, 57, 248)';
    }, 1000);
});






function switchTab(element) {
    // Remove active class from all tabs
    document.querySelectorAll('.booking-v5-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    // Add active class to clicked tab
    element.classList.add('active');
    
    // Update button text based on selection
    const btn = document.querySelector('.booking-v5-btn');
    btn.innerHTML = `Search ${element.innerText}s <i class="fas fa-search"></i>`;
}

document.getElementById('bookingFormV5').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.booking-v5-btn');
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Finding Best Rates...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        alert("Searching for the best available tickets. Please wait a moment...");
        btn.innerHTML = 'Search Again <i class="fas fa-redo"></i>';
        btn.style.opacity = '1';
    }, 1500);
});