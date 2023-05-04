function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');

        elemento.innerHTML = '';

        arrTexto.forEach((Letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    };

    const titulo = document.querySelector('.digintando');
    ativaLetra(titulo);
};

escrevendoLetra();

function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')
    
    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
};

menuMobol()

function sobreMin(){

    const divExperiencia = document.querySelectorAll('.experiencia-content div');
    const liExperiencia = document.querySelectorAll('.experiencia-content ul li');
    const divEducacao = document.querySelectorAll('.educacao-content div');
    const liEducacao = document.querySelectorAll('.educacao-content ul li');

    divExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');

    function sliderShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });

        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        });

        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    };

    function sliderShow2(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
        });

        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo');
        });

        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    };

    liExperiencia.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            sliderShow(index)
        });
    });

    liEducacao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            sliderShow2(index)
        });
    });

};

sobreMin()