# Show More Button Javascript

- on click, you're gonna be able to show everything
  else.

- to make paragraph automatically,
  you can just do 
  
  ```
  lorem[numOfParagraph]
  ```

  e.g:
  ```
  lorem20
  ```

  ### note:
  <br>
  this is gonna give you 20 characters
  long paragraph of lorem ipsum

- first you have to create a span
  in your paragraph that is gonna have
  a style of hidden

  e.g:
  ```
  .more-text {
    display: none;
  }
  ```

- then you're gonna have your button
  if clicked, it's gonna display everything
  e.g:
  ```
  const readMoreBtn = document.querySelector(".read-more");
  const text = document.querySelector(".more-text");

  readMoreBtn.addEventListener("click", () => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerHTML === "Read More") {
      readMoreBtn.innerHTML = "Read Less";
    } else {
      readMoreBtn.innerHTML = "Read More";
    }
  });
  ```
