import './style.css'
import * as smoothscroll from 'smoothscroll-polyfill';

// import './smoothScroll.ts';
smoothscroll.polyfill();
// window.__forceSmoothScrollPolyfill__ = true;

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

// interface nodes{
//   array:[]
// }
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
  image1.src = `/img/undraw_proud_coder_${color}.svg`;
  image2.src = `/img/undraw_feeling_proud_${color}.svg`;
  image3.src = `/img/undraw_conceptual_idea_${color}.svg`;

}

// darkmode
function darkMode(){
  nav.style.backgroundColor='rgb(0 0 0 /50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 /50%)';
  // textBox.style.color="rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
  imageMode('dark')

}



// light mode 
function lightMode(){
  nav.style.backgroundColor='rgb(255 255 255 /50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
  // textBox.style.color="rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
  imageMode('light')
}


// light mode 

// switch theme dynamically
function switchTheme(e:Event){
  e.preventDefault();
  let event = e.target as HTMLInputElement
  if(event.checked){
    document.documentElement.setAttribute('data-theme','dark')
    darkMode()
    localStorage.setItem('theme','dark')
  }else{
    document.documentElement.setAttribute('data-theme','light')
    lightMode()
    localStorage.setItem('theme','light')

  }

}

toggleSwitch.addEventListener('change',switchTheme)

const currentTheme:string|null= localStorage.getItem('theme');

console.log(currentTheme)

if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme)
  if (currentTheme==="dark"){
    toggleSwitch.checked = true;
    darkMode()
  }

}else{
  toggleSwitch.checked = false;
  lightMode()
}




