const getSumBtn = document.createElement("button");
getSumBtn.id = "getSumBtn";
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(function(price) {
        total += Number(price.textContent);
    });

    let row = document.createElement("tr");
    let cell = document.createElement("td");

    cell.textContent = total;
    row.appendChild(cell);

    document.querySelector("table").appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

