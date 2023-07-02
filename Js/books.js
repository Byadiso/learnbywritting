document.addEventListener("DOMContentLoaded", () => {
  const burger_menu = document.querySelectorAll(".burger_menu");
  const small_nav = document.querySelectorAll(".menu_nav");

  const bookContainer = document.querySelector("#books_item_content");
  const relatedContainer = document.querySelector("#related_book_item");

  // const myRequest = 'https://openlibrary.org/works/OL45804W.json'

  // const myRequest = "https://www.dbooks.org/api/subject/history";

  // const myRequest = "https://www.dbooks.org/api/recent";

  const myRequest = "https://shortstories-api.onrender.com/stories";

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
        return response.json();

        // if (!response.success) {
        //   const content_elt = document.createElement("DIV");
        //   content_elt.innerHTML = `
        //     <p  class="book_error">Something went wrong...</p>
        //     `;

        //   content_elt.setAttribute("class", "book_item_error");
        //   bookContainer.append(content_elt);
        //   console.log(response);
        // }
      })
      .then((data) => {
        if (data) {
          data.forEach((story) => {
            const content_elt = document.createElement("DIV");
            content_elt.innerHTML = `          
          
          <h5 class="story" data-id=${story._id}>${story.title}</h5>  
          <p class="story" data-id=${story._id}>${story.story}</p>  
          <p class="story" data-id=${story._id}><strong> ${story.moral}</strong></p>        
          <p class="story" data-id=${story._id}><em>${story.author}</em></p>
      
          `;

            content_elt.setAttribute("class", "book_item");
            content_elt.setAttribute("data-id", story._id);
            bookContainer.append(content_elt);
          });

          // adding related book

          const lastThreeBooks = [
            data[data.length - 2],
            data[data.length - 1],
            data[data.length - 3],
          ];
          console.log(lastThreeBooks);

          lastThreeBooks.forEach((book) => {
            const relatedItem_elt = document.createElement("DIV");
            relatedItem_elt.innerHTML = `<div class="book_related_item_content">
              <div class="book_related_image">
                <img
                src=${book.image} alt="story image story" data-id=${book.id}
                />
              </div>
              <p class="story" data-id=${book.id}>${book.title}</p> 
            </div> `;

            relatedItem_elt.setAttribute("class", "book_item_related");
            relatedItem_elt.setAttribute("data-id", book.id);
            relatedContainer.append(relatedItem_elt);
          });
        }

        console.log(data);
      });
  };

  getBooks();
});
