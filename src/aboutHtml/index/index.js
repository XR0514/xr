
import "../../common/common.scss";
import "../../font/iconfont.css";
import "./index.scss";
import axios from "axios";

// console.log(132)


let priceType = 0;

function getData(){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", "https://zyxcl.xyz/exam_api/zh");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            }
        }
        xhr.send()
    })
}
async function init() {
    const res = await getData();
    // console.log(res.items);
    renderDataOne(res.items);
    renderDataTwo(res.items);
    clickData();
    sort(res.items)
}
init()

// 点击切换排列方式
$(".change").addEventListener("click", () => {
    if($(".items").classList.contains("show")){
        $(".items").classList.remove("show");
        $(".itemss").classList.add("show");
        clickData()
    }else if($(".itemss").classList.contains("show")){
        $(".items").classList.add("show");
        $(".itemss").classList.remove("show");
        clickData()
    }   
})

// 点击每个商品
$("section").addEventListener("click", async e => {
    location.href = "./details.html";
    let id = e.target.getAttribute("dataId");
    const res1 = await axios.get("https://zyxcl.xyz/exam_api/zh");
    const res2 = await axios.get("https://zyxcl.xyz/exam_api/zh");
    const res3 = await axios.get("https://zyxcl.xyz/exam_api/zh");
    // console.log(res)
    res1.data.items.forEach(obj => {
        if(id == obj.item_id){
            // console.log(123)
            localStorage.setItem("data", JSON.stringify(obj))
        }
    })
    res2.data.items.forEach(obj => {
        if(id == obj.item_id){
            // console.log(123)
            localStorage.setItem("data", JSON.stringify(obj))
        }
    })
    res3.data.items.forEach(obj => {
        if(id == obj.item_id){
            // console.log(123)
            localStorage.setItem("data", JSON.stringify(obj))
        }
    })
})



function clickData(){
    $("header").addEventListener("click", async e => {
        if(e.target.classList.contains("all")){
            $(".active").classList.remove("active");
            e.target.classList.add("active");
            const res = await axios.get("https://zyxcl.xyz/exam_api/zh");
            sort(res.data.items);
            renderDataOne(res.data.items);
            renderDataTwo(res.data.items);
        }
        if(e.target.classList.contains("sold")){
            $(".active").classList.remove("active");
            e.target.classList.add("active");
            const res = await axios.get("https://zyxcl.xyz/exam_api/xl");
            sort(res.data.items);
            renderDataOne(res.data.items);
            renderDataTwo(res.data.items);
        }
        if(e.target.classList.contains("new")){
            $(".active").classList.remove("active");
            e.target.classList.add("active");
            const res = await axios.get("https://zyxcl.xyz/exam_api/sx");
            sort(res.data.items);
            renderDataOne(res.data.items);
            renderDataTwo(res.data.items);
        }
    })
}


function sort(data){
    let data1 = data;
    let data2 = [...data];
    console.log(data1)
    $(".price").addEventListener("click", e => {
        priceType = priceType + 1 > 2 ? 0 : priceType + 1;
        // console.log(priceType)
        let btn = e.target.firstElementChild;
        // console.log(data)
        if(priceType === 1){
            btn.classList.add("icon-jiageshengxu");  //升序
            btn.classList.remove("icon-jiagepaixu1");
            let datas = data1.sort( (a, b) => {
                return a.price - b.price;
            })
            renderDataOne(datas);
            renderDataTwo(datas)
        }
        if(priceType === 2){
            btn.classList.add("icon-jiagejiangxu");  //降序
            btn.classList.remove("icon-jiageshengxu");
            let datas = data1.sort( (a, b) => {
                return b.price - a.price;
            })
            renderDataOne(datas);
            renderDataTwo(datas)
        }
        if(priceType === 0){
            btn.classList.add("icon-jiagepaixu1");  //默认
            btn.classList.remove("icon-jiagejiangxu");
            renderDataOne(data2);
            renderDataTwo(data2);
        }
    })
}




function renderDataOne(data){
    $(".items").innerHTML = data.map(obj => {
        return `
            <div class="itemOne" dataId=${obj.item_id} dataItem=item>
                <p class="img"><img src="${obj.img}" alt=""></p>
                <p>${obj.title}</p>
                <div>
                    <span>￥${obj.price}</span>
                    <span>月销${obj.sold}笔</span>
                </div>
            </div>
        `
    }).join("")
}

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

$(".search").addEventListener("click", () => {
    location.href = "./search.html";
})


function $(el){
    return document.querySelector(el);
}

function $$(el){
    return [...document.querySelectorAll(el)];
}

