function problemOne(event) {

  const target = event.target;
}

let btn = document.getElementById('remove-me');
btn.addEventListener('click',hideshow,false);

    function hideshow() {
    this.style.display = 'none'
};

function problemTwo(event) {
  const target = event.target;
  // your code here
}

let btn2 = document.getElementById('remove-my-children');
btn2.addEventListener('click',hide,false);

    function hide() {
    this.style.display = 'none'
};
// reference the elment "#remove-my-children" and add an eventlistener for the click event:
// your code here

/* ---------------------------------------- */


function problemThree(event) {

  const target = event.target;
  // your code here
}


// reference the elment "#remove-my-children-then-me" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */

function problemFour( event ) {

  const target = event.target;
  // your code here

}
let newChild = document.createElement("child1");
let btn3 = document.querySelector("#add-children");

btn3.addEventListener('click', function() {
newChild.textContent = "This is child 1.";

btn3.appendChild(newChild);
});

// reference the elment "#add-children" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */

function problemFive(event) {

  const target = event.target;
  // your code here

}

let newBack = document.createElement("First");
let btn4 = document.querySelector("#to-the-back");

btn4.addEventListener('click', function() {
newBack.textContent = "First";
btn4.appendChild(newBack);
});

// reference the elment "#to-the-back" and add an eventlistener for the mouseup event:
// your code here:

/* ---------------------------------------- */


function problemSix(event) {

  const target = event.target;
}
  // your code here


// reference the elment "#increment-child" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

function problemSeven(event) {

  const target = event.target;
  // your code here

}


// reference the elment "#increment-decrement" and add an eventlistener for the click event:
// your code here:

/* ---------------------------------------- */


function problemEight(event) {

 const target = event.target;
  // your code here

}

// reference the elment "#echo-user-input" and add an eventlistener for the keyup event:
// your code here:

/* ---------------------------------------- */

/* Maybe code goes here, if some scope is needed... */

function problemNine(event) {

  event.preventDefault();
  const target = event.target;
  // your code here

}

// reference the elment "#paste-place" and add an eventlistener for the paste event:
// your code here:

/* ---------------------------------------- */

function problemTen(event) {
  const target = event.target;
  // your code here
}

        const sh = document.querySelector('#toggle-checkbox');

        sh.addEventListener('click',hideme,false);

        function hideme() {
        this.style.display = 'none'
        };

// reference the elment "#show-hide" and add an eventlistener for the change event:
// your code here:

/* ---------------------------------------- */


function problemEleven( event ) {

  event.preventDefault();

  const target = event.target;
  // your code here

}

// your code here

/* ---------------------------------------- */

function problemTwelve () {

}
// your code here
