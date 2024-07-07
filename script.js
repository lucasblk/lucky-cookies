let cookie = document.querySelector(".cookie")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let button = document.querySelector("button")
let luckyphrases = ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.", "A solidão é a sorte de todos os espíritos excepcionais.", "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.", "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.", "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.", "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.", "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca.", "A sorte favorece a mente bem preparada.", "A sorte ajuda os audazes.", "A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afetos.", "Que sorte para os ditadores que os homens não pensem."]

let pText = document.querySelector(".p-text")
let control = Math.round(Math.random() * 10)

cookie.addEventListener('click', openCookie)
button.addEventListener('click', returnCookie)

function openCookie() {
    toggleCookie()
    getPhrase()
}

function returnCookie() {
    toggleCookie()
    control = Math.round(Math.random() * 10)
}

function toggleCookie() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function getPhrase() {
    pText.innerText = luckyphrases[control]
}