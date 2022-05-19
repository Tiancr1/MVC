import './app1.css'
import $ from 'jquery'
//数据相关都放到m
const m = {
    data:{
        n : localStorage.getItem("n")
    }
}
//视图相关都放到v
const v = {
    html : `
        <section id="app1">
            <div class="output">
                <span id="number">100</span>
            </div>
            <div class="action">
                <button id="add1">+1</button>
                <button id="minus1">-1</button>
                <button id="mul2">*2</button>
                <button id="divide2">÷2</button>
            </div>
        </section>`,
    //将数据渲染到页面
    //初始化数据
    //每次进入该页面都去localstorage中获取n的值，如果没有则展示100
    update(){
        c.ui.number.text(m.data.n || 100)
    },
    render(){
        const $element = $(v.html).appendTo($('body>.page'))  
    }
}
//其他都c
const c = {
    //定义重要按钮元素
    init(){
        c.ui={
            button1 : $("#add1"),
            button2 : $("#minus1"),
            button3 : $("#mul2"),
            button4 : $("#divide2"),
            number : $("#number")
        }
        c.bindEvents()
    },
    //绑定鼠标事件
    bindEvents(){
        c.ui.button1.on("click",()=>{
            let n = parseInt(c.ui.number.text())
            n+=1
            //每次n变化后把变化后的值存储在localstorage中
            localStorage.setItem("n",n)
            c.ui.number.text(n)
        })
        c.ui.button2.on("click",()=>{
            let n = parseInt(c.ui.number.text())
            n-=1
            localStorage.setItem("n",n)
            c.ui.number.text(n)
        })
        c.ui.button3.on("click",()=>{
            let n = parseInt(c.ui.number.text())
            n*=2
            localStorage.setItem("n",n)
            c.ui.number.text(n)
        })
        c.ui.button4.on("click",()=>{
            let n = parseInt(c.ui.number.text())
            n/=2
            localStorage.setItem("n",n)
            c.ui.number.text(n)
        })
    }
}
//第一次渲染html
v.render()
c.init()




