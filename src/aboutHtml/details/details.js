

import "../../common/common.scss";
import "../../font/iconfont.css";
import "./details.scss";

let data = JSON.parse(localStorage.getItem("data"));
console.log(data)

$(".box").innerHTML = `
    <span class="back">《</span>
    <p><img src="${data.img}" alt=""></p>
    <span>￥${data.price}</span>
    <span>${data.title}</span>
    <span>月销量${data.sold}笔</span>

`

$(".back").addEventListener("click", () => {
    location.href = "./index.html";
})



function $(el){
    return document.querySelector(el);
}

function $$(el){
    return [...document.querySelectorAll(el)];
}