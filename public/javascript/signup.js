async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-input-signup").value.trim();
    const password = document.querySelector("#password-input-signup").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); // when signed up redirect to users dashboard
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);