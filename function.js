let sentence = ["빈배열"];
let nameArray = [_EXAMDATA.teamInformation.teamAllMember[0].name,_EXAMDATA.teamInformation.teamAllMember[1].name,_EXAMDATA.teamInformation.teamAllMember[2].name,_EXAMDATA.teamInformation.teamAllMember[3].name,_EXAMDATA.teamInformation.teamAllMember[4].name]
let foodArray =[_EXAMDATA.teamInformation.teamAllMember[0].food,_EXAMDATA.teamInformation.teamAllMember[1].food,_EXAMDATA.teamInformation.teamAllMember[2].food,_EXAMDATA.teamInformation.teamAllMember[3].food,_EXAMDATA.teamInformation.teamAllMember[4].food,]
let languegeArray = [_EXAMDATA.teamInformation.teamAllMember[0].languege,_EXAMDATA.teamInformation.teamAllMember[1].languege,_EXAMDATA.teamInformation.teamAllMember[2].languege,_EXAMDATA.teamInformation.teamAllMember[3].languege,_EXAMDATA.teamInformation.teamAllMember[4].languege,]

let count =0;

if(count==0){
  for(let i=0;i<nameArray.length;i++){
    root.children[0].children[1].children[0].children[i].innerHTML=nameArray[i];
  }
//테두리 색깔 적용 이벤트
  root.children[0].children[1].children[0].children[0].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="3px solid #00FFFF";
    root.children[0].children[1].children[0].children[1].style.border="";
    root.children[0].children[1].children[0].children[2].style.border="";
    root.children[0].children[1].children[0].children[3].style.border="";
    root.children[0].children[1].children[0].children[4].style.border="";
   sentence.push(e.target.textContent);
   console.log(sentence)
     root.children[0].children[0].textContent=new String(sentence);
  })
  root.children[0].children[1].children[0].children[1].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="";
    root.children[0].children[1].children[0].children[1].style.border="3px solid #00FFFF";
    root.children[0].children[1].children[0].children[2].style.border="";
    root.children[0].children[1].children[0].children[3].style.border="";
    root.children[0].children[1].children[0].children[4].style.border="";
    sentence.splice(0,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[1].children[0].children[2].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="";
    root.children[0].children[1].children[0].children[1].style.border="";
    root.children[0].children[1].children[0].children[2].style.border="3px solid #00FFFF";
    root.children[0].children[1].children[0].children[3].style.border="";
    root.children[0].children[1].children[0].children[4].style.border="";
    sentence.splice(0,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  })
  root.children[0].children[1].children[0].children[3].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="";
    root.children[0].children[1].children[0].children[1].style.border="";
    root.children[0].children[1].children[0].children[2].style.border="";
    root.children[0].children[1].children[0].children[3].style.border="3px solid #00FFFF";
    root.children[0].children[1].children[0].children[4].style.border="";
    sentence.splice(0,1);
     sentence.push(e.target.textContent);
     root.children[0].children[0].textContent=new String(sentence);
})
  root.children[0].children[1].children[0].children[4].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="";
    root.children[0].children[1].children[0].children[1].style.border="";
    root.children[0].children[1].children[0].children[2].style.border="";
    root.children[0].children[1].children[0].children[3].style.border="";
    root.children[0].children[1].children[0].children[4].style.border="3px solid #00FFFF";
    sentence.splice(0,1);
      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
})
root.children[0].children[1].children[1].children[0].addEventListener('click',()=>{
  console.log(sentence)
  sentence.push("은(는)");
  count++;
  console.log(sentence)
  console.log(count);

  for(let i=0;i<foodArray.length;i++){
    root.children[0].children[1].children[0].children[i].innerHTML=foodArray[i];
  }
})
if(count==1){
  console.log("작동")
}
// if(count==1){
//   root.children[0].children[1].children[0].children[0].addEventListener('click',(e)=>{
//     root.children[0].children[1].children[0].children[0].style.border="3px solid #00FFFF";
//     root.children[0].children[1].children[0].children[1].style.border="";
//     root.children[0].children[1].children[0].children[2].style.border="";
//     root.children[0].children[1].children[0].children[3].style.border="";
//     root.children[0].children[1].children[0].children[4].style.border="";
//     console.log(e);
//     sentence.splice(0,1);
    
//    sentence.push(e.target.textContent);
//    console.log(sentence)
//      root.children[0].children[0].textContent=new String(sentence);
//   })
//   root.children[0].children[1].children[0].children[1].addEventListener('click',(e)=>{
//     root.children[0].children[1].children[0].children[0].style.border="";
//     root.children[0].children[1].children[0].children[1].style.border="3px solid #00FFFF";
//     root.children[0].children[1].children[0].children[2].style.border="";
//     root.children[0].children[1].children[0].children[3].style.border="";
//     root.children[0].children[1].children[0].children[4].style.border="";
//     sentence.splice(0,1);

//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
  
//   })
//   root.children[0].children[1].children[0].children[2].addEventListener('click',(e)=>{
//     root.children[0].children[1].children[0].children[0].style.border="";
//     root.children[0].children[1].children[0].children[1].style.border="";
//     root.children[0].children[1].children[0].children[2].style.border="3px solid #00FFFF";
//     root.children[0].children[1].children[0].children[3].style.border="";
//     root.children[0].children[1].children[0].children[4].style.border="";
//     sentence.splice(0,1);

//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
//   })
//   root.children[0].children[1].children[0].children[3].addEventListener('click',(e)=>{
//     root.children[0].children[1].children[0].children[0].style.border="";
//     root.children[0].children[1].children[0].children[1].style.border="";
//     root.children[0].children[1].children[0].children[2].style.border="";
//     root.children[0].children[1].children[0].children[3].style.border="3px solid #00FFFF";
//     root.children[0].children[1].children[0].children[4].style.border="";
//     sentence.splice(0,1);

//      sentence.push(e.target.textContent);
//      root.children[0].children[0].textContent=new String(sentence);
// })
//   root.children[0].children[1].children[0].children[4].addEventListener('click',(e)=>{
//     root.children[0].children[1].children[0].children[0].style.border="";
//     root.children[0].children[1].children[0].children[1].style.border="";
//     root.children[0].children[1].children[0].children[2].style.border="";
//     root.children[0].children[1].children[0].children[3].style.border="";
//     root.children[0].children[1].children[0].children[4].style.border="3px solid #00FFFF";
//     sentence.splice(0,1);

//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
// })
// root.children[0].children[1].children[1].children[0].addEventListener('click',()=>{
//   console.log(sentence)
//   sentence.push("을(를)");
//   console.log(sentence)
//   console.log(count)

//   for(let i=0;i<languegeArray.length;i++){
//     root.children[0].children[1].children[0].children[i].innerHTML=languegeArray[i];
//   }
//   count ++;

// })

// }
}





//---------------------------------------------------------------------

//------------------------------
