var i=1;
var choice;
var array=[0,0,0,0,0,0,0,0,0];
var count=0;
var xwin=0;
var ywin=0;

//function to update choice
function updateChoice()
{
    var trn_ele=document.querySelector(".turn_p");
    trn=trn_ele.innerText;

    if(i%2==0)
    {
        choice=2;
        i++;
    }
    else{
        choice=1;
        i++;
    }

    if(choice==1)
    {
        trn_ele.innerHTML="X choice";
    }
    else if(choice==2)
    {
        trn_ele.innerHTML="O choice";
    }
    return choice;
}
//function to hover choice
function showMove(event)
{
    parent=event.target;
    ch=parent.querySelector(".mark_img");

        if(ch!=null && !ch.classList.contains('put'))
        {
            if(choice==1)
            {
                ch.src="cross.svg";
            }
            else
            {
                ch.src="zero.svg";
            }
            ch.classList.toggle("fadeIn");
        }
}
//function for move clicked
function moveClicked(event,pos)
{
    parent=event.target;

    if(choice==1)
    {
        parent.src="cross.svg";
    }
    else
    {
        parent.src="zero.svg";
    }
        if(parent!=null)
        {
            parent.classList.remove('fadeIn')
            parent.classList.add("put");
            count++;
            updateScore(choice,pos);  //update score
            updateChoice();           //update choice
            checkwin(count);          //check for winner
            
        }
}
//function to update score
function updateScore(choice,pos)
{
    if(choice==1)
    {
        array[pos-1]='X';
    }
    else
    {
        array[pos-1]='O';
    }
}
//function to check winner
function checkwin()
{
    if(count==9)
    {
        showDraw();
    }
    else if(array[0]=='X' && array[1]=='X' && array[2]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[3]=='X' && array[4]=='X' && array[5]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[6]=='X' && array[7]=='X' && array[8]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[0]=='X' && array[4]=='X' && array[8]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[2]=='X' && array[4]=='X' && array[6]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[0]=='X' && array[3]=='X' && array[6]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[1]=='X' && array[4]=='X' && array[7]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }
    else if(array[2]=='X' && array[5]=='X' && array[8]=='X')
    {
        xwin++;
        showXwin();
        showScore();
    }                //zero 
    else if(array[0]=='O' && array[1]=='O' && array[2]=='O')
    {
        ywin++;
        showYwin();
        showScore();
        showScore();
    }
    else if(array[3]=='O' && array[4]=='O' && array[5]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[6]=='O' && array[7]=='O' && array[8]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[0]=='O' && array[4]=='O' && array[8]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[2]=='O' && array[4]=='O' && array[6]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[0]=='O' && array[3]=='O' && array[6]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[1]=='O' && array[4]=='O' && array[7]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }
    else if(array[2]=='O' && array[5]=='O' && array[8]=='O')
    {
        ywin++;
        showYwin();
        showScore();
    }

}
function refresh()
{
    var marks=document.querySelectorAll(".mark_img");
    console.log(marks.length);

    for(var k=0 ; k<marks.length ;k++)
    {
        marks[k].classList.remove("put");
    }
    for(var j=0; j<9 ;j++)
    {
        array[j]=0;
    }
    i=1;
    count=0;
    updateChoice();

    var board=document.querySelector(".main-container");
    var xwin=document.querySelector(".Xwin");
    var ywin=document.querySelector(".Ywin");
    var drw=document.querySelector(".draw");
    var trn_ele=document.querySelector(".turn_p");

    board.classList.remove("fadeOut");
    trn_ele.classList.remove("fadeOut")
    xwin.classList.remove("put");
    ywin.classList.remove("put");
    drw.classList.remove("put");
    xwin.classList.add("fadeOut");
    ywin.classList.add("fadeOut");
    drw.classList.add("fadeOut");
    board.classList.add("put");
    trn_ele.classList.add("put");

    console.log(i);
    console.log(choice);
    
    
}
function showXwin()
{
    var trn_ele=document.querySelector(".turn_p");
    var board=document.querySelector(".main-container");
    var xwin=document.querySelector(".Xwin");
    trn_ele.classList.remove("put");
    trn_ele.classList.add("fadeOut");
    board.classList.remove("put");
    board.classList.add("fadeOut");
    xwin.classList.remove("fadeOut");
    xwin.classList.add("put");
}
function showYwin()
{
    var trn_ele=document.querySelector(".turn_p");
    var board=document.querySelector(".main-container");
    var ywin=document.querySelector(".Ywin");
    trn_ele.classList.remove("put");
    trn_ele.classList.add("fadeOut");
    board.classList.remove("put");
    board.classList.add("fadeOut");
    ywin.classList.remove("fadeOut");
    ywin.classList.add("put");
}
function showDraw()
{
    var trn_ele=document.querySelector(".turn_p");
    var board=document.querySelector(".main-container");
    var drw=document.querySelector(".draw");

    trn_ele.classList.remove("put");
    trn_ele.classList.add("fadeOut");
    board.classList.remove("put");
    board.classList.add("fadeOut");
    drw.classList.remove("fadeOut");
    drw.classList.add("put");
}
function showScore()
{
    xScore=document.querySelector(".score_x");
    yScore=document.querySelector(".score_y");

    xScore.innerHTML=xwin;
    yScore.innerHTML=ywin;
}
updateChoice();
