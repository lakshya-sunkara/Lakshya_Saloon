// This script is for switching images when hovering

const imageContainer = document.querySelector('.image-container');
const imageSlide = document.querySelector('.image-slide');
const buttons=document.querySelectorAll(".image-container button")
console.log(buttons)
const slides=document.querySelectorAll(".image-slide img")
let slideIndex=0;
let intervalId=null;
console.log(slides)


//intialize

// Initialize video interaction
document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById('salonVideo');
    if (videoElement) {
        videoElement.pause(); // Start paused

        videoElement.addEventListener('mouseenter', () => {
            videoElement.play();
        });

        videoElement.addEventListener('mouseleave', () => {
            videoElement.pause();
        });
    } else {
        console.error("Video element not found!");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    initialize();
    setInterval(nextSlide, 2000);
});

function initialize() {
    if (slides.length === 0 || buttons.length === 0) {
        console.error("Slides or buttons are not found! Check HTML.");
        return;
    }

    slides[slideIndex].classList.add("displayImg");
    buttons[slideIndex].classList.add("ButtonStyle");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function resetSlide() {
    slideIndex = 0;
    showSlide(slideIndex);
}

function showImage(index) {
    if (buttons[slideIndex]) {
        buttons[slideIndex].classList.remove("ButtonStyle");
    }
    slideIndex = index;
    showSlide(slideIndex);
}

function showSlide(index) {
    if (slides.length === 0 || buttons.length === 0) return;

    slides.forEach((slide) => slide.classList.remove("displayImg"));

    if (slides[slideIndex]) {
        slides[slideIndex].classList.add("displayImg");
        buttons[slideIndex].classList.add("ButtonStyle");
    }

    let prevIndex = slideIndex === 0 ? buttons.length - 1 : slideIndex - 1;
    if (buttons[prevIndex]) {
        buttons[prevIndex].classList.remove("ButtonStyle");
    }
}

// Signup functionality


/*const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('username').value;

    // Validate inputs
    if (!email || !password || !confirmPassword || !username) {
        alert('Please fill in all fields.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    // Simulate signup process
    console.log('User signed up:', { email, username });
    alert('Signup successful!');
    */



    
    
    







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



const s=document.querySelectorAll(".slides img");
let ind=0;
console.log(s);

document.addEventListener("DOMContentLoaded", initializer);

function initializer(){
    if(s[ind].style.display ==="block"){
        s[ind].style.display = "none";
    }
    else{
        s[ind].style.display = "block";
        
    }
}


function showSlider(i){
    if(i>=s.length){
        ind=0;
    }
    else if(i<0){
        ind=s.length-1;
    }
    s.forEach(slide =>{
        slide.style.display = "none";
    })
    s[ind].style.display="block";
    
    
}
function prevImg(){

    ind--;
    showSlider(ind);

}
function nextImg(){

    ind++;
    showSlider(ind);

}





function updateOptions() {
    var category = document.getElementById("category").value;
    var options = document.getElementById("options");

    // Clear previous options
    options.innerHTML = '<option value="">Select an Option</option>';

    // Define options based on selection
    var data = {
        hair: ["Buzz Cut","Crew Cut","Undercut","Fade ","Pompadour","Quiff","Side Part","French Crop","Textured Crop", "Slick Back"],
        beard: ["Stubble", "Goatee", "Van Dyke Beard","Anchor Beard", "Circle Beard", "Soul Patch","Corporate Beard", "Full Beard", "Mutton Chops"],
        facial: [" Basic ", "Skin Rejuvenation ", "Acne & Oil-Control ","Luxury & Special "],
        child: ["Classic Boy Cut", "Fade Cut", "Bowl Cut","Spiky Hair", "Side Swept Bangs"],
        massage: ["Head & Scalp ","Face & Neck ","Full-Body ","Specialized "]
    };

    if (category in data) {
        data[category].forEach(function(item) {
            var newOption = document.createElement("option");
            newOption.value = item.toLowerCase().replace(/\s+/g, "-");
            newOption.textContent = item;
            options.appendChild(newOption);
        });
    }
}

function updateOptions1(defaultValueFromDB) {
    var category = document.getElementById("update-category").value;
    var options = document.getElementById("update-options");

    // Clear previous options
    options.innerHTML = '<option value="">Select an Option</option>';

    // Define options based on selection
    var data = {
        hair: ["Buzz Cut", "Crew Cut", "Undercut", "Fade ", "Pompadour", "Quiff", "Side Part", "French Crop", "Textured Crop", "Slick Back"],
        beard: ["Stubble", "Goatee", "Van Dyke Beard", "Anchor Beard", "Circle Beard", "Soul Patch", "Corporate Beard", "Full Beard", "Mutton Chops"],
        facial: ["Basic", "Skin Rejuvenation", "Acne & Oil-Control ", "Luxury & Special "],
        child: ["Classic Boy Cut", "Fade Cut", "Bowl Cut", "Spiky Hair", "Side Swept Bangs"],
        massage: ["Head & Scalp ", "Face & Neck ", "Full-Body ", "Specialized"]
    };

    if (category in data) {
        data[category].forEach(function(item) {
            var formattedValue = item.toLowerCase().replace(/\s+/g, "-"); // Format for DB
            var newOption = document.createElement("option");
            newOption.value = formattedValue;
            newOption.textContent = item;

            // ✅ Set the selected option correctly
            if (defaultValueFromDB && formattedValue === defaultValueFromDB.toLowerCase().replace(/\s+/g, "-")) {
                newOption.selected = true;
            }

            options.appendChild(newOption);
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    const element=document.getElementById("appointment-date").setAttribute("min", today);
    if (element) {
        element.setAttribute('min', today);
      }
});


document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById("update-appointment-date").setAttribute("min", today);
});

  
function previewImage(event) {
    let preview = document.getElementById("imagePreview");
    let file = event.target.files[0];
  
    if (file) {
      let reader = new FileReader();
      reader.onload = function() {
        preview.src = reader.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  }
     
  
  document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById("update-appointment-date");
    let timeSlotSelect = document.getElementById("update-time-slot");
    let allOptions = [...timeSlotSelect.querySelectorAll("option")];

    // Set min date to today
    let today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    dateInput.addEventListener("change", function () {
        let selectedDate = new Date(dateInput.value);
        let currentDate = new Date();
        
        // Reset all time slots
        timeSlotSelect.innerHTML = "";
        allOptions.forEach(option => timeSlotSelect.appendChild(option.cloneNode(true)));

        if (selectedDate.toDateString() === currentDate.toDateString()) {
            // Today’s date selected -> Remove past time slots
            let currentHour = currentDate.getHours();

            [...timeSlotSelect.options].forEach(option => {
                let startHour = option.getAttribute("data-start");
                if (startHour && parseInt(startHour) <= currentHour) {
                    option.remove();
                }
            });
        }
    });
});


  document.addEventListener("DOMContentLoaded", function () {
    let dateInput = document.getElementById("appointment-date");
    let timeSlotSelect = document.getElementById("time-slot");
    let allOptions = [...timeSlotSelect.querySelectorAll("option")];

    // Set min date to today
    let today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);

    dateInput.addEventListener("change", function () {
        let selectedDate = new Date(dateInput.value);
        let currentDate = new Date();
        
        // Reset all time slots
        timeSlotSelect.innerHTML = "";
        allOptions.forEach(option => timeSlotSelect.appendChild(option.cloneNode(true)));

        if (selectedDate.toDateString() === currentDate.toDateString()) {
            // Today’s date selected -> Remove past time slots
            let currentHour = currentDate.getHours();

            [...timeSlotSelect.options].forEach(option => {
                let startHour = option.getAttribute("data-start");
                if (startHour && parseInt(startHour) <= currentHour) {
                    option.remove();
                }
            });
        }
    });
});


