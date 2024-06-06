const scriptURL =
  "https://script.google.com/macros/s/AKfycbxONNR-UmLOn6Q1qCLNYHPzN_X5WV8yU5ixToxfZCppEZnB0F0w6y2YV_dX9mMmyek/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for subscribing";
      setTimeout(() => {
        msg.innerHTML=""
      }, 5000);
      form.reset()
    })

    .catch((error) => console.error("Error!", error.message));
});
