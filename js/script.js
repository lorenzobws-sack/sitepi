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
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho1').classList.toggle('active1');
                break;
            case 'Chapecó_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho2').classList.toggle('active2');
                break;
            case 'Porto_União_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho3').classList.toggle('active3');
                break;
            case 'Doutor_Pedrinho_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho4').classList.toggle('active4');
                break;
            case 'José_Boiteux_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho5').classList.toggle('active5');
                break;
            case 'Imaruí_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho6').classList.toggle('active6');
                break;
            case 'Palhoça_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho7').classList.toggle('active7');
                break;
            case 'Biguaçu_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho8').classList.toggle('active8');
                break;
            case 'Araquari_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho9').classList.toggle('active9');
                break;
            case 'São_Francisco_do_Sul_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho10').classList.toggle('active10');
                break;
            case 'Joinville_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho11').classList.toggle('active11');
                break;
            case 'Ibirama_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho12').classList.toggle('active12');
                break;
            case 'Vitor_Meireles_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho13').classList.toggle('active13');
                break;
            case 'Água_Doce_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho14').classList.toggle('active14');
                break;
            case 'Abelardo_Luz_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho15').classList.toggle('active15');
                break;
            case 'Xanxerê_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho16').classList.toggle('active16');
                break;
            case 'Entre_Rios_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho17').classList.toggle('active17');
                break;
            case 'Arvoredo_SC':
                mapinha.classList.toggle('active');
                document.querySelector('.popupzinho18').classList.toggle('active18');
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
        else if (el.closest("g.xokleng")) {
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