function formatDate(isoDate) {
    let date = new Date(isoDate); // Convert ISO string to Date object

    let day = date.getDate().toString().padStart(2, '0'); // Get day and ensure 2 digits
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (add 1 as it's zero-based)
    let year = date.getFullYear(); // Get full year

    return `${day}-${month}-${year}`; // Format as DD-MM-YYYY
}




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




document.addEventListener("DOMContentLoaded", fetchAppointments);

async function fetchAppointments() {
    try {
        const tableBody = document.getElementById('appointment-table');
        if (!tableBody) {
            console.error("Error: Element with ID 'appointment-table' not found.");
            return;
        }
        
        const response = await fetch('/appointments');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        tableBody.innerHTML = ""; 

        data.forEach(appointment => {
            const row = document.createElement('tr');

            // Apply color based on status
            let statusColor = 'orange'; // default: Pending
            if (appointment.status === 'Done') statusColor = 'limegreen';
            else if (appointment.status === 'Rejected') statusColor = 'red';

            row.innerHTML = `
                <td>${appointment.category}</td>
                <td>${appointment.style}</td>
                <td>${new Date(appointment.appointment_date).toLocaleDateString()}</td>
                <td>${appointment.time_slot}</td>
                <td style="color: ${statusColor}; font-weight: bold;">
                    ${appointment.status || 'Pending'}
                </td>
                <td>
                    <button style="background-color: blue; color: white;" onclick="updateAppointment('${appointment._id}')">Update</button>
                    <button style="background-color: red; color: white;" onclick="deleteAppointment('${appointment._id}', this)">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching appointments:", error);
    }
}

    async function deleteAppointment(id, button) {
        try {
            const response = await fetch(`/appointment/${id}`, { method: "DELETE" });
            const result = await response.json();

            if (response.ok) {
                button.closest('tr').remove(); // Remove row from table
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    }


    function formatDate1(dateString) {
        if (!dateString) {
            console.error("Date string is missing!"); // Debugging
            return "";
        }
    
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            console.error("Invalid date received:", dateString);
            return "";
        }
    
        return date.toISOString().split("T")[0]; // Returns "YYYY-MM-DD"
    }
    
    // ✅ Set the formatted date value in input field
   // document.getElementById("update-appointment-date").value = formatDate(appointment.appointment_date);
    
   const service_container=document.getElementById("service-container");
        

    async function updateAppointment(id) {
        
            service_container.style.display = "inline-flex";

            try{
                const response = await fetch(`/update/${id}`);
                const appointment = await response.json();

                
                
                service_container.setAttribute("data-appointment-id",id)
                
                document.getElementById("update-category").value = appointment.category;
                updateOptions1(appointment.style);

                // ✅ Select the correct stored style
                document.getElementById("update-options").value = appointment.style.toLowerCase().replace(/\s+/g, "-");
                
                
                document.getElementById("update-appointment-date").value = formatDate1(appointment.appointment_date);


                document.getElementById("update-time-slot").value = appointment.time_slot;
                
                

            }catch(error){
                console.error("Error fetching appointment:", error);

            }
            
        

    };





    document.getElementById("update-save").addEventListener("click", async () => {
        //const serviceContainer = document.getElementById("service-container");
        const appointmentId = service_container.getAttribute("data-appointment-id"); // Get the appointment ID
    
        if (!appointmentId) {
            console.error("No appointment ID found for update.");
            return;
        }
    
        // Collect updated form data
        const updatedData = {
            category: document.getElementById("update-category").value,
            style: document.getElementById("update-options").value,
            appointment_date: document.getElementById("update-appointment-date").value,
            time_slot: document.getElementById("update-time-slot").value,
        };
    
        try {
            const response = await fetch(`/update/${appointmentId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
               
                service_container.style.display = "none"; // Hide the form after updating
                fetchAppointments(); // Refresh the table to show updated data
            } else {
                alert(result.message);
            }
            
            

        } catch (error) {
            console.error("Error updating appointment:", error);
        }

        
    });


    document.getElementById("update-del").addEventListener("click", async () => {
        service_container.style.display = "none";
    });
    


    

   function goToStyle(styleDataEncoded) {
  try {
    const decoded = decodeURIComponent(styleDataEncoded); // decode first
    const styleData = JSON.parse(decoded); // then parse JSON
    console.log("Decoded style:", styleData);

    localStorage.setItem("selectedStyle", JSON.stringify(styleData)); // store full object
    window.location.href = "/style-details";
  } catch (err) {
    console.error("Error parsing style data:", err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const styleName = params.get("name");
    const category = params.get("category");
    const image = params.get("image");

    // Populate category input if it exists
    const categoryInput = document.getElementById("category");
    if (category && categoryInput) {
        categoryInput.value = category;
    }

    // Populate style input if it exists
    const styleInput = document.getElementById("options");
    if (styleName && styleInput) {
        styleInput.value = styleName;
    }

    // Show image
    const imagePreviewDiv = document.getElementById("image-example");
    if (image && imagePreviewDiv) {
        const img = document.createElement("img");
        img.src = decodeURIComponent(image);
        img.style.maxWidth = "300px";
        img.style.borderRadius = "12px";
        img.style.marginTop = "20px";
        imagePreviewDiv.innerHTML = ""; // Clear previous image if any
        imagePreviewDiv.appendChild(img);
    }
});
