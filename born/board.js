//css 선택자 아무거나 가능
let container = document.querySelector(".container");
console.log(container);

let first_li = document.querySelector(".pagination  li:nth-child(2)");
console.log(first_li);

let button = document.querySelector('[data-target="#navbarText"]');
console.log(button);

//전체 요소 가져오기(NodeList)
let liList = document.querySelectorAll(".pagination  li");
console.log(liList);
