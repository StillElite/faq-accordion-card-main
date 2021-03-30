window.onload = function () {
    let accordion = document.getElementsByClassName("accordion");
    let panel = document.getElementsByClassName('panel');
   
    for (i = 0; i < accordion.length; i++) {
        accordion[i].onclick = function () {
            let setClasses = !this.classList.contains('active');
            setClass(accordion, 'active', 'remove');
            setClass(panel, 'show', 'remove');

            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show"); 
            }
        }
    }

    function setClass(element, className, functionName) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList[functionName](className);
        }
    }

}