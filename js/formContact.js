/* formcontact.js or included within script.js */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get a reference to the form element
  const contactForm = document.querySelector('form[name="contactform"]');

  // Check if the form exists before adding the event listener
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the default form submission (page reload)
      event.preventDefault();

      // Get the submit button to disable it during submission
      const submitButton = this.querySelector('button[type="submit"]');

      // Simple validation check (since HTML already uses 'required')
      if (!this.checkValidity()) {
        // If the browser reports invalid fields, let it display its native error messages
        // You might add a custom message here if necessary
        return;
      }

      // Disable the button and change text to indicate submission is in progress
      submitButton.disabled = true;
      submitButton.textContent = "SENDING...";

      // 2. Collect form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      console.log("Form data collected:", { name, email, message });

      // 3. Simulate an AJAX submission
      // In a real application, you would use 'fetch' or 'XMLHttpRequest' here
      // to send data to a server endpoint.

      /*
            // --- REAL-WORLD FETCH EXAMPLE (Uncomment and replace with your endpoint) ---
            fetch('/api/contact', {
                method: 'POST',
                body: new URLSearchParams(formData), // Use URLSearchParams for form-urlencoded data
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                handleSuccess(submitButton, contactForm);
            })
            .catch(error => {
                handleError(submitButton, error);
            });
            */

      // --- SIMULATION (For demonstration purposes) ---
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% chance of success

        if (isSuccess) {
          handleSuccess(submitButton, contactForm);
        } else {
          handleError(submitButton, "Simulated network error.");
        }
      }, 1500); // Simulate network latency of 1.5 seconds
    });
  }
});

// Helper function to handle successful submission
function handleSuccess(button, form) {
  // 1. Reset the form fields
  form.reset();

  // 2. Update the button
  button.disabled = true; // Keep it disabled after success
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");
  button.textContent = "MESSAGE SENT! 🎉";

  // 3. Optional: Re-enable after a few seconds or redirect
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-success");
    button.classList.add("btn-primary");
    button.textContent = "SEND IT";
  }, 5000);
}

// Helper function to handle submission errors
function handleError(button, error) {
  console.error("Submission Error:", error);

  // 1. Update the button
  button.disabled = true;
  button.classList.remove("btn-primary");
  button.classList.add("btn-danger");
  button.textContent = "ERROR! TRY AGAIN";

  // 2. Re-enable the button quickly
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-danger");
    button.classList.add("btn-primary");
    button.textContent = "SEND IT";
    alert(
      "There was an issue sending your message. Please try again or contact us directly."
    );
  }, 2000);
} /* formcontact.js or included within script.js */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get a reference to the form element
  const contactForm = document.querySelector('form[name="contactform"]');

  // Check if the form exists before adding the event listener
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent the default form submission (page reload)
      event.preventDefault();

      // Get the submit button to disable it during submission
      const submitButton = this.querySelector('button[type="submit"]');

      // Simple validation check (since HTML already uses 'required')
      if (!this.checkValidity()) {
        // If the browser reports invalid fields, let it display its native error messages
        // You might add a custom message here if necessary
        return;
      }

      // Disable the button and change text to indicate submission is in progress
      submitButton.disabled = true;
      submitButton.textContent = "SENDING...";

      // 2. Collect form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      console.log("Form data collected:", { name, email, message });

      // 3. Simulate an AJAX submission
      // In a real application, you would use 'fetch' or 'XMLHttpRequest' here
      // to send data to a server endpoint.

      /*
            // --- REAL-WORLD FETCH EXAMPLE (Uncomment and replace with your endpoint) ---
            fetch('/api/contact', {
                method: 'POST',
                body: new URLSearchParams(formData), // Use URLSearchParams for form-urlencoded data
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                handleSuccess(submitButton, contactForm);
            })
            .catch(error => {
                handleError(submitButton, error);
            });
            */

      // --- SIMULATION (For demonstration purposes) ---
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% chance of success

        if (isSuccess) {
          handleSuccess(submitButton, contactForm);
        } else {
          handleError(submitButton, "Simulated network error.");
        }
      }, 1500); // Simulate network latency of 1.5 seconds
    });
  }
});

// Helper function to handle successful submission
function handleSuccess(button, form) {
  // 1. Reset the form fields
  form.reset();

  // 2. Update the button
  button.disabled = true; // Keep it disabled after success
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");
  button.textContent = "MESSAGE SENT! 🎉";

  // 3. Optional: Re-enable after a few seconds or redirect
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-success");
    button.classList.add("btn-primary");
    button.textContent = "SEND IT";
  }, 2000);
}

// Helper function to handle submission errors
function handleError(button, error) {
  console.error("Submission Error:", error);

  // 1. Update the button
  button.disabled = true;
  button.classList.remove("btn-primary");
  button.classList.add("btn-danger");
  button.textContent = "ERROR! TRY AGAIN";

  // 2. Re-enable the button quickly
  setTimeout(() => {
    button.disabled = false;
    button.classList.remove("btn-danger");
    button.classList.add("btn-primary");
    button.textContent = "SEND IT";
    alert(
      "There was an issue sending your message. Please try again or contact us directly."
    );
  }, 2000);
}
