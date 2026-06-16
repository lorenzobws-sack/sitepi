let n = 0;
let c = 0;

const mapinha = document.querySelector('.mapinha');

const popupzinhos = Array.from({length: 18}, (_, i) =>
    document.querySelector(`.popupzinho${i + 1}`)
);
const cidadinhas = Array.from({length: 18}, (_, i) =>
    document.querySelector(`.cidadinha${i + 1}`)
);

const cidades = [
    'Saudades_SC', 'Chapecó_SC', 'Porto_União_SC', 'Doutor_Pedrinho_SC',
    'José_Boiteux_SC', 'Imaruí_SC', 'Palhoça_SC', 'Biguaçu_SC',
    'Araquari_SC', 'São_Francisco_do_Sul_SC', 'Joinville_SC', 'Ibirama_SC',
    'Vitor_Meireles_SC', 'Água_Doce_SC', 'Abelardo_Luz_SC', 'Xanxerê_SC',
    'Entre_Rios_SC', 'Arvoredo_SC'
];

function fecharTodos() {
    cidades.forEach((_, i) => {
        popupzinhos[i].classList.remove(`active${i + 1}`);
        cidadinhas[i].classList.remove(`active${i + 1}`);
    });
}

document.querySelectorAll("path").forEach(el => {
    el.style.cursor = 'pointer';

    el.addEventListener('click', (e) => {
        e.stopPropagation();

        const index = cidades.indexOf(el.id);
        if (index === -1) return;

        const jaAberto = popupzinhos[index].classList.contains(`active${index + 1}`);

        fecharTodos();

        if (jaAberto) {
            // estava aberto: fecha tudo e fecha o mapa
            mapinha.classList.remove('active');
            n = 0;
            c = 0;
        } else {
            // estava fechado: abre o novo
            popupzinhos[index].classList.add(`active${index + 1}`);
            cidadinhas[index].classList.add(`active${index + 1}`);
            mapinha.classList.add('active');
            n = index + 1;
            c = 1;
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