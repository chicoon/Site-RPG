(()=>{
    let background = document.querySelector('#background');
    let continuar = document.querySelector('#continuar');
    let novo = document.querySelector('#novo');
    let voltar = document.querySelector('#voltar');
    let scroll = document.querySelector('#scroll');
    let scroll_middle = document.querySelector('#scroll-middle');
    let last_screen = 3;
    let actual_screen = 0;
    let screen = document.querySelector(`#screen-${actual_screen}`);

    let ficha = {
        nome: 'bomdia',
        raca: 'orc',
        idade: 80,
    }

    console.log(ficha);
    console.log('======================');
    console.log(ficha.nome);

    
    window.addEventListener('load', ()=>{ 
        enter_and_open();
    })
    
    
    //click dos botoes
    
    continuar.addEventListener('click', ()=>{
       if(actual_screen < last_screen ){
        continue_ficha();
        actual_screen++;
        setTimeout(()=>{
            screen.style.display = 'none';
            screen = document.querySelector(`#screen-${actual_screen}`);
            screen.style.display = 'flex';
        },2000)
       }else{
           alert('Não tem mais paginas pra avancar');
       }
    });
    
    novo.addEventListener('click', ()=>{
        continue_ficha();
        actual_screen++;
        setTimeout(()=>{
            screen.style.display = 'none';
            screen = document.querySelector(`#screen-${actual_screen}`);
            screen.style.display = 'flex';
            novo.style.display = 'none';
            voltar.style.display = 'inline';
            continuar.style.display = 'inline';
        },2000)
    });
    
    voltar.addEventListener('click', ()=>{
        if(actual_screen > 0){
            turn_back();
            actual_screen--;
            setTimeout(()=>{
                screen.style.display = 'none';
                screen = document.querySelector(`#screen-${actual_screen}`);
                screen.style.display = 'flex';
                if(actual_screen == 0){
                    novo.style.display = 'inline';
                    voltar.style.display = 'none';
                    continuar.style.display = 'none';
                }
            },2000)            
        }else{
            alert('Não foi encontrada uma pagina anterior');
        }
    });
    
    
    //animacoes das telas
    function turn_back(){
        add_animation(scroll_middle,'close-middle');
        setTimeout(()=>{
            scroll_middle.style.height = 0 + 'px';
            remove_animation(scroll_middle,'close-middle');
            add_animation(scroll, 'scroll-exit');
            setTimeout(()=>{
                remove_animation(scroll, 'scroll-exit');
                add_animation(scroll, 'enter-bottom');
                setTimeout(()=>{
                    remove_animation(scroll, 'enter-bottom');
                    add_animation(scroll_middle,'open-middle');
                    setTimeout(()=>{
                        remove_animation(scroll_middle,'open-middle');
                        scroll_middle.style.height = (window.innerHeight - 280) + 'px';
                    },1000)                
                },1000)
            },1000);
        },1000);
    }
    
    function continue_ficha(){
        add_animation(scroll_middle, 'close-middle');
        setTimeout(()=>{
            remove_animation(scroll_middle, 'close-middle');
            scroll_middle.style.height = 0 + 'px';
            add_animation(scroll, 'exit-bottom');
            setTimeout(()=>{
                remove_animation(scroll, 'exit-bottom');
                enter_and_open(); 
            },1000);      
        },1000);
    }
    
    function enter_and_open(){
        add_animation(scroll, 'scroll-enter');    
        setTimeout(()=>{
            remove_animation(scroll, 'scroll-enter');
            add_animation(scroll_middle, 'open-middle');
            setTimeout(()=>{
                remove_animation(scroll_middle, 'open-middle');
                scroll_middle.style.height = (window.innerHeight - 280) + 'px';
            },1000);       
        },1000);
    }
    
    //adicionar e remover animacoes do elemento (elemento, 'nome-classe-animacao')
    function add_animation(element, animation){
        element.classList.add(animation);
    };
    
    function remove_animation(element, animation){
        element.classList.remove(animation);
    };
})()






