/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.

*/

//Struttura dati array
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];

//BONUS 2 creazione delle option da aggiungere dinamicamente nella select
const selectOption = document.getElementById('iconSelect');
const typeOption = [];
for(let i = 0; i < icons.length; i++){
    if(!typeOption.includes(icons[i].type)){
        typeOption.push(icons[i].type);
        const optionCreate = document.createElement('option');
        optionCreate.value = icons[i].type;
        optionCreate.text = icons[i].type;
        selectOption.appendChild(optionCreate);
    }
}
//sviluppiamo il tpl da aggiungere in html per generare i box con le apposite variabili
function createTpl(icon){
    const colTpl = `
            <div class="col-12 col-md-4 col-xl-3">
                <div class="c92-boxShadow card d-flex flex-column text-center py-4 m-4">
                    <i class=" ${icon.prefix}${icon.family} ${icon.prefix}${icon.name} py-2" style="color:${icon.color}"></i>
                    <h6 class="text-uppercase"> ${icon.name} </h6>
                </div>
            </div>
    `;
    return colTpl;
}


//andiamo a prendere l'id della select per attaccarci l'evento  
const changeSelect = document.getElementById('iconSelect');

changeSelect.addEventListener('change',() => {
    //prendiamo il value nella select per visualizzare solo gli object che fanno parte di quella type
    const valueSelect = document.getElementById('iconSelect').value;
    console.log(valueSelect);
    //array filtrato per stampare a schermo solo i type selezionati dalla select
    const filterIcons = icons.filter((icon) =>{
        const selectedType = changeSelect.value;
        return (selectedType === 'all') ? true : icon.type === selectedType;
    });
    init(filterIcons);
});

function init(filterIcons){
    const containerIcon = document.querySelector('.row');
    let content = '';
    for(let i = 0; i < filterIcons.length; i++){
        const template = createTpl(filterIcons[i]);
        content += template;
    }
    containerIcon.innerHTML = content;
   
}
init(icons);