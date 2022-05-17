import './app2.css'
import $ from 'jquery'

const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
$tabBar.on("click","li",(e)=>{
const $li = $(e.currentTarget)
    const index = $li.index()
    console.log(index)
    //找到tabContent等于第index儿子（eq的意思是等于）让他变成display:"block"，让他的兄弟变成display:"none"
    //不要用css、show、hide的api
    $tabBar.children()
    .eq(index).addClass("selected")
    .siblings().removeClass("selected")
    $tabContent.children()
    // .eq(index).css({display:"block"})
    // .siblings().css({display:"none"})
    .eq(index).addClass("active")
    .siblings().removeClass("active")
})
//默认找到tabBar的第一个儿子并触发点击事件
$tabBar.children().eq(0).trigger('click')