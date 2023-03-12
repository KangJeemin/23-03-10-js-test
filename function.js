let sentence = ["박수연"];
let nameArray = [_EXAMDATA.teamInformation.teamAllMember[0].name,_EXAMDATA.teamInformation.teamAllMember[1].name,_EXAMDATA.teamInformation.teamAllMember[2].name,_EXAMDATA.teamInformation.teamAllMember[3].name,_EXAMDATA.teamInformation.teamAllMember[4].name]
let foodArray =[_EXAMDATA.teamInformation.teamAllMember[0].food,_EXAMDATA.teamInformation.teamAllMember[1].food,_EXAMDATA.teamInformation.teamAllMember[2].food,_EXAMDATA.teamInformation.teamAllMember[3].food,_EXAMDATA.teamInformation.teamAllMember[4].food,]
let languegeArray = [_EXAMDATA.teamInformation.teamAllMember[0].languege,_EXAMDATA.teamInformation.teamAllMember[1].languege,_EXAMDATA.teamInformation.teamAllMember[2].languege,_EXAMDATA.teamInformation.teamAllMember[3].languege,_EXAMDATA.teamInformation.teamAllMember[4].languege,]
let doingArray = [_EXAMDATA.doing.like,_EXAMDATA.doing.hate,_EXAMDATA.doing.well,_EXAMDATA.doing.notwell];
let count =0;
let park=['박수연','은(는)','양념갈비','을(를)','좋아하고','C#','을(를)','잘한다'];

// if(count==0){
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
   sentence.splice(0,1)

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
  sentence.push("은(는)");
  sentence.push("뭐를");

  console.log(sentence)
  count++;
  root.children[0].children[1].style.display="none";
  root.children[0].children[2].style.display="";

  
  for(let i=0;i<foodArray.length;i++){
    root.children[0].children[2].children[0].children[i].innerHTML=foodArray[i];
  }

