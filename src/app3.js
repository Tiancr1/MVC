import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
const localKey = 'app3.square'

const html = `<section id="app3">
<div class="square"></div>
</section>`

const $element = $(html).appendTo($('body>.page'))

const active = localStorage.getItem(localKey) === 'yes'
if(active){
    $square.addClass('active')
}else{
    $square.removeClass('active')
}
console.log("2")
$square.on('click',()=>{
    console.log("1")
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem(localKey,'no')
    }else{
        $square.addClass('active')
        localStorage.setItem(localKey,'yes')
    }
})