const backSprite = document.getElementById('backSprite')
const startDiv = document.getElementById('comeco')
const grass = document.getElementById('grass')
const fire = document.getElementById('fire')
const water = document.getElementById('water')
const move = document.querySelectorAll('.move')
const moveDiv = document.getElementById('moveList')
const next = document.getElementById('next')
let nome = 'Substitute'
let hpmax = 0
let hp = hpmax
let def = 0
const m2hpmax = 302
let m2hp = m2hpmax
const moveList = []
const botMoveList = []

grass.addEventListener('click', () => {
    backSprite.setAttribute('src', 'imagem/venusaurback.png');
    startDiv.style.display = 'flex';
    fire.style.color = ""; fire.style.backgroundColor = "";
    water.style.color = ""; water.style.backgroundColor = "";
    grass.style.color = "lime"; grass.style.backgroundColor = "green";
    nome = 'Venussauro'; hpmax = 251; hp = hpmax; def = Math.floor(91 * 0.5);
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
    nome = 'Charizard'; hpmax = 237; hp = hpmax; def = 81;
    moveList[0] = {name:'Sopro do Dragão', dmg:79, pp:10, ppmax:10, info:'O usuário exala uma rajada poderosa que causa dano.'} //weakAttack
    moveList[1] = {name:'Lança Chamas', dmg:109, pp:5, ppmax:5, info:'O inimigo é chamuscado por uma rajada intensa de fogo.'} //strongAttack
    moveList[2] = {name:'Cortador de Ar', dmg:79, pp:10, ppmax:10, info:'O usuário dispara um vento cortante como uma lâmina para atingir o oponente. O golpe tem uma alta taxa de acerto crítico.'} //signatureMove
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
    nome = 'Blastoise'; hpmax = 260; hp = hpmax; def = 102;
    moveList[0] = {name:"Pulso d'Água", dmg:55, pp:10, ppmax:10, info:'O usuário ataca o oponente com um jato de água pulsante.'} //weakAttack
    moveList[1] = {name:'Surfar', dmg:85, pp:8, ppmax:8, info:'Inunda todo o campo de batalha com uma onda gigantesca.'} //strongAttack
    moveList[2] = {name:'Raio Congelante', dmg:85, pp:5, ppmax:5, info:'O oponente é atingido por um raio de energia gelado. Também pode congelar o alvo completamente.'} //signatureMove
    move.forEach(button => {
        button.style.background = "linear-gradient(#A0CCFA, #21C4FF)"
    })
})

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('batalha').style.display = 'block'
    document.getElementById('tutorial').style.display = 'none'
    document.getElementById('escolha').style.display = 'none'
    document.getElementById('start').style.display = 'none'
    document.getElementById('player').innerText = `${nome} HP${hp}/${hpmax}`
    document.getElementById('bot').innerText = `Mewtwo HP${m2hp}/${m2hpmax}`
    moveList[3] = {name:'Proteger', dmg:0, pp:5, ppmax:5, info:'Impede que quaisquer ataques direcionados ao usuário o atinjam durante o turno.'} //protect
    botMoveList[0] = {name:'Poder Armazenado', dmg:174 - def, pp:7}; 
    botMoveList[1] = {name:'Raio Psíquico', dmg:219 - def, pp:10};
    botMoveList[2] = {name:'Mente Calma', dmg:0, pp:3};
    botMoveList[3] = {name:'Recuperação', dmg:0, pp:1};
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
        if (moveList[Number(chosen.id)].pp > 0) {
            moveList[Number(chosen.id)].pp -= 1
            document.getElementById('info+').style.display = 'none'
            moveDiv.style.display = 'none'

            // combate
            document.getElementById('description').innerText = `${nome} ataca o Mewtwo inimigo com ${moveList[Number(chosen.id)].name}, causando ${moveList[Number(chosen.id)].dmg} de dano! `
            if (chosen.id == 3) {
                document.getElementById('description').innerText = `${nome} se protege contra qualquer ataque do Mewtwo inimigo!`
            } else if (chosen.id == 2) { //signature
                
                if (moveList[2].name === 'Giga Dreno') { //venussauro
                    document.getElementById('description').innerText += ' E além disso recuperando seu HP com os nutrientes do adversário!'
                    hp += Math.floor(moveList[2].dmg * 0.5)
                    if (hp > hpmax) {
                        hp = hpmax
                }}

                if (moveList[2].name === 'Cortador de Ar') { //charizard
                    if (Math.floor(Math.random() * 4) === 3) {
                        document.getElementById('description').innerText += ` O acerto foi crítico, causando ${moveList[2].dmg} a mais, totalizando ${moveList[2].dmg * 2}!`
                        m2hp -= moveList[2].dmg
                }}

                if (moveList[2].name === 'Raio Congelante') { //blastoise
                    if (Math.floor(Math.random() * 3) == 2) {
                        document.getElementById('description').innerText += ' O frio intenso congelou Mewtwo, agora ele não pode se mover!'
                        document.getElementById('botImg').classList.add('frozen')
                }}
            }
            
            m2hp -= moveList[Number(chosen.id)].dmg

            document.getElementById('bot').innerText = `Mewtwo HP${m2hp}/${m2hpmax}`
            document.getElementById('player').innerText = `${nome} HP${hp}/${hpmax}`
            next.style.display = 'block'

            next.addEventListener('click', () => {
                botMoveChoice(chosen.id)
            }, {once: true})
}})}

