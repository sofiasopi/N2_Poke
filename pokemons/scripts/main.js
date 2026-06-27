const backSprite = document.getElementById('backSprite')
const startDiv = document.getElementById('comeco')
const grass = document.getElementById('grass')
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const move = document.querySelectorAll('.move')
const moveDiv = document.getElementById('moveList')
const next = document.getElementById('next')
let nome = 'Substitute'
let hpmax = 20
let hp = hpmax
let m2hp = 302
const moveList = []

grass.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/venusaurback.png');
    startDiv.style.display = 'flex';
    fire.style.color = ""; fire.style.backgroundColor = "";
    water.style.color = ""; water.style.backgroundColor = "";
    grass.style.color = "lime"; grass.style.backgroundColor = "green";
    nome = 'Venussauro'; hpmax = 251; hp = hpmax;
    moveList[0] = {name:'Folha Mágica', dmg:70, pp:10, ppmax:10, info:'O oponente é atacado com uma folha estranha que não pode ser desviada.'} //weakAttack
    moveList[1] = {name:'Bola de Energia', dmg:100, pp:5, ppmax:5, info:'O usuário extrai energia da natureza e a dispara contra o oponente.'} //strongAttack
    moveList[2] = {name:'Giga Dreno', dmg:85, pp:5, ppmax:5, info:'Um ataque que drena nutrientes. O HP do usuário é restaurado em metade do dano sofrido pelo alvo.'} //signatureMove
    move.forEach(button => {
        button.style.background = "linear-gradient(#BBFABB, #5FD95F)"
    })
})

fire.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/charizardback.png');
    startDiv.style.display = 'flex';
    fire.style.color = "orange"; fire.style.backgroundColor = "red";
    water.style.color = ""; water.style.backgroundColor = "";
    grass.style.color = ""; grass.style.backgroundColor = "";
    nome = 'Charizard'; hpmax = 237; hp = hpmax;
    moveList[0] = {name:'Sopro do Dragão', dmg:79, pp:10, ppmax:10, info:'O usuário exala uma rajada poderosa que causa dano.'} //weakAttack
    moveList[1] = {name:'Flamethrower', dmg:109, pp:5, ppmax:5, info:'O inimigo é chamuscado por uma rajada intensa de fogo.'} //strongAttack
    moveList[2] = {name:'Air Cutter', dmg:79, pp:10, ppmax:10, info:'O usuário dispara um vento cortante como uma lâmina para atingir o oponente. O golpe tem uma alta taxa de acerto crítico.'} //signatureMove
    move.forEach(button => {
        button.style.background = "linear-gradient(#FAC0A0, #FF7D40)"
    })
})

water.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/blastoiseback.png');
    startDiv.style.display = 'flex';
    fire.style.color = ""; fire.style.backgroundColor = "";
    water.style.color = "cyan"; water.style.backgroundColor = "blue";
    grass.style.color = ""; grass.style.backgroundColor = "";
    nome = 'Blastoise'; hpmax = 260; hp = hpmax;
    moveList[0] = {name:"Pulso d'Água", dmg:55, pp:10, ppmax:10, info:'O usuário ataca o oponente com um jato de água pulsante.'} //weakAttack
    moveList[1] = {name:'Surfar', dmg:85, pp:8, ppmax:8, info:'Inunda todo o campo de batalha com uma onda gigantesca.'} //strongAttack
    moveList[2] = {name:'Ice Beam', dmg:85, pp:5, ppmax:5, info:'O oponente é atingido por um raio de energia gelado. Também pode congelar o alvo completamente.'} //signatureMove
    move.forEach(button => {
        button.style.background = "linear-gradient(#A0CCFA, #21C4FF)"
    })
})

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('batalha').style.display = 'block'
    document.getElementById('escolha').style.display = 'none'
    document.getElementById('start').style.display = 'none'
    document.getElementById('player').innerText = `${nome} HP${hp}/${hpmax}`
    document.getElementById('bot').innerText = `Mewtwo HP${m2hp}/302`
    moveList[3] = {name:'Proteger', dmg:'--', pp:5, ppmax:5, info:'Impede que quaisquer ataques direcionados ao usuário o atinjam durante o turno.'} //protect
    document.getElementById('0').innerHTML = `${moveList[0].name}`
    document.getElementById('1').innerHTML = `${moveList[1].name}`
    document.getElementById('2').innerHTML = `${moveList[2].name}`
    document.getElementById('3').innerHTML = `${moveList[3].name}`
})
move.forEach(moveHover);
function moveHover(hovered) {
    hovered.addEventListener('mouseenter', () => {
        document.getElementById('info+').style.display = 'flex'
        document.getElementById('pp').innerText = `PP ${moveList[Number(hovered.id)].pp}/${moveList[Number(hovered.id)].ppmax}`
        document.getElementById('bp').innerText = `BP ${moveList[Number(hovered.id)].dmg}`
        document.getElementById('description').innerText = `Descrição: \n ${moveList[Number(hovered.id)].info}`
})}

move.forEach(moveChoice);
function moveChoice(chosen) {
    chosen.addEventListener('click', () => {
        document.getElementById('info+').style.display = 'none'
        moveDiv.style.display = 'none'
        document.getElementById('description').innerText = `Seu ${nome} ataca com ${moveList[Number(chosen.id)].name}, causando ${moveList[Number(chosen.id)].dmg} de dano no Mewtwo inimigo!`
        next.style.display = 'block'
        m2hp -= moveList[Number(chosen.id)].dmg
        document.getElementById('bot').innerText = `Mewtwo HP${m2hp}/302`
        //hp -= botDmg 
        document.getElementById('player').innerText = `${nome} HP${hp}/${hpmax}`
})}

next.addEventListener('click', () => {
    next.style.display = 'none'
    moveDiv.style.display = 'flex'
    document.getElementById('info+').style.display = 'flex'
    document.getElementById('description').innerText = 'Mantenha o cursor do mouse sobre uma das habilidades para observar as informações dela.'
})
