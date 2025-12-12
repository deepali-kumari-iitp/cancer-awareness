async function loadQuote() {
  try {
    let res = await fetch("https://dummyjson.com/quotes/random");
    let data = await res.json();
    document.getElementById("quoteText").innerText = `"${data.quote}" — ${data.author}`;
  } catch {
    document.getElementById("quoteText").innerText = "Unable to load quote.";
  }
}

loadQuote();
