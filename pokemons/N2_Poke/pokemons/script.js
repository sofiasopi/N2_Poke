document.getElementById('start').setAttribute('style', 'display:none;');
document.getElementById('batalha').setAttribute('style', 'display:none;');

const backSprite = document.getElementById('backSprite');
const battle = document.getElementById('start');

document.getElementById('grass').onclick = () => {
    backSprite.setAttribute('src', 'imagem/venusaurback.png');
    battle.setAttribute('style', 'display:block;');
}

document.getElementById('fire').onclick = () => {
    backSprite.setAttribute('src', 'imagem/charizardback.png');
    battle.setAttribute('style', 'display:block;');
}

document.getElementById('water').onclick = () => {
    backSprite.setAttribute('src', 'imagem/blastoiseback.png');
    battle.setAttribute('style', 'display:block;');
}


battle.onclick = () => {
    document.getElementById('batalha').setAttribute('style', 'display: block;');
}