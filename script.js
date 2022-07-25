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

const b1 = new Book("Harry potter", "Jk Rowlings", 1200, "no");
console.log(b1.info());
