const allListsString = window.localStorage.getItem("lists");
const allLists = JSON.parse(allListsString);

const allUsersString = window.localStorage.getItem("users");
const allUsers = JSON.parse(allUsersString);

const userLoggedString = window.localStorage.getItem("userLogged");
const userLogged = JSON.parse(userLoggedString);

const header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    if (!userLogged || Object.keys(userLogged).length === 0) {
      alert("Você não está logado. Por favor, faça login.");
      window.location.href = "../paginaIncial/index.html";
    }
  });

  const logout = document.getElementsByClassName("btn-header");
  logout[0].addEventListener("click", () => {
    window.localStorage.setItem("userLogged", JSON.stringify({}));
    window.location.href = "../paginaIncial/index.html";
  });
};
header();

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

        const cBorder = document.createElement("div");
        cBorder.classList.add("cBorder");
        firstContainer.appendChild(cBorder);

        const cInfoItems = document.createElement("div");
        cInfoItems.classList.add("cInfoItems");
        firstContainer.appendChild(cInfoItems);

        const cChecklist = document.createElement("div");
        cChecklist.classList.add("cChecklist");
        cInfoItems.appendChild(cChecklist);

        const pChecklist = document.createElement("p");
        pChecklist.classList.add("pChecklist");
        cChecklist.appendChild(pChecklist);

        const cProduct = document.createElement("div");
        cProduct.classList.add("cProduct");
        cInfoItems.appendChild(cProduct);

        const pProduct = document.createElement("p");
        pProduct.classList.add("pProduct");
        cProduct.appendChild(pProduct);

        const cQuantity = document.createElement("div");
        cQuantity.classList.add("cQuantity");
        cInfoItems.appendChild(cQuantity);

        const pQuantity = document.createElement("p");
        pQuantity.classList.add("pQuantity");
        cQuantity.appendChild(pQuantity);

        elem.items.forEach((item, indexItem) => {
          const vChecklist = document.createElement("img");
          vChecklist.classList.add("vChecklist");
          cChecklist.appendChild(vChecklist);

          vChecklist.addEventListener("click", () => {
            const copyAllLists = allLists;
            const checked =
              copyAllLists.lists[indexElem].items[indexItem].checked;

            copyAllLists.lists[indexElem].items[indexItem].checked = !checked;

            window.localStorage.setItem("lists", JSON.stringify(copyAllLists));
            location.reload();
          });

          const vProduct = document.createElement("div");
          vProduct.classList.add("vProduct");
          cProduct.appendChild(vProduct);

          const vQuantity = document.createElement("div");
          vQuantity.classList.add("vQuantity");
          cQuantity.appendChild(vQuantity);

          item.checked
            ? (vChecklist.src = "./assets/iconCheckListV.png")
            : (vChecklist.src = "./assets/iconCheckListX.png");
          // vChecklist.innerText = `${item.checked}`;
          vProduct.innerText = `● ${item.name}`;
          vQuantity.innerText = `${item.quantity}`;
        });

        const cBorder2 = document.createElement("div");
        cBorder2.classList.add("cBorder2");
        secondContainer.appendChild(cBorder2);

        pChecklist.innerText = "Checklist";
        pProduct.innerText = "Produto";
        pQuantity.innerText = "Quantidade";
        title.innerText = elem.title;
      }
    });
  };

  cards();
};
yourLists();

const createYourLists = () => {
  const generalContainer = document.getElementsByClassName(
    "createYour-lists__container"
  );
  const containerP = document.getElementsByClassName("container__p");
  containerP[1].innerText = "Somos um site inteligente para pessoas ocupadas.";
};
createYourLists();
