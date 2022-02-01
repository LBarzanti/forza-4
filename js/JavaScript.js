var turno=1;
var posizione=[];
function cella(pos) 
{
    
    while (posizione[pos]==1 || posizione[pos]==2) 
    {
        pos=pos-7;
    }
    
    if (turno==1) 
    {
        document.getElementById(pos).style.backgroundColor="red";
        controllo=turno;
        posizione[pos]=1;
        turno++;
    }
    else if (turno==2)
    {
        document.getElementById(pos).style.backgroundColor="yellow";
        controllo=turno;
        posizione[pos]=2;
        turno--;
    }
    for (let i = 0; i < 42; i++) 
    {
        checkrow(i, controllo);
        checkcol(i, controllo);
        rightDiag(i, controllo);
        leftDiag(i, controllo);
    }
}

function checkrow(i, controllo) 
{
    if (posizione[i]==posizione[i+1] && posizione[i+1] == posizione[i+2] && posizione[i+2] == posizione[i+3] && posizione[i]==controllo)
    {
        
        window.alert( "Ha vinto il giocatore"+ controllo +"!!");
        location.reload();
    } 
}

function checkcol(i, controllo) 
{
    if (posizione[i]==posizione[i+7] && posizione[i+7] == posizione[i+14] && posizione[i+14] == posizione[i+21] && posizione[i]==controllo) 
    {
        window.alert( "Ha vinto il giocatore"+ controllo +"!!");
        location.reload();
    }
}

function rightDiag(i, controllo) 
{
    if (posizione[i]==posizione[i+8] && posizione[i+8] == posizione[i+16] && posizione[i+16] == posizione[i+24] && posizione[i]==controllo) 
        {
            window.alert( "Ha vinto il giocatore"+controllo+"!!");
            location.reload();
        }
}

function leftDiag(i, controllo) 
{
    if (posizione[i]==posizione[i+6] && posizione[i+6] == posizione[i+12] && posizione[i+12] == posizione[i+18] && posizione[i]==controllo) 
        {
            window.alert( "Ha vinto il giocatore"+controllo+"!!");
            location.reload();
        }
}

function rigioca () 
{
    for (let i=1; i <= 42; i++) 
    {
        document.getElementById(i).style.backgroundColor="unset";
        posizione[i]=0
    }
   
    
}