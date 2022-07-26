let myLibrary = [
  { title: "jj", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
  { title: "tk", author: "lfsd", npages: 123, isRead: "yes" },
];

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

function addBookToLibrary(title, author, npages, isRead) {
  myLibrary.push(new Book(title, author, npages, isRead));
}

function displayBooks() {
  const area = document.querySelector(".catalog");
  myLibrary.forEach(function (curr) {
    // const element = new Book(curr.title, curr.author, curr.npages, curr.isRead);
    const child = document.createElement("div");
    child.innerHTML = `
      <div class="card" >
        <div><h3>${curr.title}</h3></div>
        <div><p>${curr.author}</p></div>
      </div>
    `;
    area.appendChild(child);
  });
}

displayBooks();