function botMoveChoice(chosen) {
    //checando se o inimigo já foi derrotado (soma dos PPs > 0, indica que pelo menos um deles é > 0)
    if (m2hp > 0 && botMoveList[0].pp + botMoveList[1].pp + botMoveList[2].pp + botMoveList[3].pp > 0) {
        let botChosen;
        let botUsed;
        document.getElementById('description').innerText += '\n'

        if (document.getElementById('botImg').classList.contains('frozen')) { //congelamento
            document.getElementById('description').innerText += 'Você percebe rachaduras aparecendo no gelo.'
            if (Math.floor(Math.random() * 2) === 1) {
                document.getElementById('description').innerText += ` As rachaduras aumentam cada vez mais, até que o gelo se quebra. \n`
                document.getElementById('botImg').classList.remove('frozen')
            } else {
                document.getElementById('description').innerText += ` Mesmo se esforçando, Mewtwo não conseguiu escapar do congelamento, e permanece imóvel.`
                
                next.addEventListener('click', () => {
                    next.style.display = 'none'
                    moveDiv.style.display = 'flex'
                    document.getElementById('description').innerText = 'Mantenha o cursor do mouse sobre uma das habilidades para observar as informações dela.'
                }, {once: true})
                return 0
            }
        }

        while (true) {
            botChosen = Math.floor(Math.random() * 4)
            botUsed = botMoveList[botChosen];
            if (botUsed.pp > 0) {
                break
        }}
        botUsed.pp -= 1
        
        if (botChosen == 2) {
            document.getElementById('description').innerText += ' Mewtwo acalmou a própria mente, concentrando suas forças. (O dano do "Poder Armazenado" foi aumentado)'
            botMoveList[0].dmg += 20
        } else if (botChosen == 3) {
            document.getElementById('description').innerText += ` Mewtwo concentrou suas energias para se recuperar de seus ferimentos!`
            m2hp += Math.floor(m2hpmax * 0.5)
            if (m2hp > m2hpmax) {
                m2hp = m2hpmax
            }
        } else {
            document.getElementById('description').innerText += ` Mewtwo atacou ${nome} com ${botUsed.name},`
            if (chosen != 3) {
                document.getElementById('description').innerText += ` causando ${botUsed.dmg} de dano!`
                hp -= botUsed.dmg
            } else {
                document.getElementById('description').innerText += ` mas a proteção do ${nome} negou o dano completamente!`
            }
        }
        document.getElementById('bot').innerText = `Mewtwo HP${m2hp}/${m2hpmax}`
        document.getElementById('player').innerText = `${nome} HP${hp}/${hpmax}`

        next.addEventListener('click', () => {
            next.style.display = 'none'
            moveDiv.style.display = 'flex'
            document.getElementById('description').innerText = 'Mantenha o cursor do mouse sobre uma das habilidades para observar as informações dela.'
        }, {once: true})

        //checando se o jogador perdeu
        if (hp <= 0 || moveList[0].pp + moveList[1].pp + moveList[2].pp + moveList[3].pp <= 0) {
            document.getElementById('description').innerText = '---===<😵‍💫DERROTA😵‍💫>===--- \n '
            next.innerHTML = 'Clique para Reiniciar'
            next.addEventListener('click', () => {
                location.reload()
            }, {once: true})
            if (hp > 0) {
                document.getElementById('description').innerText += `${nome} não tem mais forças para atacar, você perdeu.`
            } else {
                document.getElementById('description').innerText += `${nome} está ferido demais para lutar, você perdeu.`
        }}

        return botUsed.dmg

    } else {
        document.getElementById('description').innerText = '---===<🏆VITÓRIA🏆>===--- \n '
        next.innerHTML = 'Clique para Reiniciar'
        next.addEventListener('click', () => {
            location.reload()
        }, {once: true})
        if (m2hp > 0) {
            document.getElementById('description').innerText += 'Mewtwo não tem mais forças para atacar, você venceu!' 
        } else {
            document.getElementById('description').innerText += 'Mewtwo está ferido demais para lutar, você venceu!'
}}}