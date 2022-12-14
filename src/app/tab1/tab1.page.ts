import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  re:any

  constructor() {}

  

   checkPassword(valor:any){
    var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 
    return myregex.test(valor)

   }
    
    checkForm(form:any){
    if(form.username.value == "") {
      alert("Error: Debe escribir Usuario!");
      form.username.focus();
      return false;
    }
    this.re = /^\w+$/;
    if(!this.re.test(form.username.value)) {
      alert("Error: Nombre de usuario debe contener únicamente letras, numeros y underscores!");
      form.username.focus();
      return false;
    }
    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(!this.checkPassword(form.pwd1.value)) {
        alert("La contraseña no es valida!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: las contraseñas no coinciden!");
      form.pwd1.focus();
      return false;
    }
    return true;
  }

 }
 
  

  


