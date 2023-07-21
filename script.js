"use strict";

// let postUrl = "https://jsonplaceholder.typicode.com/posts";

// let init = () => {
//  // GET Method using Fetch;
//     let userTBody = document.getElementById("usertbody");
//     let items = "";
//     let output = fetch(postUrl).then((data) => data.json());

//     output.then((posts) => {
//       console.log(posts);
//       posts.forEach((element) => {
//         items += `<tr>
//                          <td>${element.userId} </td>
//                          <td>${element.title} </td>
//                          <td>${element.body} </td>
//                         </tr>`;
//       });
//       userTBody.innerHTML = items;
//     });
// };

  // let add = (event) => {
  //   let uId = document.getElementById("userId");
  //   let title = document.getElementById("title");
  //   let description = document.getElementById("description");
  //   event.preventDefault();
  //   let newObj = {
  //     userId: Number(uId.value),
  //     title: title.value,
  //     description: description.value  
  //   };                                      
  //   let input = JSON.stringify(newObj);

  //   let output = fetch(postUrl, {
  //     method: 'POST',
  //     body: input,
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   }).then(response=>{
  //       return response.json()
  //    });

  //   output.then((data) => {
  //     console.log(data);

  //     if('id' in data){
  //       alert("Data Created Successfully")
  //     }
  //   }).catch(error=> console.log(error));
    
  // };


// init();

var color=["blue", "orange", "yellow", "Black", "purple", "green"];
 
function box(color){
  for(var i=0; i<color.length;i++){
    document.getElementById("container").innerHTML += `<div id="box" style="height:50px;width:50px;background-color:${color[i]}"></div><br/>`
  }
}
box(color);




