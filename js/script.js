document.addEventListener('DOMContentLoaded', () => {

    const config = {
        xokleng: 'xokleng.html',
        guarani: 'guarani.html',
        kaingang: 'kaingang.html'
    };

    document.querySelectorAll("path").forEach(el => {
        el.style.cursor = 'pointer';

        el.addEventListener('click', (e) => {
            e.stopPropagation();

            if (el.closest("g.kaingang")) {
                window.open(config.kaingang, '_blank');
            } 
            else if (el.closest("g.xokleng")) {
                window.open(config.xokleng, '_blank');
            } 
            else if (el.closest("g.guarani")) {
                window.open(config.guarani, '_blank');
            }
        });
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
            legendinha.style.background = "#dc143c";
        } 
        else if (el.closest("g.xokleng")) {
            legendinha.style.background = "#05b0b6";
        } 
        else if (el.closest("g.guarani")) {
            legendinha.style.background = "#0aa851";
        }

    };

    
    el.onmouseleave = () => {
        legendinha.style.display = "none";
    };

});