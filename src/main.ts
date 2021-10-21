import './style.css'
import * as smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


import ProudCodeDark from '../img/undraw_proud_coder_dark.svg';
import ProudCodeLight from '../img/undraw_proud_coder_light.svg';
import FeelingProudDark from '../img/undraw_feeling_proud_dark.svg';
import FeelingProudLight from '../img/undraw_feeling_proud_light.svg';
import ConceptualIdeaDark from '../img/undraw_conceptual_idea_dark.svg';
import ConceptualIdeaLight from '../img/undraw_conceptual_idea_light.svg';



// const app = document.querySelector<HTMLDivElement>('#app')!
const anchors = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
const sections = document.querySelectorAll('section') as NodeListOf<Element>;
const toggleSwitch = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
const  toggleIcon = document.querySelector('#toggle-icon') as HTMLElement;
const nav = document.querySelector('nav') as HTMLElement;
const image1 = document.querySelector('#image1') as HTMLImageElement;
const image2 = document.querySelector('#image2') as HTMLImageElement;
const image3 = document.querySelector('#image3') as HTMLImageElement;
const textBox = document.querySelector('#text-box') as HTMLElement;


function AddScrollSmoothToNodes(sections:NodeListOf<Element>,anchor:HTMLAnchorElement){
  let anchorId:string = anchor.href.split('#')[1];
  let El =  Array.prototype.slice.call(sections).filter((el:Element)=> anchorId===el.id)
  return El[0].scrollIntoView({behavior:'smooth'})

}

anchors.forEach((anchor):void=>{
  anchor.addEventListener('click',()=>{
    AddScrollSmoothToNodes(sections,anchor)
  }) 

})


//image mode 
function imageMode(color:string){
  image1.src = color==='dark'?ProudCodeDark:ProudCodeLight
  image2.src = color==='dark'?FeelingProudDark:FeelingProudLight
  image3.src = color==='dark'?ConceptualIdeaDark:ConceptualIdeaLight
}

const ToggleMode = (isLight:boolean)=>{
  let darkBackground ='rgb(0 0 0 /50%)';
  let lightBackground = 'rgb(255 255 255 /50%)';
  nav.style.backgroundColor = isLight?lightBackground:darkBackground;
  textBox.style.backgroundColor = isLight?darkBackground:lightBackground;
  toggleIcon.children[0].textContent = isLight?'Light Mode':'Dark Mode';
  isLight?toggleIcon.children[1].classList.replace('fa-moon','fa-sun'):
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
  isLight?imageMode('light'):imageMode('dark')


}


// switch theme dynamically
function switchTheme(e:Event){
  e.preventDefault();
  let event = e.target as HTMLInputElement
  if(event.checked){
    document.documentElement.setAttribute('data-theme','dark')
    localStorage.setItem('theme','dark')
    ToggleMode(false)
  }else{
    document.documentElement.setAttribute('data-theme','light')
    localStorage.setItem('theme','light')
    ToggleMode(true)



  }

}

toggleSwitch.addEventListener('change',switchTheme)

const currentTheme:string|null= localStorage.getItem('theme');


if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme)
  if (currentTheme==="light"){
    toggleSwitch.checked = false;
    ToggleMode(true)
  }

}else{
  toggleSwitch.checked = true;
  ToggleMode(false)
}




