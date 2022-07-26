let myLibrary = [];

function Book(title, author, npages, isRead) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.isRead = isRead;
  this.info = function () {
    if (isRead == "yes") {
      isRead = "read before.";
    } else {
      isRead = "not read yet.";
    }
    return (
      "The " + title + " by " + author + ", " + npages + " pages, " + isRead
    );
  };
}
const area = document.querySelector(".catalog");

function addBookToLibrary() {
  const Ititle = document.getElementById("title").value;
  const Iauthor = document.getElementById("author").value;
  const Ipages = document.getElementById("npages").value;
  myLibrary.push(new Book(Ititle, Iauthor, Ipages, "no"));
  area.replaceChildren();
  displayBooks();
  document.getElementById("bookForm").reset();
}

function displayBooks() {
  myLibrary.forEach(function (curr) {
    // const element = new Book(curr.title, curr.author, curr.npages, curr.isRead);
    const child = document.createElement("div");
    child.innerHTML = `
      <div class="card" >
        <div><h3>${curr.title}</h3></div>
        <div><p>${curr.npages}</p></div>
        <div><p>${curr.author}</p></div>
        </div>
        <div class="actions">
          <div><button class="read" onClick = "handleRead()">Read</button></div>
          <div><button class="remove" onClick = "removeBook()">Remove</button></div>
        </div>
    `;
    area.appendChild(child);
  });
  const readList = document.querySelectorAll(".read");
  readList.forEach(function (curr) {
    curr.addEventListener("click", function (e) {
      if (e.target.style.backgroundColor == "red") {
        e.target.style.backgroundColor = "green";
      } else {
        e.target.style.backgroundColor = "red";
      }
    });
  });

  const divList = document.querySelectorAll(".remove");
  divList.forEach(function (curr) {
    curr.addEventListener("click", function (e) {
      myLibrary.remove(e.target);
    });
  });
}

displayBooks();

function removeBook() {
  myLibrary.pop();
  area.replaceChildren();
  displayBooks();
}

function handleRead() {}
