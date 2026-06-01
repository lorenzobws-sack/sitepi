document.addEventListener('DOMContentLoaded', () => {
    
    const config = {
        xokleng: 'xokleng.html',
        guarani: 'guarani.html',
        kaingang: 'kaingang.html'
    };

    Object.keys(config).forEach(classe => {
        const elementos = document.querySelectorAll(`.${classe}`);

        elementos.forEach(el => {
            el.style.cursor = 'pointer';

            el.addEventListener('click', () => {
                window.open(config[classe], '_blank');
            });
        });
    });

});