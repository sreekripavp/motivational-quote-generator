const quotes = [

  {
    text: "Small steps every day lead to big results.",
    author: "Unknown"
  },

  {
    text: "Your future is created by what you do today.",
    author: "Robert Kiyosaki"
  },

  {
    text: "Discipline beats motivation.",
    author: "Unknown"
  },

  {
    text: "Dream big. Start small. Stay consistent.",
    author: "Unknown"
  },

  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  }

];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * quotes.length);

  quote.innerText = `"${quotes[randomIndex].text}"`;

  author.innerText = `— ${quotes[randomIndex].author}`;

});
