import $ from 'jquery'
import './app4.css'

const $circle = $('#app4 .circle')

const html = `<section id="app4">
<div class="circle"></div>
</section>`

const $element = $(html).appendTo($('body>.page'))

$circle.on('mouseenter',()=>{
    $circle.addClass('active')
})
$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})