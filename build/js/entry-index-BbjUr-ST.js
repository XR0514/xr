import"./entry-iconfont-C1As1knS.js";import{a as l}from"./entry-axios-B4uVmeYG.js";let d=0;function x(){return new Promise((a,t)=>{const i=new XMLHttpRequest;i.open("get","https://zyxcl.xyz/exam_api/zh"),i.onreadystatechange=()=>{if(i.readyState===4&&i.status===200){const m=JSON.parse(i.responseText);a(m)}},i.send()})}async function v(){const a=await x();n(a.items),r(a.items),h(),o(a.items)}v();e(".change").addEventListener("click",()=>{e(".items").classList.contains("show")?(e(".items").classList.remove("show"),e(".itemss").classList.add("show"),h()):e(".itemss").classList.contains("show")&&(e(".items").classList.add("show"),e(".itemss").classList.remove("show"),h())});e("section").addEventListener("click",async a=>{location.href="./details.html";let t=a.target.getAttribute("dataId");const i=await l.get("https://zyxcl.xyz/exam_api/zh"),m=await l.get("https://zyxcl.xyz/exam_api/zh"),c=await l.get("https://zyxcl.xyz/exam_api/zh");i.data.items.forEach(s=>{t==s.item_id&&localStorage.setItem("data",JSON.stringify(s))}),m.data.items.forEach(s=>{t==s.item_id&&localStorage.setItem("data",JSON.stringify(s))}),c.data.items.forEach(s=>{t==s.item_id&&localStorage.setItem("data",JSON.stringify(s))})});function h(){e("header").addEventListener("click",async a=>{if(a.target.classList.contains("all")){e(".active").classList.remove("active"),a.target.classList.add("active");const t=await l.get("https://zyxcl.xyz/exam_api/zh");o(t.data.items),n(t.data.items),r(t.data.items)}if(a.target.classList.contains("sold")){e(".active").classList.remove("active"),a.target.classList.add("active");const t=await l.get("https://zyxcl.xyz/exam_api/xl");o(t.data.items),n(t.data.items),r(t.data.items)}if(a.target.classList.contains("new")){e(".active").classList.remove("active"),a.target.classList.add("active");const t=await l.get("https://zyxcl.xyz/exam_api/sx");o(t.data.items),n(t.data.items),r(t.data.items)}})}function o(a){let t=a,i=[...a];console.log(t),e(".price").addEventListener("click",m=>{d=d+1>2?0:d+1;let c=m.target.firstElementChild;if(d===1){c.classList.add("icon-jiageshengxu"),c.classList.remove("icon-jiagepaixu1");let s=t.sort((p,g)=>p.price-g.price);n(s),r(s)}if(d===2){c.classList.add("icon-jiagejiangxu"),c.classList.remove("icon-jiageshengxu");let s=t.sort((p,g)=>g.price-p.price);n(s),r(s)}d===0&&(c.classList.add("icon-jiagepaixu1"),c.classList.remove("icon-jiagejiangxu"),n(i),r(i))})}function n(a){e(".items").innerHTML=a.map(t=>`
            <div class="itemOne" dataId=${t.item_id} dataItem=item>
                <p class="img"><img src="${t.img}" alt=""></p>
                <p>${t.title}</p>
                <div>
                    <span>￥${t.price}</span>
                    <span>月销${t.sold}笔</span>
                </div>
            </div>
        `).join("")}function r(a){e(".itemss").innerHTML=a.map(t=>`
            <div class="itemTwo" dataId=${t.item_id} dataItem=item>
                <p><img src="${t.img}" alt=""></p>
                <div class="des">
                    <p>${t.title}</p>
                    <p>月销${t.sold}笔</p>
                    <p>￥${t.price}</p>
                </div>
            </div>
        `).join("")}e(".search").addEventListener("click",()=>{location.href="./search.html"});function e(a){return document.querySelector(a)}
//# sourceMappingURL=entry-index-BbjUr-ST.js.map
