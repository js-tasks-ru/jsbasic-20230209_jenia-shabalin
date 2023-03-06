function makeFriendsList(friends) {
  const newUl = document.createElement("UL");
  for (let elem of friends) {
    newUl.insertAdjacentHTML(
      "beforeEnd",
      `<li>${elem.firstName + elem.lastName} </li>`
    );
  }

  return newUl;
}
