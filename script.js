document.getElementsByClassName("button")[0].addEventListener("click", function() {
    pegarConselho();
});

async function pegarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const json = await response.json();
    document.getElementsByClassName("adviceNumber")[0].innerHTML = `ADVICE #${json.slip.id}`;
    document.getElementsByClassName("advice")[0].innerHTML = `"${json.slip.advice}"`;
}

pegarConselho();