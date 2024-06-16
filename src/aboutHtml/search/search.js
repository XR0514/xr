import "./search.scss";
import "../../common/common.scss";
import "../../font/iconfont.css";
import axios from "axios";



$(".inp").addEventListener("change", async () => {
    let inpVal = $(".inp").value.trim();
    const res = await axios.get("https://zyxcl.xyz/exam_api/zh");
    let data = res.data.items.filter(obj => {
        return obj.title.includes(inpVal);
    })
    renderDataTwo(data);
})

$(".back").addEventListener("click", () =>{
    location.href = './index.html';
})

function renderDataTwo(data){
    $(".itemss").innerHTML = data.map(obj => {
        return `
            <div class="itemTwo" dataId=${obj.item_id} dataItem=item>
                <p><img src="${obj.img}" alt=""></p>
                <div class="des">
                    <p>${obj.title}</p>
                    <p>月销${obj.sold}笔</p>
                    <p>￥${obj.price}</p>
                </div>
            </div>
        `
    }).join("")
}


function $(el){
    return document.querySelector(el);
}

function $$(el){
    return [...document.querySelectorAll(el)];
}
