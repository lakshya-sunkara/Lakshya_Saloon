document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("appointment-date");
    const timeSlotSelect = document.getElementById("time-slot");
    const allOptions = [...timeSlotSelect.querySelectorAll("option[data-start]")];

    const todayStr = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", todayStr);

    dateInput.addEventListener("change", function () {
      const selectedDate = new Date(dateInput.value);
      const currentDate = new Date();

      timeSlotSelect.innerHTML = '<option value="">Select a Time</option>';

      allOptions.forEach(option => {
        const slotHour = parseInt(option.getAttribute("data-start"));

        if (selectedDate.toDateString() === currentDate.toDateString()) {
          // Today selected - only show future hours
          if (slotHour > currentDate.getHours()) {
            timeSlotSelect.appendChild(option.cloneNode(true));
          }
        } else {
          // Future date - show all
          timeSlotSelect.appendChild(option.cloneNode(true));
        }
      });
    });
  });



   function toggleSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        var searchBox = document.getElementById("option-icon");
        
    
        if (window.getComputedStyle(searchBox).display === "none") {
            searchBox.style.display = "inline-block";
        } else {
            searchBox.style.display = "none";
        }
       
    }


    document.addEventListener("click", function (event) {
        var searchBox = document.getElementById("option-icon");
        var searchIcon = document.getElementById("profileIcon");
    
        if (!searchBox.contains(event.target) && event.target !== searchIcon) {
            searchBox.style.display = "none";
        }
    });

    function toggleSearch1(event) {
        event.preventDefault();
        event.stopPropagation();
        var searchBox1 = document.getElementById("profile-container");
        
    
        if (window.getComputedStyle(searchBox1).display === "none") {
            searchBox1.style.display = "inline-block";
        } else {
            searchBox1.style.display = "none";
        }
    }
    document.addEventListener("click", function (event) {
        var searchBox = document.getElementById("profile-container");
        var searchIcon = document.getElementById("profileIcon");
    
        if (!searchBox.contains(event.target) && event.target !== searchIcon) {
            searchBox.style.display = "none";
        }
    });


document.addEventListener("DOMContentLoaded", profileDetails);

 async function profileDetails() {
    
    try {
        const response = await fetch("http://localhost:1981/user/profile", {
            credentials: "include", // Important to send session cookies
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("username").textContent = data.username;
            document.getElementById("email").textContent = data.email;
            document.getElementById("name").textContent = data.name;
            document.getElementById("address").textContent = data.address || "NA";
            document.getElementById("gender").textContent = data.gender || "NA";
            document.getElementById("dob").textContent = formatDate(data.dob) || 'NA';
            document.getElementById("phone").textContent = data.phone || "NA";

            // Show profile details
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
