const mostedItens = () => {
  const generalContainer = document.getElementsByClassName("mosted-itens");
  const containerP = document.getElementsByClassName("container__p");
  containerP[2].innerText = `Veja um gráfico com os itens mais colocados em suas listas`;

  const cCard = document.createElement("div");
  cCard.classList.add("card-container");
  generalContainer[0].appendChild(cCard);
};

function getListItems() {
  const listItems = window.localStorage.getItem("lists");
  if (!listItems) {
    return []; // Retorna um array vazio se não houver itens no localStorage
  }

  const objLists = JSON.parse(listItems);
  const onlyLists = objLists.lists || [];

  const itemsMap = {};

  onlyLists.forEach((list) => {
    let itemsInsideList = list.items || [];

    itemsInsideList.forEach((item) => {
      if (itemsMap[item.name]) {
        itemsMap[item.name] += item.quantity;
      } else {
        itemsMap[item.name] = item.quantity;
      }
    });
  });

  const arrItems = Object.keys(itemsMap).map((name) => ({
    name: name,
    quantity: itemsMap[name],
  }));

  return arrItems;
}

function createFrequencyChart(items) {
  // Extrai os itens e suas quantidades
  const labels = items.map((item) => item.name);
  const data = items.map((item) => item.quantity);

  // Configura o gráfico
  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Quantidade",
          data: data,
          backgroundColor: "#fff0d4",
          borderColor: "#f58013",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Renderiza o gráfico usando os dados de getListItems
function renderFrequencyChart() {
  const items = getListItems();
  createFrequencyChart(items);
}

// Chama a função para renderizar o gráfico ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderFrequencyChart();
});
