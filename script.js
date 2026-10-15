const getSumBtn = document.createElement("button");
getSumBtn.id = "getSumBtn";
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(function(price) {
        total += Number(price.textContent);
    });

    let oldRow = document.getElementById("total-row");

    if (oldRow) {
        oldRow.remove();
    }

    let row = document.createElement("tr");
    row.id = "total-row";

    let cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = total;

    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

getSum();

getSumBtn.addEventListener("click", getSum);

