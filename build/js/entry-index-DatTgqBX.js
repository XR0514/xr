import"./entry-iconfont-C1As1knS.js";import{a as o}from"./entry-axios-B4uVmeYG.js";let d=0;function L(){return new Promise((e,t)=>{const a=new XMLHttpRequest;a.open("get","https://zyxcl.xyz/exam_api/zh"),a.onreadystatechange=()=>{if(a.readyState===4&&a.status===200){const n=JSON.parse(a.responseText);e(n)}},a.send()})}async function h(){const e=await L();i(e.items),c(e.items),v(),m(e.items)}h();s(".change").addEventListener("click",()=>{s(".items").classList.contains("show")?(s(".items").classList.remove("show"),s(".itemss").classList.add("show"),v()):s(".itemss").classList.contains("show")&&(s(".items").classList.add("show"),s(".itemss").classList.remove("show"),v())});s("section").addEventListener("click",async e=>{location.href="./details.html";let t=e.target.getAttribute("dataId");const a=await o.get("https://zyxcl.xyz/exam_api/zh");console.log(a),a.data.items.forEach(n=>{t==n.item_id&&(console.log(123),localStorage.setItem("data",JSON.stringify(n)))})});function v(){s("header").addEventListener("click",async e=>{if(e.target.classList.contains("all")){s(".active").classList.remove("active"),e.target.classList.add("active");const t=await o.get("https://zyxcl.xyz/exam_api/zh");m(t.data.items),i(t.data.items),c(t.data.items)}if(e.target.classList.contains("sold")){s(".active").classList.remove("active"),e.target.classList.add("active");const t=await o.get("https://zyxcl.xyz/exam_api/xl");m(t.data.items),i(t.data.items),c(t.data.items)}if(e.target.classList.contains("new")){s(".active").classList.remove("active"),e.target.classList.add("active");const t=await o.get("https://zyxcl.xyz/exam_api/sx");m(t.data.items),i(t.data.items),c(t.data.items)}})}function m(e){let t=e,a=[...e];console.log(t),s(".price").addEventListener("click",n=>{d=d+1>2?0:d+1;let r=n.target.firstElementChild;if(d===1){r.classList.add("icon-jiageshengxu"),r.classList.remove("icon-jiagepaixu1");let l=t.sort((p,g)=>p.price-g.price);i(l),c(l)}if(d===2){r.classList.add("icon-jiagejiangxu"),r.classList.remove("icon-jiageshengxu");let l=t.sort((p,g)=>g.price-p.price);i(l),c(l)}d===0&&(r.classList.add("icon-jiagepaixu1"),r.classList.remove("icon-jiagejiangxu"),i(a),c(a))})}function i(e){s(".items").innerHTML=e.map(t=>`
            <div class="itemOne" dataId=${t.item_id} dataItem=item>
                <p class="img"><img src="${t.img}" alt=""></p>
                <p>${t.title}</p>
                <div>
                    <span>￥${t.price}</span>
                    <span>月销${t.sold}笔</span>
                </div>
            </div>
        `).join("")}function c(e){s(".itemss").innerHTML=e.map(t=>`
            <div class="itemTwo" dataId=${t.item_id} dataItem=item>
                <p><img src="${t.img}" alt=""></p>
                <div class="des">
                    <p>${t.title}</p>
                    <p>月销${t.sold}笔</p>
                    <p>￥${t.price}</p>
                </div>
            </div>
        `).join("")}s(".search").addEventListener("click",()=>{location.href="./search.html"});function s(e){return document.querySelector(e)}
//# sourceMappingURL=entry-index-DatTgqBX.js.map
