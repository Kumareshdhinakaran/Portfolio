// const TypeWriter = function (txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.wait = parseInt(wait, 10);
//     this.txt = "";
//     this.wordIndex = 0;
//     this.type();
//     this.isDeleting = false;
// }

// //Type method
// TypeWriter.prototype.type = function () {
//     //current index of word
//     const curr = this.wordIndex % this.words.length;
//     //get full text of word
//     const currWord = this.words[curr];

//     //check if deleting
//     if (this.isDeleting) {
//         this.txt = currWord.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = currWord.substring(0, this.txt.length + 1);
//     }

//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     //Inital typeword
//     let typeSpeed = 300;

//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     if (!this.isDeleting && this.txt == currWord) {
//         typeSpeed = this.wait;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt == '') {
//         this.isDeleting = false;
//         this.wordIndex++;
//         typeSpeed = 500;
//     }


//     setTimeout(() => this.type(), 100);
// }

//Init on Dom load
document.addEventListener("DOMContentLoaded", init);

//Es6 Syntax
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.txt = "";
        this.wordIndex = 0;
        this.type();
        this.isDeleting = false;
    }
    type = function () {
        //current index of word
        const curr = this.wordIndex % this.words.length;
        //get full text of word
        const currWord = this.words[curr];

        //check if deleting
        if (this.isDeleting) {
            this.txt = currWord.substring(0, this.txt.length - 1);
        } else {
            this.txt = currWord.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Inital typeword
        let typeSpeed = this.wait;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt == currWord) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt == '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }


        setTimeout(() => this.type(), typeSpeed);
    }

}

// Nav link
var element = document.getElementsByClassName("nav-link");

for(let ele of element){
    console.log(ele.parentElement.parentElement);   
    ele.addEventListener("click", function(){
        ele.classList.add("active");
        for(let el of element){
            if(el !== ele){
                el.classList.remove("active");
            }
        }
    });
}
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("nav-wrap")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//Init App
function init() {
    const txtElement = document.querySelector(".txt-type");
    const wait = txtElement.getAttribute('data-wait');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    //Init Typewriter
    new TypeWriter(txtElement, words, wait);

}