import { sectionOne } from "./sectionOne.mjs"
import { sectionTwo } from "./sectionTwo.mjs"

const Xmark = document.querySelector('nav .fa-xmark')
const Bars = document.querySelector('nav .fa-bars')
const links = document.querySelectorAll('nav ul li')
const Ul = document.querySelector('nav ul')
const sections = document.querySelectorAll('main section')
links.forEach(link => {
    link.addEventListener("click", (e) => {
        classActive()
        e.target.classList.add('active')
        const dataTarget = e.target.getAttribute('data-target')
        sections.forEach(section => {
            let x = section.getAttribute('data-target')
            section.style.display = dataTarget != x ? 'none' : 'flex'
        })
    })
})

function classActive(){
    links.forEach(e=>{
        e.classList.remove('active')
    })
}
Bars.addEventListener('click',()=>{
    Bars.classList.add('hidden')
    Xmark.classList.remove('hidden')
    Ul.style.display='flex'
})
Xmark.addEventListener('click',()=>{
    Xmark.classList.add('hidden')
    Bars.classList.remove('hidden')
    Ul.style.display='none'

})
sectionOne()
sectionTwo()