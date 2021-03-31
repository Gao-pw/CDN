bind();
function bind() {

    document.onkeydown = event => {
        if (!event) return;
        var code = event.keyCode || '';
        if (!{ '37': 1, '38': 1, '39': 1, '40': 1 }[code]) return;
        event.preventDefault && event.preventDefault();
        //TODO: 请实现按键控制
        let div = document.getElementsByClassName('current')[0];
        let tbody = document.querySelector("tbody");
        let parent = div.parentNode;
        let index = div.cellIndex;
        switch (code) {
            case 37:
                if (index == 0) {
                    parent.children[parent.childElementCount - 1].classList.add('current');
                } else {
                    div.previousElementSibling.classList.add('current');
                }
                break;
            case 38:
                if (parent.previousElementSibling === null) {
                    tbody.children[tbody.childElementCount - 1].children[index].classList.add("current");
                } else {
                    parent.previousElementSibling.children[index].classList.add('current');
                }
                break;
            case 39:
                if (index == (parent.childElementCount - 1)) {
                    parent.children[0].classList.add('current');
                } else {
                    div.nextElementSibling.classList.add('current');
                }
                break;
            case 40:
                if (parent.nextElementSibling === null) {
                    tbody.children[0].children[index].classList.add("current");
                } else {
                    parent.nextElementSibling.children[index].classList.add("current");
                }
                break;
        }
        div.classList.remove("current");
    };
}