let quoteText = document.getElementById('quote')
let authorName = document.getElementById('authorName')
let arr = JSON.parse(localStorage.getItem('author') )|| []

async function quote() {
    const apiUrl = "https://api.quotable.io/random";
    const url = await fetch(apiUrl).then(response => response.json());

    quoteText.innerHTML = `<h4>${url.content}</h4>`;
    authorName.innerHTML = `<h5>${url.author}</h5>`;

    let author = {
        content: url.content,
        author: url.author,
    };
    arr.push({authorDetail: author});
    localStorage.setItem("author", JSON.stringify(arr));
}

function changeQuote() {
    quote();
}

function savequote() {
    location.href = "main.html";



}

