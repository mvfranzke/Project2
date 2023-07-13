//event listener for login button
function loginUser() {
  document
    .getElementById("loginUser")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const user = {
        username: document.getElementById("1username").value,
        password: document.getElementById("1password").value,
      };

      await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      document.location.replace("/");
    });
}

// Call the function to add the event listener to the button
loginUser();
