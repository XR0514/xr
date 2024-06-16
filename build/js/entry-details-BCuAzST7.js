import"./entry-iconfont-C1As1knS.js";let a=JSON.parse(localStorage.getItem("data"));console.log(a);e(".box").innerHTML=`
    <span class="back">《</span>
    <p><img src="${a.img}" alt=""></p>
    <span>￥${a.price}</span>
    <span>${a.title}</span>
    <span>月销量${a.sold}笔</span>

`;e(".back").addEventListener("click",()=>{location.href="./index.html"});function e(n){return document.querySelector(n)}
//# sourceMappingURL=entry-details-BCuAzST7.js.map
