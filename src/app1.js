import './app1.css'
import $ from 'jquery'
const $button1 = $("#add1")
const $button2 = $("#minus1")
const $button3 = $("#mul2")
const $button4 = $("#divide2")
const $number = $("#number")
//每次进入该页面都去localstorage中获取n的值，如果没有则展示100
const n = localStorage.getItem("n")
$number.text(n || 100)

$button1.on("click",()=>{
    let n = parseInt($number.text())
    n+=1
    //每次n变化后把变化后的值存储在localstorage中
    localStorage.setItem("n",n)
    $number.text(n)
})
$button2.on("click",()=>{
    let n = parseInt($number.text())
    n-=1
    localStorage.setItem("n",n)
    $number.text(n)
})
$button3.on("click",()=>{
    let n = parseInt($number.text())
    n*=2
    localStorage.setItem("n",n)
    $number.text(n)
})
$button4.on("click",()=>{
    let n = parseInt($number.text())
    n/=2
    localStorage.setItem("n",n)
    $number.text(n)
})