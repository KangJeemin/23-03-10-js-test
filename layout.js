let root = document.getElementById('root');
let div = document.createElement('div');
root.appendChild(div);

document.getElementsByTagName
for(let i=0;i<2;i++){
  let firstStepdiv = document.createElement('div');
  root.children[0].appendChild(firstStepdiv);
}
for(let i=0;i<2;i++){
let buttondiv = document.createElement('div');
root.children[0].children[1].appendChild(buttondiv);
}
root.children[0].style.display="flex";
root.children[0].style.flexDirection="column"

for(let i=0;i<6;i++){
  let makeDivItems = document.createElement('div');
  root.children[0].children[1].children[0].appendChild(makeDivItems);
}

for(let i=0;i<2;i++){
  let button = document.createElement('button')
  root.children[0].children[1].children[1].appendChild(button);
}

function setFirstContainer(wid,hei) {
  
  root.children[0].children[0].style.width=wid;
  root.children[0].children[0].style.height=hei;
  let p = document.createElement('p');
  root.children[0].children[0].append(p);
 
}

function setSecondContainer(wid,hei) {
  root.children[0].children[1].style.width=wid;
  root.children[0].children[1].style.height=hei;
  root.children[0].children[1].style.display="flex"
  root.children[0].children[1].style.flexDirection="column"

  
}
function setItemContainerSize(wid,hei){
  root.children[0].children[1].children[0].style.width=wid;
  root.children[0].children[1].children[0].style.height=hei;
  root.children[0].children[1].children[0].style.display="grid";
  root.children[0].children[1].children[0].style.gridTemplateColumns="1fr 1fr 1fr";
  root.children[0].children[1].children[0].style.gridTemplateRows="1fr 1fr ";

}
function setButtonContainerSize(wid,hei,){
  root.children[0].children[1].children[1].style.width=wid;
  root.children[0].children[1].children[1].style.height=hei;
  root.children[0].children[1].children[1].style.display="grid";
  root.children[0].children[1].children[1].style.gridTemplateRows="1fr";
  root.children[0].children[1].children[1].style.gridTemplateColumns="1fr 1fr";


}
function setItemsSize(wid,hei) {
  
  for(let i=0;i<6;i++){
  root.children[0].children[1].children[0].children[i].style.width=wid;
  root.children[0].children[1].children[0].children[i].style.height=hei;
  }
}

function setButtonSize(wid,hei){
  for(let i=0;i<2;i++){
  root.children[0].children[1].children[1].children[i].style.width=wid
  root.children[0].children[1].children[1].children[i].style.height=hei
  root.children[0].children[1].children[1].children[0].textContent="select"
  root.children[0].children[1].children[1].children[1].textContent="back"


  }
}
setFirstContainer("100%","200px")
setSecondContainer("100%","500px")
setItemContainerSize("100%","70%")
setButtonContainerSize("100%","30%")
setItemsSize("100%","100%")
setButtonSize("100%","100%")
console.dir(root);