// if(count==1){
  root.children[0].children[2].children[0].children[0].addEventListener('click',(e)=>{
    root.children[0].children[1].children[0].children[0].style.border="3px solid #00FFFF";
    root.children[0].children[1].children[0].children[1].style.border="";
    root.children[0].children[1].children[0].children[2].style.border="";
    root.children[0].children[1].children[0].children[3].style.border="";
    root.children[0].children[1].children[0].children[4].style.border="";
   console.log(sentence)
    
   sentence.push(e.target.textContent);
   sentence.splice(2,1);
   console.log(sentence)

     root.children[0].children[0].textContent=new String(sentence);
  })
  root.children[0].children[2].children[0].children[1].addEventListener('click',(e)=>{
    root.children[0].children[2].children[0].children[0].style.border="";
    root.children[0].children[2].children[0].children[1].style.border="3px solid #00FFFF";
    root.children[0].children[2].children[0].children[2].style.border="";
    root.children[0].children[2].children[0].children[3].style.border="";
    root.children[0].children[2].children[0].children[4].style.border="";
    sentence.splice(2,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[2].children[0].children[2].addEventListener('click',(e)=>{
    root.children[0].children[2].children[0].children[0].style.border="";
    root.children[0].children[2].children[0].children[1].style.border="";
    root.children[0].children[2].children[0].children[2].style.border="3px solid #00FFFF";
    root.children[0].children[2].children[0].children[3].style.border="";
    root.children[0].children[2].children[0].children[4].style.border="";
    sentence.splice(2,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  })
  root.children[0].children[2].children[0].children[3].addEventListener('click',(e)=>{
    root.children[0].children[2].children[0].children[0].style.border="";
    root.children[0].children[2].children[0].children[1].style.border="";
    root.children[0].children[2].children[0].children[2].style.border="";
    root.children[0].children[2].children[0].children[3].style.border="3px solid #00FFFF";
    root.children[0].children[2].children[0].children[4].style.border="";
    sentence.splice(2,1);

     sentence.push(e.target.textContent);
     root.children[0].children[0].textContent=new String(sentence);
})
  root.children[0].children[2].children[0].children[4].addEventListener('click',(e)=>{
    root.children[0].children[2].children[0].children[0].style.border="";
    root.children[0].children[2].children[0].children[1].style.border="";
    root.children[0].children[2].children[0].children[2].style.border="";
    root.children[0].children[2].children[0].children[3].style.border="";
    root.children[0].children[2].children[0].children[4].style.border="3px solid #00FFFF";
    sentence.splice(2,1);
      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
})
root.children[0].children[2].children[1].children[0].addEventListener('click',()=>{
  sentence.push("을(를)");
  sentence.push("좋아하고/싫어하고");

  console.log(sentence)
  root.children[0].children[2].style.display="none";
  root.children[0].children[3].style.display="";

  for(let i=0;i<2;i++){
    root.children[0].children[3].children[0].children[i].innerHTML=doingArray[i];
  }
  count ++;
  root.children[0].children[3].children[0].children[0].addEventListener('click',(e)=>{
    root.children[0].children[3].children[0].children[0].style.border="3px solid #00FFFF";
    root.children[0].children[3].children[0].children[1].style.border="";
    root.children[0].children[3].children[0].children[2].style.border="";
    root.children[0].children[3].children[0].children[3].style.border="";
    root.children[0].children[3].children[0].children[4].style.border="";
    sentence.splice(4,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[3].children[0].children[1].addEventListener('click',(e)=>{
    root.children[0].children[3].children[0].children[0].style.border="";
    root.children[0].children[3].children[0].children[1].style.border="3px solid #00FFFF";
    root.children[0].children[3].children[0].children[2].style.border="";
    root.children[0].children[3].children[0].children[3].style.border="";
    root.children[0].children[3].children[0].children[4].style.border="";
    sentence.splice(4,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
//   root.children[0].children[3].children[0].children[2].addEventListener('click',(e)=>{
//     root.children[0].children[3].children[0].children[0].style.border="";
//     root.children[0].children[3].children[0].children[1].style.border="";
//     root.children[0].children[3].children[0].children[2].style.border="3px solid #00FFFF";
//     root.children[0].children[3].children[0].children[3].style.border="";
//     root.children[0].children[3].children[0].children[4].style.border="";

//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
//   })
//   root.children[0].children[3].children[0].children[3].addEventListener('click',(e)=>{
//     root.children[0].children[3].children[0].children[0].style.border="";
//     root.children[0].children[3].children[0].children[1].style.border="";
//     root.children[0].children[3].children[0].children[2].style.border="";
//     root.children[0].children[3].children[0].children[3].style.border="3px solid #00FFFF";
//     root.children[0].children[3].children[0].children[4].style.border="";

//      sentence.push(e.target.textContent);
//      root.children[0].children[0].textContent=new String(sentence);
// })
//   root.children[0].children[3].children[0].children[4].addEventListener('click',(e)=>{
//     root.children[0].children[3].children[0].children[0].style.border="";
//     root.children[0].children[3].children[0].children[1].style.border="";
//     root.children[0].children[3].children[0].children[2].style.border="";
//     root.children[0].children[3].children[0].children[3].style.border="";
//     root.children[0].children[3].children[0].children[4].style.border="3px solid #00FFFF";
//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
// })
root.children[0].children[3].children[1].children[0].addEventListener('click',()=>{
  console.log(sentence)
  sentence.push("뭐를");

  root.children[0].children[3].style.display="none";
  root.children[0].children[4].style.display="";

  for(let i=0;i<languegeArray.length;i++){
    root.children[0].children[4].children[0].children[i].innerHTML=languegeArray[i];
  }

  root.children[0].children[4].children[0].children[0].addEventListener('click',(e)=>{
    root.children[0].children[4].children[0].children[0].style.border="3px solid #00FFFF";
    root.children[0].children[4].children[0].children[1].style.border="";
    root.children[0].children[4].children[0].children[2].style.border="";
    root.children[0].children[4].children[0].children[3].style.border="";
    root.children[0].children[4].children[0].children[4].style.border="";
      sentence.splice(5,1);
      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[4].children[0].children[1].addEventListener('click',(e)=>{
    root.children[0].children[4].children[0].children[0].style.border="";
    root.children[0].children[4].children[0].children[1].style.border="3px solid #00FFFF";
    root.children[0].children[4].children[0].children[2].style.border="";
    root.children[0].children[4].children[0].children[3].style.border="";
    root.children[0].children[4].children[0].children[4].style.border="";
    sentence.splice(5,1);
    sentence.push(e.target.textContent);
    root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[4].children[0].children[2].addEventListener('click',(e)=>{
    root.children[0].children[4].children[0].children[0].style.border="";
    root.children[0].children[4].children[0].children[1].style.border="";
    root.children[0].children[4].children[0].children[2].style.border="3px solid #00FFFF";
    root.children[0].children[4].children[0].children[3].style.border="";
    root.children[0].children[4].children[0].children[4].style.border="";
    sentence.splice(5,1);
    sentence.push(e.target.textContent);
    root.children[0].children[0].textContent=new String(sentence);
  })
  root.children[0].children[4].children[0].children[3].addEventListener('click',(e)=>{
    root.children[0].children[4].children[0].children[0].style.border="";
    root.children[0].children[4].children[0].children[1].style.border="";
    root.children[0].children[4].children[0].children[2].style.border="";
    root.children[0].children[4].children[0].children[3].style.border="3px solid #00FFFF";
    root.children[0].children[4].children[0].children[4].style.border="";
    sentence.splice(5,1);
    sentence.push(e.target.textContent);
    root.children[0].children[0].textContent=new String(sentence);
})
  root.children[0].children[4].children[0].children[4].addEventListener('click',(e)=>{
    root.children[0].children[4].children[0].children[0].style.border="";
    root.children[0].children[4].children[0].children[1].style.border="";
    root.children[0].children[4].children[0].children[2].style.border="";
    root.children[0].children[4].children[0].children[3].style.border="";
    root.children[0].children[4].children[0].children[4].style.border="3px solid #00FFFF";
    sentence.splice(5,1);
    sentence.push(e.target.textContent);
    root.children[0].children[0].textContent=new String(sentence);
})
root.children[0].children[4].children[1].children[0].addEventListener('click',()=>{
  sentence.push("을(를)");
  sentence.push("잘한다/못한다");

  console.log(sentence)
  root.children[0].children[4].style.display="none";
  root.children[0].children[5].style.display="";

  for(let i=0;i<2;i++){
    root.children[0].children[5].children[0].children[i].innerHTML=doingArray[i+2];
  }

  root.children[0].children[5].children[0].children[0].addEventListener('click',(e)=>{
    root.children[0].children[5].children[0].children[0].style.border="3px solid #00FFFF";
    root.children[0].children[5].children[0].children[1].style.border="";
    root.children[0].children[5].children[0].children[2].style.border="";
    root.children[0].children[5].children[0].children[3].style.border="";
    root.children[0].children[5].children[0].children[4].style.border="";
    sentence.splice(7,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
  root.children[0].children[5].children[0].children[1].addEventListener('click',(e)=>{
    root.children[0].children[5].children[0].children[0].style.border="";
    root.children[0].children[5].children[0].children[1].style.border="3px solid #00FFFF";
    root.children[0].children[5].children[0].children[2].style.border="";
    root.children[0].children[5].children[0].children[3].style.border="";
    root.children[0].children[5].children[0].children[4].style.border="";
    sentence.splice(7,1);

      sentence.push(e.target.textContent);
      root.children[0].children[0].textContent=new String(sentence);
  
  })
//   root.children[0].children[5].children[0].children[2].addEventListener('click',(e)=>{
//     root.children[0].children[5].children[0].children[0].style.border="";
//     root.children[0].children[5].children[0].children[1].style.border="";
//     root.children[0].children[5].children[0].children[2].style.border="3px solid #00FFFF";
//     root.children[0].children[5].children[0].children[3].style.border="";
//     root.children[0].children[5].children[0].children[4].style.border="";

//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
//   })
//   root.children[0].children[5].children[0].children[3].addEventListener('click',(e)=>{
//     root.children[0].children[5].children[0].children[0].style.border="";
//     root.children[0].children[5].children[0].children[1].style.border="";
//     root.children[0].children[5].children[0].children[2].style.border="";
//     root.children[0].children[5].children[0].children[3].style.border="3px solid #00FFFF";
//     root.children[0].children[5].children[0].children[4].style.border="";

//      sentence.push(e.target.textContent);
//      root.children[0].children[0].textContent=new String(sentence);
// })
//   root.children[0].children[5].children[0].children[4].addEventListener('click',(e)=>{
//     root.children[0].children[5].children[0].children[0].style.border="";
//     root.children[0].children[5].children[0].children[1].style.border="";
//     root.children[0].children[5].children[0].children[2].style.border="";
//     root.children[0].children[5].children[0].children[3].style.border="";
//     root.children[0].children[5].children[0].children[4].style.border="3px solid #00FFFF";
//       sentence.push(e.target.textContent);
//       root.children[0].children[0].textContent=new String(sentence);
// })
root.children[0].children[5].children[1].children[0].addEventListener('click',()=>{
  console.log(JSON.stringify(sentence))
  console.log(JSON.stringify(park))
  if(JSON.stringify(sentence)==JSON.stringify(park)){
    console.log("dam");
  }

  

})
})
})
})

}
// }
)

// }





//---------------------------------------------------------------------

//------------------------------
