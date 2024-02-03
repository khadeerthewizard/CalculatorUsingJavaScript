document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('input').addEventListener('keyup', handleKeyUp);
    document.querySelector('.btns').addEventListener('click', handleButtonClick);
});

function handleKeyUp(event) {
    if (event.keyCode === 13) {
        var element = document.getElementById("input");
        var result = eval(element.value);
        element.value = result;
    }
}

function handleButtonClick(event) {
    var target = event.target;
    var element = document.getElementById("input");
    if (target.tagName === 'BUTTON') {
        target.style.boxShadow = 'none';
        setTimeout(function () {
            target.style.boxShadow = '8px 8px 20px rgba(0, 0, 0, 0.8)';
        }, 100);

        if (target.value == 'equal') {
            var result = eval(element.value);
            element.value = result;
            return;
        }

        if (target.value == 'CE') {
            element.value = '';
            return;
        }

        if (target.value == 'C' || target.value == 'DEL') {
            element.value = element.value.slice(0, -1);
            return;
        }

        var num = target.value;
        element.value += num;
    }
}
