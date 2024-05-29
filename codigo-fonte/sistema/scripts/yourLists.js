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
          tdQuantity.classList.add("tdQuantity");
          tr.appendChild(tdQuantity);

          const tdContainer = document.createElement("div");
          tdQuantity.appendChild(tdContainer);

          const decreaseQuantity = document.createElement("button");
          tdContainer.appendChild(decreaseQuantity);
          decreaseQuantity.classList.add("button--quantity");
          decreaseQuantity.innerText = `➖`;

          const tdQuantityValue = document.createElement("span");
          tdContainer.appendChild(tdQuantityValue);
          tdQuantityValue.innerText = `${item.quantity}`;

          const increaseQuantity = document.createElement("button");
          tdContainer.appendChild(increaseQuantity);
          increaseQuantity.classList.add("button--quantity");
          increaseQuantity.innerText = `➕`;

          const deleteItem = document.createElement("img");
          tdQuantity.appendChild(deleteItem);
          deleteItem.classList.add("button--delete--item--invisible");
          deleteItem.src = `./assets/lixeira.png`;

          decreaseQuantity.addEventListener("click", () => {
            let copyAllLists = allLists;
            let quantity =
              copyAllLists.lists[indexElem].items[indexItem].quantity;

            if (quantity >= 1) {
              copyAllLists.lists[indexElem].items[indexItem].quantity =
                --quantity;
            }

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });

          increaseQuantity.addEventListener("click", () => {
            let copyAllLists = allLists;
            let quantity =
              copyAllLists.lists[indexElem].items[indexItem].quantity;

            copyAllLists.lists[indexElem].items[indexItem].quantity =
              ++quantity;

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });

          deleteItem.addEventListener("click", () => {
            let copyAllLists = allLists;

            copyAllLists.lists[indexElem].items.splice(indexItem, 1);

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });

          tr.addEventListener("mouseover", () => {
            deleteItem.classList.remove("button--delete--item--invisible");
            deleteItem.classList.add("button--delete--item");
          });

          tr.addEventListener("mouseout", () => {
            deleteItem.classList.remove("button--delete--item");
            deleteItem.classList.add("button--delete--item--invisible");
          });
        });

        const containerFooterList = document.createElement("div");
        secondContainer.appendChild(containerFooterList);
        containerFooterList.classList.add("containerFooterList");

        const containerAddNewItem = document.createElement("div");
        containerFooterList.appendChild(containerAddNewItem);
        containerAddNewItem.classList.add("containerAddNewItem");

        const increaseItem = document.createElement("button");
        containerAddNewItem.appendChild(increaseItem);
        increaseItem.classList.add("button--item");
        increaseItem.style = "padding: 0px";
        increaseItem.innerText = `➕`;

        const containerDeleteList = document.createElement("div");
        containerFooterList.appendChild(containerDeleteList);
        containerDeleteList.classList.add("containerDeleteList");

        const deleteList = document.createElement("img");
        containerDeleteList.appendChild(deleteList);
        deleteList.classList.add("button--delete--list");
        deleteList.src = `./assets/lixeira.png`;

        deleteList.addEventListener("click", () => {
          let copyAllLists = allLists;

          copyAllLists.lists.splice(indexElem, 1);

          window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
          location.reload();
        });

        const buttonSave = document.createElement("button");
        containerAddNewItem.appendChild(buttonSave);
        buttonSave.classList.add("button--save--item");
        buttonSave.classList.add("invisible");
        buttonSave.innerText = `Salvar`;

        increaseItem.addEventListener("click", () => {
          const tr = document.createElement("tr");
          tBody.appendChild(tr);

          const tdChecklist = document.createElement("td");
          tr.appendChild(tdChecklist);

          const imgTdChecklist = document.createElement("img");
          imgTdChecklist.classList.add("vChecklist");
          tdChecklist.appendChild(imgTdChecklist);
          imgTdChecklist.src = "./assets/iconCheckListX.png";

          const tdProduct = document.createElement("td");
          tr.appendChild(tdProduct);

          const inputNewItemProduct = document.createElement("input");
          inputNewItemProduct.classList.add("inputNewItem");
          tdProduct.appendChild(inputNewItemProduct);
          inputNewItemProduct.placeholder = `● Seu item aqui`;

          const tdQuantity = document.createElement("td");
          tr.appendChild(tdQuantity);

          const inputNewItemQuantity = document.createElement("input");
          inputNewItemQuantity.classList.add("inputNewItem");
          tdQuantity.appendChild(inputNewItemQuantity);
          inputNewItemQuantity.placeholder = `-`;

          buttonSave.classList.remove("invisible");
          buttonSave.addEventListener("click", () => {
            let copyAllLists = allLists;

            copyAllLists.lists[indexElem].items.push({
              checked: false,
              name: inputNewItemProduct.value,
              quantity: inputNewItemQuantity.value,
            });

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });
        });

        const cBorder2 = document.createElement("div");
        cBorder2.classList.add("cBorder2");
        secondContainer.appendChild(cBorder2);
      }
    });
  };
  cards();
};
yourLists();
