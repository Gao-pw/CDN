bind();
function bind() {

    document.onkeydown = event => {
        if (!event) return;
        var code = event.keyCode || '';
        if (!{ '37': 1, '38': 1, '39': 1, '40': 1 }[code]) return;
        event.preventDefault && event.preventDefault();
        //TODO: 请实现按键控制
        switch (code) {
            case 37:
                let div = document.getElementsByClassName('current')[0];
                let index1 = div.cellIndex;
                if (index1 == 0) {
                    div.parentElement.childNodes[div.parentElement.childNodes.length - 1].classList.add('current');
                } else {
                    div.previousElementSibling.classList.add("current");
                }
                div.classList.remove('current');
                break;
            case 38:
                let div2 = document.getElementsByClassName('current')[0];
                let index2 = div2.cellIndex;
                if (div2.parentElement.previousSibling.previousSibling === null) {
                    div2.parentNode.parentNode.childNodes[div2.parentNode.parentNode.childElementCount * 2 - 1].childNodes[index2].classList.add('current');
                } else {
                    div2.parentNode.previousElementSibling.childNodes[index2].classList.add('current');
                }
                div2.classList.remove("current");
                break;
            case 39:
                let div3 = document.getElementsByClassName('current')[0];
                let index3 = div3.cellIndex;
                if (index3 == div3.parentNode.childNodes.length - 1) {
                    div3.parentNode.childNodes[0].classList.add('current');
                } else {
                    div3.nextElementSibling.classList.add("current");
                }
                div3.classList.remove('current');
                break;
            case 40:
                let div4 = document.getElementsByClassName('current')[0];
                let index4 = div4.cellIndex;
                if (div4.parentElement.nextSibling.nextSibling === null) {
                    div4.parentNode.parentNode.childNodes[1].childNodes[index4].classList.add('current');
                } else {
                    div4.parentNode.nextElementSibling.childNodes[index4].classList.add('current');
                }
                div4.classList.remove("current");
                break;
        }
    };
}