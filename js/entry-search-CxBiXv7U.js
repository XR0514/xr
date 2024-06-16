import"./entry-iconfont-C1As1knS.js";import{a as r}from"./entry-axios-B4uVmeYG.js";i(".inp").addEventListener("change",async()=>{let e=i(".inp").value.trim(),a=(await r.get("https://zyxcl.xyz/exam_api/zh")).data.items.filter(n=>n.title.includes(e));d(a)});i(".back").addEventListener("click",()=>{location.href="./index.html"});function d(e){i(".itemss").innerHTML=e.map(t=>`
            <div class="itemTwo" dataId=${t.item_id} dataItem=item>
                <p><img src="${t.img}" alt=""></p>
                <div class="des">
                    <p>${t.title}</p>
                    <p>月销${t.sold}笔</p>
                    <p>￥${t.price}</p>
                </div>
            </div>
        `).join("")}function i(e){return document.querySelector(e)}
//# sourceMappingURL=entry-search-CxBiXv7U.js.map
