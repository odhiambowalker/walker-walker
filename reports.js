
let cart = [];
let total = 0;

barcode.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {

    let res = await fetch(api.url + "/item/" + barcode.value);
    let item = await res.json();

    barcode.value = "";

    if (!item) return;

    cart.push({ ...item, qty: 1 });
    total += item.price;

    render();
  }
});

function render() {
  cartDiv.innerHTML = cart.map(i =>
    `<p>${i.name} x1 = ${i.price}</p>`
  ).join("");

  totalSpan.innerText = total;
}

async function checkout() {
  await fetch(api.url + "/sale", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ items: cart, total })
  });

  alert("Sale completed");

  cart = [];
  total = 0;
  render();
}