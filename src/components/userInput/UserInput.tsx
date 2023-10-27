 import React from 'react'
 import './UserInput.css'
 import axios from 'axios';
 import { error } from 'console';

// function userData(){
//     var userNameInput = document.getElementById("username")as HTMLInputElement || null;
//     var userLastNameInput = document.getElementById("userLastname")as HTMLInputElement || null;
//     var userPhoneNumberInput = document.getElementById("userPhobeNumber")as HTMLInputElement || null;
//     var userAddressInput = document.getElementById("userAddressInput") as HTMLInputElement || null;
//     var userEmailInput = document.getElementById("userEmail") as HTMLInputElement || null;
//     var userCpfInput = document.getElementById("userCpf") as HTMLInputElement || null;
//     var newDiv = document.getElementById("newDiv") as HTMLDivElement;
//     var salesPersonUrl = "http://localhost:3000/api/vendedor";

//     var userDataJson = {
//         "name": userNameInput.value.toString(),
//         "lastName": userLastNameInput.value.toString(),
//         "phoneNumber": userPhoneNumberInput.value.toString(),
//         "cpf": userCpfInput.value.toString(),
//         "email": userEmailInput.value.toString(),


//     }
    
// //     newDiv
// //    // <div>
// //    //     Nome: ${userNameInput.value}
// //    // </div>
// //    //  <div>
// //    //  Sobrenome: ${useLastNameInput.value}
// //    //  </div>
// //     // <div>
// //     // Telefone: ${userPhoneNumberInput.value}
// //     // </div>
// //     // <div>
// //    //  Endereço: ${userAddressInput.value}
// //     // </div>

// //     await axios.post(salesPersonUrl, userDataJson,
// //         {
// //             withCredentials:true,
// //             headers: {
// //                 "Content-Type": "application/json",
// //             },
// //             maxRedirects: 0,
// //         })
// //     .then((response) => (
// //         console.log= (response);
// //     ))
// //     .catch((error) =>(
// //         console.log(error);
    //  ));

   //  var content = "";

     dataSalespersonArray.forEach((dados) => {

        var content = "";

        var content += `
           <div className="cards">
           <div className="cardImg">
            <img src="${dados.name}" alt="" />
          </div>
          <div className="cardTitle">
            ${dados.LastName}
          </div>
          <div className="cardSubTitle">
            ${dados.phoneNumber}
          </div>
        </div>
      `;
            
          
     });

     divId=;



    }

 function UserInput(){
     return(
      <div>
          <div className='userInputName'>
          <label>Nome:</label>
          <input type= "text" id= "userName"/>
      </div>

      <div className='userInputLastName'>
          <label>Sobrenome:</label>
          <input type= "text" id= "userLastName"/>           
      </div>

      <div className='userInputPhobeNumber'>
          <label>Telefone:</label>
          <input type= "text" id= "userPhoneNumber"/>
      </div>

      <div className='userInputAddress'>
         <label>Endereço:</label>
         <input type= "text" id= "userAddress"/>
      </div>

      <div className='userInputEmail'>
        <label>E-mail:</label>
        <input type="text" id= "userEmail"/>
      </div>

      <div>
        <label>CPF:</label>
        <input type= "text" id= "userCpf"/>
       </div>
      </div>

     
     );
}


export default UserInput;