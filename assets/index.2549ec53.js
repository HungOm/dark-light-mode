import{s as f}from"./vendor.856ca57a.js";const p=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};p();var k="https://hungom.github.io/dark-light-mode/assets/undraw_proud_coder_dark.d5ff78e3.svg",y="https://hungom.github.io/dark-light-mode/assets/undraw_proud_coder_light.24c4ad4c.svg",b="https://hungom.github.io/dark-light-mode/assets/undraw_feeling_proud_dark.4a8b9ae0.svg",v="https://hungom.github.io/dark-light-mode/assets/undraw_feeling_proud_light.543d48ab.svg",_="https://hungom.github.io/dark-light-mode/assets/undraw_conceptual_idea_dark.02a00b1e.svg",S="https://hungom.github.io/dark-light-mode/assets/undraw_conceptual_idea_light.0906a0fa.svg";f.exports.polyfill();const L=document.querySelectorAll("a"),q=document.querySelectorAll("section"),d=document.querySelector('input[type="checkbox"]'),n=document.querySelector("#toggle-icon"),i=document.querySelector("nav"),w=document.querySelector("#image1"),C=document.querySelector("#image2"),E=document.querySelector("#image3"),u=document.querySelector("#text-box");function I(t,r){let a=r.href.split("#")[1];return Array.prototype.slice.call(t).filter(e=>a===e.id)[0].scrollIntoView({behavior:"smooth"})}L.forEach(t=>{t.addEventListener("click",()=>{I(q,t)})});function g(t){w.src=t==="dark"?k:y,C.src=t==="dark"?b:v,E.src=t==="dark"?_:S}function h(){i.style.backgroundColor="rgb(0 0 0 /50%)",u.style.backgroundColor="rgb(255 255 255 /50%)",n.children[0].textContent="Dark Mode",n.children[1].classList.replace("fa-sun","fa-moon"),g("dark")}function m(){i.style.backgroundColor="rgb(255 255 255 /50%)",u.style.backgroundColor="rgb(0 0 0 /50%)",n.children[0].textContent="Light Mode",n.children[1].classList.replace("fa-moon","fa-sun"),g("light")}function x(t){t.preventDefault(),t.target.checked?(document.documentElement.setAttribute("data-theme","dark"),h(),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),m(),localStorage.setItem("theme","light"))}d.addEventListener("change",x);const c=localStorage.getItem("theme");console.log(c);c?(document.documentElement.setAttribute("data-theme",c),c==="dark"&&(d.checked=!0,h())):(d.checked=!1,m());