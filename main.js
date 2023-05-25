let btn_flutuante = document.querySelector('#btn-flutuante');
let menu = document.querySelector('#menu');
let btn_addtxt = document.querySelector('#btn-addtxt');
let txt_padrao = document.querySelector('#txt-padrao');
let btn_limpartxt = document.querySelector('#btn-limpartxt');
let menu_flutuante = document.querySelector('.menu-flutuante');
let btnMenu = document.querySelector('#menu');
let container_tarefas = document.querySelector('.container-tarefas');
let tarefas_cont = document.querySelector('#tarefas-cont');
let lista = document.querySelectorAll('.container-tarefas .tarefas');
let form = document.querySelector('.form');

/* removendo a classe para o menu descer */
btnMenu.addEventListener('click', function() 
{
    menu_flutuante.classList.remove('menu-flutuante_active');
});

btn_flutuante.addEventListener('click', function ()
{
    menu_flutuante.classList.toggle('menu-flutuante_active');
});

var tarefa_larg = lista.length;

/* botao para limpar a tarefa */
btn_limpartxt.addEventListener('click', function (e) 
{
    e.preventDefault();
    form.tarefa.value = '';
});

/* add a tarefa e trim */
function AddTarefa() 
{
    const tarefa_txt = form.tarefa.value.trim();
    if (tarefa_txt.length) 
    {
        tarefa_larg = tarefa_larg + 1;
        tarefas_cont.innerHTML = " " + tarefa_larg;
        gerarTarefa(tarefa_txt);
        form.reset();
    } 
    else 
    {
        alert("Adicione uma tarefa!");
    }
    // fecha o menu
    menu_flutuante.classList.remove('menu-flutuante_active'); 
}

btn_addtxt.addEventListener('click', function (e) 
{
    e.preventDefault();
    AddTarefa();
});

// funcao para add tarefa com o enter
form.tarefa.addEventListener('keypress', function (event) 
{
    if (event.key === 'Enter') 
    {
        event.preventDefault();
        AddTarefa();
    }
});

/* adicionar o html da tarefa */
const gerarTarefa = (tarefa_txt) => 
{
    const html = `<div class="tarefas" id="todo_${tarefa_larg}">
        <p>
            <input type="checkbox">
            ${tarefa_txt}
        </p>
    </div>`;
    if (tarefa_larg > 0) 
    {
        txt_padrao.style.opacity = '0';
    }
    container_tarefas.innerHTML += html;
};

// riscar a tarefa quando clickar
container_tarefas.addEventListener('click', function (e) 
{
    if (e.target.type === 'checkbox') 
    {
        const tarefas = e.target.parentNode;
        if (e.target.checked) 
        {
            tarefas.style.textDecoration = 'line-through';
            tarefa_larg = tarefa_larg - 1;
        } 
        else 
        {
            tarefas.style.textDecoration = 'none';
            tarefa_larg = tarefa_larg + 1;
        }
        tarefas_cont.innerHTML = " " + tarefa_larg;
    }
});

// verificar se tem tarefa para exibir a msg
if (tarefa_larg === 0) 
{
    txt_padrao.style.opacity = '1';
}