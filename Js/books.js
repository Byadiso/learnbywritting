document.addEventListener("DOMContentLoaded", () => {
  const burger_menu = document.querySelectorAll(".burger_menu");
  const small_nav = document.querySelectorAll(".menu_nav");

  const bookContainer = document.querySelector("#books_item_content");

  // const myRequest = 'https://openlibrary.org/works/OL45804W.json'

  const myRequest = "https://www.dbooks.org/api/subject/history";

  // const myRequest = 'https://www.dbooks.org/api/recent'

  burger_menu.forEach((button) => {
    button.addEventListener("click", (e) => {
      for (var i = 0; i < small_nav.length; i++) {
        small_nav[i].classList.remove("small_device");
        button.classList.add("hide_burger");
      }
    });
  });

  const getBooks = () => {
    fetch(myRequest)
      .then((response) => {
        if (!response.success) {
          const content_elt = document.createElement("DIV");
          content_elt.innerHTML = `                   
            <p  class="book_error">Something went wrong...</p>
            `;

          content_elt.setAttribute("class", "book_item_error");          
          bookContainer.append(content_elt);
          console.log(response);
        }
        response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.books) {
          data.books.forEach((book) => {
            const content_elt = document.createElement("DIV");
            content_elt.innerHTML = `
          <div class="book_image book" data-id=${book.id}>
            <img src=${book.image} alt="blog image blog" data-id=${book.id}>
          </div>
          <h3 class="blog" data-id=${book.id}>${book.title}</h3>          
          <p  data-id=${book.id} class="readme_button blog">Read more...</p>
          `;

            content_elt.setAttribute("class", "book_item");
            content_elt.setAttribute("data-id", book.id);
            bookContainer.append(content_elt);
            console.log("yes");
          });
        }

        console.log(data);
      });
  };

  getBooks();
});
