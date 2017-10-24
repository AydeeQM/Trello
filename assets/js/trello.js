//recuperamos los id's de los contenedores generales desde html
var divgg = document.getElementById('global');
var div1 = document.getElementById('primero');

//creamos u array para guardar nuestras listas y una funcion constructora
var listaTarea = [];
function lista (title){
    this.title = title;
};

//evento para mostrar el imput
document.getElementById('remover').addEventListener('click', function(){
    var elemento1 = document.getElementById('remover');
    var elemento2 = document.getElementById('botones1');
    elemento1.style.display = "none";
    elemento2.style.display = "block";
});
//evento para ocultar el imput y volver al inicio
document.getElementById('cancela').addEventListener('click', function(){
    var elemento1 = document.getElementById('botones1');
    var elemento2 = document.getElementById('remover');
    elemento1.style.display = "none";
    elemento2.style.display = "block";
    
});

//contadores que nos serviran para crear id's dinamicos
var num = 0;
var ids = 0;

//recuperamos id de boton guardar para ejecutar las acciones siguientes
var boton1 = document.getElementById('addguarda');
boton1.onclick = function(){
    //pusheamos los valores recuperados del input
    var recup = document.getElementById('addingresa').value;
    var arrLista = new lista(recup);
    listaTarea.push(arrLista);
    //para aplicar el salto a la derecha en forma inicial
    var elemento1 = document.getElementById('botones1');
    var elemento2 = document.getElementById('remover');
    elemento1.style.display = "none";
    elemento2.style.display = "block";
    //evaluacion del imput
    if(recup==="")
    {
        alert('Ingresa una lista!!!')
    }
    else
    {
        //creamos el titulo y agregar tarjeta
        var divList = document.createElement('div');
        divList.setAttribute('class','list');
        var divConten = document.createElement('div');
        divConten.setAttribute('class','conten');
        var divHeader = document.createElement('div');
        divHeader.setAttribute('class','header');
        var hdos = document.createElement('h2');
        hdos.setAttribute('class','titulo');
        hdos.setAttribute('contenteditable', 'true');
        var divCard = document.createElement('div');
        divCard.setAttribute('class','cards');
        var linkA = document.createElement('a');
        linkA.setAttribute('class','open_card');
        var enlaceA = document.createTextNode('Agregar Tarjeta...');

        hdos.innerHTML = recup;
        divHeader.appendChild(hdos);
        linkA.appendChild(enlaceA);
        divCard.appendChild(linkA);
        divConten.appendChild(divHeader);
        divConten.appendChild(divCard);
        divList.appendChild(divConten);
        divgg.appendChild(divList);
        
        //al hacer click en 'Agregar tarjeta...' ejecuta las siguientes acciones
        linkA.addEventListener('click', function(){
            linkA.style.display='none';
            num++;//incremetal para el id's de testarea
            var divDDCard = document.createElement('div');
            divDDCard.setAttribute('class','card_details');
            var divCCtext= document.createElement('div');
            divCCtext.setAttribute('class','divtexto');
            var text= document.createElement('textarea');
            text.setAttribute('class','texto');
            text.id = 'textarea'+num;
            var divCControl = document.createElement('div');
            divCControl.setAttribute('class','control');
            var butCard = document.createElement('button');
            butCard.setAttribute('class','but');
            butCard.innerHTML='Agregar';
            ids++;//incremental para los id's de los spam
            var xxCard = document.createElement('span');
            xxCard.setAttribute('class','close_a');
            xxCard.id = 'span'+ids;
            xxCard.innerHTML='X';

            divCCtext.appendChild(text);
            divCControl.appendChild(butCard);
            divCControl.appendChild(xxCard);
            divDDCard.appendChild(divCCtext);
            divDDCard.appendChild(divCControl);
            divCard.appendChild(divDDCard);
            
            //Al hacer click en 'Agregar' ejecuta las acciones de agregar las tareas
            butCard.addEventListener('click', function(){
                var divtres = document.createElement('div');
                divtres.setAttribute('class','conten_listap');
                var ptext = document.createElement('p');
                ptext.setAttribute('contenteditable', 'true');
                var recuperando = document.getElementById('textarea'+num).value;
                ptext.innerHTML= recuperando;
                divtres.appendChild(ptext);
                divCard.appendChild(divtres);
                divDDCard.style.display ='none';
                linkA.style.display='block';
            });
            
            //al hacer click en el spam 'X' regresa a la accion anterior
            document.getElementById('span'+ids).addEventListener('click', function(){
                divDDCard.style.display = "none";
                linkA.style.display = "block";
            });
        });
        //limpia para el nuevo input
        document.getElementById('addingresa').value='';
    }
}










