
const addPlayer1Btn = document.querySelector("#add-player1");
const addPlayer2Btn = document.querySelector("#add-player2");
const addPlayer3Btn = document.querySelector("#add-player3");
const addPlayerABtn = document.querySelector("#add-playerA");
const btnSortear = document.querySelector("#btn-sortear");



addPlayerABtn.addEventListener('click', () => {
    
    const playersContainer = document.querySelector("#playersA");
    const inputNameA = document.querySelector("#inputNameA");
    
    let newPlayer = document.createElement('button');
    newPlayer.textContent = inputNameA.value;
    newPlayer.setAttribute('id',`${inputNameA.value}`);
    newPlayer.setAttribute('onclick',`eliminarBoton(this)`);
    newPlayer.classList.add(`m-1`);
    newPlayer.classList.add(`btn`);
    newPlayer.classList.add(`btn-info`);
    playersContainer.appendChild(newPlayer);
    inputNameA.value = "";
});



addPlayer1Btn.addEventListener('click', () => {
    
    const playersContainer = document.querySelector("#players1");
    const inputName1 = document.querySelector("#inputName1");
    
    let newPlayer = document.createElement('button');
    newPlayer.textContent = inputName1.value;
    newPlayer.setAttribute('id',`${inputName1.value}`);
    newPlayer.setAttribute('onclick',`eliminarBoton(this)`);
    newPlayer.classList.add(`m-1`);
    newPlayer.classList.add(`btn`);
    newPlayer.classList.add(`btn-info`);
    playersContainer.appendChild(newPlayer);
    inputName1.value = "";
});

addPlayer2Btn.addEventListener('click', () => {
    
    const playersContainer = document.querySelector("#players2");
    const inputName2 = document.querySelector("#inputName2");
    
    let newPlayer = document.createElement('button');
    newPlayer.textContent = inputName2.value;
    newPlayer.setAttribute('id',`${inputName2.value}`);
    newPlayer.setAttribute('onclick',`eliminarBoton(this)`);
    newPlayer.classList.add(`m-1`);
    newPlayer.classList.add(`btn`);
    newPlayer.classList.add(`btn-info`);
    playersContainer.appendChild(newPlayer);
    inputName2.value = "";
});

addPlayer3Btn.addEventListener('click', () => {
    
    const playersContainer = document.querySelector("#players3");
    const inputName3 = document.querySelector("#inputName3");
    
    let newPlayer = document.createElement('button');
    newPlayer.textContent = inputName3.value;
    newPlayer.setAttribute('id',`${inputName3.value}`);
    newPlayer.setAttribute('onclick',`eliminarBoton(this)`);
    newPlayer.classList.add(`m-1`);
    newPlayer.classList.add(`btn`);
    newPlayer.classList.add(`btn-info`);
    playersContainer.appendChild(newPlayer);
    inputName3.value = "";
});


btnSortear.addEventListener('click', () => {

    const mostrarA = document.querySelector('#team-a');
    const mostrarB = document.querySelector('#team-b');

    mostrarA.textContent = "";
    mostrarB.textContent = "";

    let equipoA = [];
    let equipoB = [];
    let bomboArquero = [];
    let bombo1 = [];
    let bombo2 = [];
    let bombo3 = [];
    
    document.querySelectorAll('#playersA button').forEach(item=> bomboArquero.push(item.id));
    document.querySelectorAll('#players1 button').forEach(item=> bombo1.push(item.id));
    document.querySelectorAll('#players2 button').forEach(item=> bombo2.push(item.id));
    document.querySelectorAll('#players3 button').forEach(item=> bombo3.push(item.id));


    bomboArquero = bomboArquero.map(i=> [i,getRandomValue()]).sort((a,b) => b[1]-a[1]);
    bombo1 = bombo1.map(i=> [i,getRandomValue()]).sort((a,b) => b[1]-a[1]);
    bombo2 = bombo2.map(i=> [i,getRandomValue()]).sort((a,b) => b[1]-a[1]);
    bombo3 = bombo3.map(i=> [i,getRandomValue()]).sort((a,b) => b[1]-a[1]);

    equipoA = [...bomboArquero.filter((_,i)=> i % 2 === 0),...bombo1.filter((_,i)=> i % 2 === 0),...bombo2.filter((_,i)=> i % 2 === 0),...bombo3.filter((_,i)=> i % 2 === 0)];
    equipoB = [...bomboArquero.filter((_,i)=> i % 2 === 1),...bombo1.filter((_,i)=> i % 2 === 1),...bombo2.filter((_,i)=> i % 2 === 1),...bombo3.filter((_,i)=> i % 2 === 1)];




    
    equipoA.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item[0];
        mostrarA.appendChild(li);
    });

    equipoB.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item[0];
        mostrarB.appendChild(li);
    });


})

function getRandomValue(){
    const min = 1;
    const max = 99;
    const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numAleatorio;
}




function eliminarBoton(boton) {
    boton.remove();  // Elimina el botón que fue clicado
  }

//console.log(addPlayerBtn)

