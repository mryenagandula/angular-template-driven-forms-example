import { Component } from '@angular/core';
interface User {
  firstName:string,
  middleName:string,
  lastName:string,
  gender:string,
  mobile:string | number,
  emailId:string,
  username:string,
  password: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reactive-forms-example';
  userModel = {
    firstName:'',
    middleName:'',
    lastName:'',
    gender:'',
    mobile:'',
    username:'',
    emailId:'',
    password: '',
  } as User;
  constructor(){}
  public submitForm(frm){
    console.log(frm);  
    console.log(frm.value);
  }
}
