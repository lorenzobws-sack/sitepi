let n = 0;
let c = 0;

const mapinha = document.querySelector('.mapinha');
const popupzinho1 = document.querySelector('.popupzinho1');
const popupzinho2 = document.querySelector('.popupzinho2');
const popupzinho3 = document.querySelector('.popupzinho3');
const popupzinho4 = document.querySelector('.popupzinho4');
const popupzinho5 = document.querySelector('.popupzinho5');
const popupzinho6 = document.querySelector('.popupzinho6');
const popupzinho7 = document.querySelector('.popupzinho7');
const popupzinho8 = document.querySelector('.popupzinho8');
const popupzinho9 = document.querySelector('.popupzinho9');
const popupzinho10 = document.querySelector('.popupzinho10');
const popupzinho11 = document.querySelector('.popupzinho11');
const popupzinho12 = document.querySelector('.popupzinho12');
const popupzinho13 = document.querySelector('.popupzinho13');
const popupzinho14 = document.querySelector('.popupzinho14');
const popupzinho15 = document.querySelector('.popupzinho15');
const popupzinho16 = document.querySelector('.popupzinho16');
const popupzinho17 = document.querySelector('.popupzinho17');
const popupzinho18 = document.querySelector('.popupzinho18');


document.querySelectorAll("path").forEach(el => {
    el.style.cursor = 'pointer';

    el.addEventListener('click', (e) => {
        e.stopPropagation();

        switch(el.id) {
           case 'Saudades_SC':
              
    popupzinho1.classList.toggle('active1');
    if (n === 0 ||n === 1) {
        mapinha.classList.toggle('active');
        c++;
    }
    
    n = 1;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Chapecó_SC':
    popupzinho2.classList.toggle('active2');
    if (n === 0 ||n === 2) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 2;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Porto_União_SC':
    popupzinho3.classList.toggle('active3');
    if (n === 0 ||n === 3) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 3;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Doutor_Pedrinho_SC':
    popupzinho4.classList.toggle('active4');
    if (n === 0 ||n === 4) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 4;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'José_Boiteux_SC':
    popupzinho5.classList.toggle('active5');
    if (n === 0 ||n === 5) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 5;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Imaruí_SC':
    popupzinho6.classList.toggle('active6');
    if (n === 0 ||n === 6) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 6;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Palhoça_SC':
    popupzinho7.classList.toggle('active7');
    if (n === 0 ||n === 7) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 7;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Biguaçu_SC':
    popupzinho8.classList.toggle('active8');
    if (n === 0 ||n === 8) {
        mapinha.classList.toggle('active');
        c++; 
    }
    n = 8;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'Araquari_SC':
    popupzinho9.classList.toggle('active9');
    if (n === 0 ||n === 9) {
        mapinha.classList.toggle('active');
        c++;
    }
    n = 9;
    if(c%2 == 0){
        n=0;
    }
    break;

case 'São_Francisco_do_Sul_SC':
    popupzinho10.classList.toggle('active10');
    if (n === 0 ||n === 10) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 10;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Joinville_SC':
    popupzinho11.classList.toggle('active11');
    if (n === 0 ||n === 11) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 11;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Ibirama_SC':
    popupzinho12.classList.toggle('active12');
    if (n === 0 ||n === 12) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 12;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Vitor_Meireles_SC':
    popupzinho13.classList.toggle('active13');
    if (n === 0 ||n === 13) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 13;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Água_Doce_SC':
    popupzinho14.classList.toggle('active14');
    if (n === 0 ||n === 14) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 14;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Abelardo_Luz_SC':
    popupzinho15.classList.toggle('active15');
    if (n === 0 ||n === 15) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 15;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Xanxerê_SC':
    popupzinho16.classList.toggle('active16');
    if (n === 0 ||n === 16) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 16;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Entre_Rios_SC':
    popupzinho17.classList.toggle('active17');
    if (n === 0 ||n === 17) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 17;
     if(c%2 == 0){
        n=0;
    }
    break;

case 'Arvoredo_SC':
    popupzinho18.classList.toggle('active18');
    if (n === 0 ||n === 18) {
        mapinha.classList.toggle('active');
        c++;
    }
     n = 18;
     if(c%2 == 0){
        n=0;
    }
    break;
        }
    });
});

const legendinha = document.getElementById("legendinha");


document.querySelectorAll("g.kaingang path, g.xokleng path, g.guarani path").forEach(el => {

    el.onmousemove = (e) => {
        legendinha.style.display = "block";
        legendinha.style.left = e.pageX + 10 + "px";
        legendinha.style.top = e.pageY + 10 + "px";
        legendinha.textContent = el.id.replace("_SC", "").replaceAll("_", " ");

         if (el.closest("g.kaingang")) {
            legendinha.style.background = "rgba(248, 0, 0, 0.744)";
        } 
         if (el.closest("g.xokleng")) {
            legendinha.style.background = "rgba(0, 240, 248, 0.644)";
        } 
        else if (el.closest("g.guarani")) {
            legendinha.style.background = "rgba(0, 248, 12, 0.644)";
        }

    };

    
    el.onmouseleave = () => {
        legendinha.style.display = "none";
    };

});