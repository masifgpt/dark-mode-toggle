const themeToggle =
  document.getElementById("themeToggle");

/* Saved Theme */

const savedTheme =
  localStorage.getItem("theme");

if(savedTheme === "dark"){

  document.body.classList.add("dark");

}

/* Toggle Theme */

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  /* Save Theme */

  if(document.body.classList.contains("dark")){

    localStorage.setItem("theme","dark");

  } else {

    localStorage.setItem("theme","light");

  }

});