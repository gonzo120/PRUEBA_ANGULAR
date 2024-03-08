import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  isSignDivVisiable: boolean  = true;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private router: Router){}


  onRegister() {
    
    const localUser = localStorage.getItem('Usuarios');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      const isUserExists = users.some((user: SignUpModel) => user.email === this.signUpObj.email);
      if(!isUserExists){
        users.push(this.signUpObj);
        localStorage.setItem('Usuarios', JSON.stringify(users));
      alert('Registration Success');
      // Restablecer los campos del formulario después del registro exitoso
      this.signUpObj = new SignUpModel();
      }else{
      alert('User with this email already exists');
      }
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('Usuarios', JSON.stringify(users))
    }
 
  }

  onLogin() {
    


    const localUsers =  localStorage.getItem('Usuarios');
    console.log("localusers", localUsers)
    if(localUsers != null) {
      const users =  JSON.parse(localUsers);
      console.log("users", users)
      const isUserPresent =  users.find( (user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
      console.log("isUserPresent", isUserPresent)
      if(isUserPresent != undefined) {
        alert("User Found...");
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        
      } else {
        alert("No User Found")
      }
    }
  }

}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}