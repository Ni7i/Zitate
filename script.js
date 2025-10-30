const quotes = [
  { text: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { text: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over again in my life. And that is why I succeed.", author: "Michael Jordan" },
  { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" }
];

const quotesDiv = document.getElementById("quotes");
const searchInput = document.getElementById("search");

// Funktion zum Anzeigen der Zitate
function displayQuotes(list) {
  quotesDiv.innerHTML = "";
  list.forEach(q => {
    const el = document.createElement("div");
    el.className = "quote";
    el.innerHTML = `<p>${q.text}</p><small>${q.author}</small>`;
    quotesDiv.appendChild(el);
  });
}

// Alle Zitate beim Start anzeigen
displayQuotes(quotes);

// Filter-Funktion bei Eingabe (key-up)
searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = quotes.filter(q =>
    q.text.toLowerCase().includes(term) || q.author.toLowerCase().includes(term)
  );
  displayQuotes(filtered);
});