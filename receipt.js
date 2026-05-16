async function load() {
  const res = await fetch(api.url + "/report");
  const data = await res.json();

  out.innerHTML = `
    <p>Sales: ${data.sales}</p>
    <p>Expenses: ${data.expenses}</p>
    <p>Profit: ${data.profit}</p>
  `;
}