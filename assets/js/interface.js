document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
      square.addEventListener('click',handleClick);  
    })
})

function handleClick(event){


    if (handleMove(event.target.id)) {
        

        setTimeout(()=>{
            alert(`O vencedor foi ${playerTime}!!`)
        },20)
       
        
    }
    updateSquares();
}

function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }


    })

}