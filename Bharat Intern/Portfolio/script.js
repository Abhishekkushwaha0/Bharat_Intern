

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

async function submitForm() {
    var form = document.getElementById("contactForm");

    if (form.checkValidity()) {
        try {
            var response = await fetch("", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    "Accept": "application/json",
                },
            });

            if (response.ok) {
                var successMessage = document.getElementById("successMessage");
                successMessage.style.display = "block";

                setTimeout(function () {
                    form.reset();
                    successMessage.style.display = "none";
                }, 2000);
            } else {
                console.error("Form submission failed:", response.statusText);
            }
        } catch (error) {
            console.error("An error occurred during form submission:", error);
        }
    } else {
        if (window.innerWidth <= 600) {
            // Display a small screen-friendly message
            alert("Please fill in all required fields.");
        } else {
            // Display the regular alert for larger screens
            form.reportValidity();
        }
    }
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}
