import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')
console.log("2")
$square.on('click',()=>{
    console.log("1")
    $square.toggleClass("active")
})