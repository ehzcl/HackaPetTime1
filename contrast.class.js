
console.log("oi")

function logar(event) {
    event.preventDefault();
    console.log("logou!")
    window.location.href = "joao.html"
}

var mudancaLogo = 'F'

function trocarLogo() {
    var image = document.getElementById('logo');
    if(mudancaLogo == 'F') {
        image.src = "img/ContrataAlt.png"
        mudancaLogo = 'V'
    } else {
        image.src = "img/Contrata.png"
        mudancaLogo = 'F'
    }
}

var mudancaContraste = 'F'

function trocarContraste() {
    var contraste = document.getElementById('imgaltocontraste');
    if(mudancaContraste == 'F') {
        contraste.src = "img/AltoContrasteAlt.png"
        mudancaContraste = 'V'
    } else {
        contraste.src = "img/AltoContraste.png"
        mudancaContraste = 'F'
    }
}

(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();