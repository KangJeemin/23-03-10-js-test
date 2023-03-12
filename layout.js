let root = document.getElementById('root');
let div = document.createElement('div');
root.appendChild(div);

document.getElementsByTagName
for(let i=0;i<6;i++){
  let firstStepdiv = document.createElement('div');
  root.children[0].appendChild(firstStepdiv);
}
for(let i=0;i<2;i++){
let buttondiv1 = document.createElement('div');
root.children[0].children[1].appendChild(buttondiv1);
let buttondiv2 = document.createElement('div');
root.children[0].children[2].appendChild(buttondiv2);
let buttondiv3 = document.createElement('div');
root.children[0].children[3].appendChild(buttondiv3);
let buttondiv4 = document.createElement('div');
root.children[0].children[4].appendChild(buttondiv4);
let buttondiv5 = document.createElement('div');
root.children[0].children[5].appendChild(buttondiv5);
}
root.children[0].style.display="flex";
root.children[0].style.flexDirection="column"
root.children[0].children[1].style.display="none";
root.children[0].children[2].style.display="none";
root.children[0].children[3].style.display="none";
root.children[0].children[4].style.display="none";
root.children[0].children[5].style.display="none";

for(let i=0;i<6;i++){
  let makeDivItems1 = document.createElement('div');
  root.children[0].children[1].children[0].appendChild(makeDivItems1);
  let makeDivItems2 = document.createElement('div');
  root.children[0].children[2].children[0].appendChild(makeDivItems2);
  let makeDivItems3 = document.createElement('div');
  root.children[0].children[3].children[0].appendChild(makeDivItems3);
  let makeDivItems4 = document.createElement('div');
  root.children[0].children[4].children[0].appendChild(makeDivItems4);
  let makeDivItems5 = document.createElement('div');
  root.children[0].children[5].children[0].appendChild(makeDivItems5);
}

for(let i=0;i<2;i++){
  let button1 = document.createElement('button')
  root.children[0].children[1].children[1].appendChild(button1);
  let button2 = document.createElement('button')
  root.children[0].children[2].children[1].appendChild(button2);
  let button3 = document.createElement('button')
  root.children[0].children[3].children[1].appendChild(button3);
  let button4 = document.createElement('button')
  root.children[0].children[4].children[1].appendChild(button4);
  let button5 = document.createElement('button')
  root.children[0].children[5].children[1].appendChild(button5);

}

function setFirstContainer(wid,hei) {
  
  root.children[0].children[0].style.width=wid;
  root.children[0].children[0].style.height=hei;
  let p = document.createElement('p');
  root.children[0].children[0].append(p);
 
}

function setSecondContainer(wid,hei) {
  for(let i=1;i<6;i++){
  root.children[0].children[i].style.width=wid;
  root.children[0].children[i].style.height=hei;
  root.children[0].children[i].style.display="flex"
  root.children[0].children[i].style.flexDirection="column"
  }
}
function setItemContainerSize(wid,hei){
  for(let i=1;i<6;i++){
  root.children[0].children[i].children[0].style.width=wid;
  root.children[0].children[i].children[0].style.height=hei;
  root.children[0].children[i].children[0].style.display="grid";
  root.children[0].children[i].children[0].style.gridTemplateColumns="1fr 1fr 1fr";
}
}
function setButtonContainerSize(wid,hei,){
  for(let i =1;i<6;i++){
  root.children[0].children[i].children[1].style.width=wid;
  root.children[0].children[i].children[1].style.height=hei;
  root.children[0].children[i].children[1].style.display="grid";
  root.children[0].children[i].children[1].style.gridTemplateRows="1fr";
  root.children[0].children[i].children[1].style.gridTemplateColumns="1fr 1fr";
  }

}
function setItemsSize(wid,hei) {
  for(let a=1;a<6;a++){
    for(let i=0;i<5;i++){
    root.children[0].children[a].children[0].children[i].style.width=wid;
    root.children[0].children[a].children[0].children[i].style.height=hei;
    }
  }
}

function setButtonSize(wid,hei){
  for(let a=1;a<6;a++){
   for(let i=0;i<1;i++){
   root.children[0].children[a].children[1].children[i].style.width=wid
   root.children[0].children[a].children[1].children[i].style.height=hei
   root.children[0].children[a].children[1].children[0].textContent="select"
   root.children[0].children[a].children[1].children[1].textContent="back"
   }
  }
}
setFirstContainer("100%","200px")
setSecondContainer("100%","500px")
setItemContainerSize("100%","70%")
setButtonContainerSize("100%","30%")
setItemsSize("100%","100%")
setButtonSize("100%","100%")
console.dir(root);