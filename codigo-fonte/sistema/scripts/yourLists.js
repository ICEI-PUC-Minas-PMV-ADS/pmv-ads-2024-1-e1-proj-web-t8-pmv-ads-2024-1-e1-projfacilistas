const allListsString = window.localStorage.getItem("lists");
const allLists = JSON.parse(allListsString);

const allUsersString = window.localStorage.getItem("users");
const allUsers = JSON.parse(allUsersString);

const userLoggedString = window.localStorage.getItem("userLogged");
const userLogged = JSON.parse(userLoggedString);

const yourLists = () => {
  const generalContainer = document.getElementsByClassName(
    "your-lists__container"
  );
  const containerP = document.getElementsByClassName("container__p");
  containerP[0].innerText = `Olá ${userLogged.name}, visualize suas listas abaixo`;

  const cCard = document.createElement("div");
  cCard.classList.add("card-container");
  generalContainer[0].appendChild(cCard);

  const cards = () => {
    allLists.lists.forEach((elem, indexElem) => {
      if (elem.userId == userLogged.id) {
        const card = document.createElement("div");
        card.classList.add("card");
        cCard.appendChild(card);

        const firstContainer = document.createElement("div");
        firstContainer.classList.add("first-container");
        card.appendChild(firstContainer);

        const secondContainer = document.createElement("div");
        secondContainer.classList.add("second-container");
        card.appendChild(secondContainer);

        const containerTitle = document.createElement("div");
        containerTitle.classList.add("container-title");
        firstContainer.appendChild(containerTitle);

        const title = document.createElement("p");
        title.classList.add("title");
        containerTitle.appendChild(title);
        title.innerText = elem.title;

        const cBorder = document.createElement("div");
        cBorder.classList.add("cBorder");
        firstContainer.appendChild(cBorder);

        const cInfoItems = document.createElement("div");
        cInfoItems.classList.add("cInfoItems");
        firstContainer.appendChild(cInfoItems);

        const table = document.createElement("table");
        cInfoItems.appendChild(table);

        const thead = document.createElement("thead");
        table.appendChild(thead);

        const tr = document.createElement("tr");
        thead.appendChild(tr);

        const thChecklist = document.createElement("th");
        tr.appendChild(thChecklist);
        thChecklist.innerText = "CHECKLIST";

        const thProduct = document.createElement("th");
        tr.appendChild(thProduct);
        thProduct.innerText = "PRODUTO";

        const thQuantity = document.createElement("th");
        tr.appendChild(thQuantity);
        thQuantity.innerText = "QUANTIDADE";

        const tBody = document.createElement("tbody");
        table.appendChild(tBody);

        elem.items.forEach((item, indexItem) => {
          const tr = document.createElement("tr");
          tBody.appendChild(tr);

          const tdChecklist = document.createElement("td");
          tr.appendChild(tdChecklist);

          const imgTdChecklist = document.createElement("img");
          imgTdChecklist.classList.add("vChecklist");
          tdChecklist.appendChild(imgTdChecklist);

          item.checked
            ? (imgTdChecklist.src = "./assets/iconCheckListV.png")
            : (imgTdChecklist.src = "./assets/iconCheckListX.png");
          imgTdChecklist.innerText = `${item.checked}`;

          tdChecklist.addEventListener("click", () => {
            const copyAllLists = allLists;
            const checked =
              copyAllLists.lists[indexElem].items[indexItem].checked;

            copyAllLists.lists[indexElem].items[indexItem].checked = !checked;

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });

          const tdProduct = document.createElement("td");
          tr.appendChild(tdProduct);
          tdProduct.innerText = `● ${item.name}`;

          const tdQuantity = document.createElement("td");
          tr.appendChild(tdQuantity);
          tdQuantity.innerText = `${item.quantity}`;
        });

        const cBorder2 = document.createElement("div");
        cBorder2.classList.add("cBorder2");
        secondContainer.appendChild(cBorder2);
      }
    });
  };
  cards();

  // createYourLists();
  // templateSupermarket();
};
yourLists();
