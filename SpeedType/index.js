const API_QUOTE_API_URL = `https://api.quotable.io/random`;
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

let correct = true;
quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];

    if (character === null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });

  if (correct) getNextQuote();
});

function getRandomQuote() {
  return fetch(API_QUOTE_API_URL)
    .then((res) => res.json())
    .then((data) => data.content);
}

async function getNextQuote() {
  const quote = await getRandomQuote();
  console.log(quote);
  // quoteDisplayElement.innerText = quote
  quoteDisplayElement.innerText = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    // characterSpan.classList.add('incorrect')
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });

  quoteInputElement.value = null;
}

getNextQuote();
