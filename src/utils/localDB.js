const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
  // console.log(allReadList, "ReadList from Local DB");

  if (allReadList) {
    return JSON.parse(allReadList);
  }
  return [];
};

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};
const getAllWishListFromLocalDB = () => {
  const allWishList = localStorage.getItem("WishList");
  // console.log(allWishList, "WishList from Local DB");

  if (allWishList) {
    return JSON.parse(allWishList);
  }
  return [];
};

const addWishListToLocalDB = (book) => {
  const allBooks = getAllWishListFromLocalDB();
  const isAlWishyExist = allBooks.find((bk) => bk.bookId === book.bookId);

  if (!isAlWishyExist) {
    allBooks.push(book);
    localStorage.setItem("WishList", JSON.stringify(allBooks));
  }
};

export {
  getAllReadListFromLocalDB,
  addReadListToLocalDB,
  getAllWishListFromLocalDB,
  addWishListToLocalDB,
};
