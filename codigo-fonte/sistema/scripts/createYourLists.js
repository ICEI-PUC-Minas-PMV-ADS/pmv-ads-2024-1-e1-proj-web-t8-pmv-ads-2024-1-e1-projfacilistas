const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const dataTemplate = [
  {
    id: generateUUID(),
    userId: userLogged.id,
    title: "SUPERMERCADO",
    category: "supermercado",
    items: [
      { name: "Arroz", quantity: 1, checked: true },
      { name: "Feijão", quantity: 2, checked: true },
      { name: "Açúcar", quantity: 1, checked: false },
      { name: "Café", quantity: 2, checked: true },
    ],
  },
];

const createYourLists = () => {
  const generalContainer = document.getElementsByClassName(
    "createYour-lists__container"
  );
  const containerP = document.getElementsByClassName("container__p");
  containerP[1].innerText = "Somos um site inteligente para pessoas ocupadas.";

  const cCard = document.createElement("div");
  cCard.classList.add("card-container");
  generalContainer[0].appendChild(cCard);

  dataTemplate.forEach((elem) => {
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

    const saveButton = document.createElement("button");
    saveButton.classList.add("saveButton");
    secondContainer.appendChild(saveButton);
    saveButton.innerText = "Usar";

    saveButton.addEventListener("click", () => {
      const copyAllLists = allLists;
      const newList = dataTemplate[0];
      copyAllLists.lists.push(newList);

      window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
      location.reload();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
};
createYourLists();
