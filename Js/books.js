document.addEventListener("DOMContentLoaded", () => {
  const burger_menu = document.querySelectorAll(".burger_menu");
  const small_nav = document.querySelectorAll(".menu_nav");

  // const myRequest = 'https://openlibrary.org/works/OL45804W.json'

  const myRequest = 'https://www.dbooks.org/api/recent'

  burger_menu.forEach((button) => {
    button.addEventListener("click", (e) => {
      for (var i = 0; i < small_nav.length; i++) {
        small_nav[i].classList.remove("small_device");
        button.classList.add("hide_burger");
      }
    });
  });

 const getBooks= ()=>{
  fetch(myRequest)
  .then((response) => response.json())  
  .then((data) => {
   console.log(data)
  });
 }

 getBooks()

  
});
