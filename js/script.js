let n = 0;


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
    popupzinho1.classList.add('active1');
    if (n === 0 ||n === 1) {
        mapinha.classList.toggle('active');
        
    }
    n = 1;
    break;

case 'Chapecó_SC':
    popupzinho2.classList.add('active2');
    if (n === 0 ||n === 2) {
        mapinha.classList.toggle('active');
        
    }
    n = 2;
    break;

case 'Porto_União_SC':
    popupzinho3.classList.add('active3');
    if (n === 0 ||n === 3) {
        mapinha.classList.toggle('active');
        
    }
    n = 3;
    break;

case 'Doutor_Pedrinho_SC':
    popupzinho4.classList.add('active4');
    if (n === 0 ||n === 4) {
        mapinha.classList.toggle('active');
        
    }
    n = 4;
    break;

case 'José_Boiteux_SC':
    popupzinho5.classList.add('active5');
    if (n === 0 ||n === 5) {
        mapinha.classList.toggle('active');
        
    }
    n = 5;
    break;

case 'Imaruí_SC':
    popupzinho6.classList.add('active6');
    if (n === 0 ||n === 6) {
        mapinha.classList.toggle('active');
        
    }
    n = 6;
    break;

case 'Palhoça_SC':
    popupzinho7.classList.add('active7');
    if (n === 0 ||n === 7) {
        mapinha.classList.toggle('active');
        
    }
    n = 7;
    break;

case 'Biguaçu_SC':
    popupzinho8.classList.add('active8');
    if (n === 0 ||n === 8) {
        mapinha.classList.toggle('active');
        
    }
    n = 8;
    break;

case 'Araquari_SC':
    popupzinho9.classList.add('active9');
    if (n === 0 ||n === 9) {
        mapinha.classList.toggle('active');
        
    }
    n = 9;
    break;

case 'São_Francisco_do_Sul_SC':
    popupzinho10.classList.add('active10');
    if (n === 0 ||n === 10) {
        mapinha.classList.toggle('active');
        
    }
     n = 10;
    break;

case 'Joinville_SC':
    popupzinho11.classList.add('active11');
    if (n === 0 ||n === 11) {
        mapinha.classList.toggle('active');
        
    }
     n = 11;
    break;

case 'Ibirama_SC':
    popupzinho12.classList.add('active12');
    if (n === 0 ||n === 12) {
        mapinha.classList.toggle('active');
        
    }
     n = 12;
    break;

case 'Vitor_Meireles_SC':
    popupzinho13.classList.add('active13');
    if (n === 0 ||n === 13) {
        mapinha.classList.toggle('active');
        
    }
     n = 13;
    break;

case 'Água_Doce_SC':
    popupzinho14.classList.add('active14');
    if (n === 0 ||n === 14) {
        mapinha.classList.toggle('active');
        
    }
     n = 14;
    break;

case 'Abelardo_Luz_SC':
    popupzinho15.classList.add('active15');
    if (n === 0 ||n === 15) {
        mapinha.classList.toggle('active');
        
    }
     n = 15;
    break;

case 'Xanxerê_SC':
    popupzinho16.classList.add('active16');
    if (n === 0 ||n === 16) {
        mapinha.classList.toggle('active');
        
    }
     n = 16;
    break;

case 'Entre_Rios_SC':
    popupzinho17.classList.add('active17');
    if (n === 0 ||n === 17) {
        mapinha.classList.toggle('active');
        
    }
     n = 17;
    break;

case 'Arvoredo_SC':
    popupzinho18.classList.add('active18');
    if (n === 0 ||n === 18) {
        mapinha.classList.toggle('active');
        
    }
     n = 18;
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