import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any={}

  constructor() { }

  ngOnInit(): void {
  }
  


  login() {
    
    var usr= JSON.parse(localStorage.getItem('usrname'));
    var pass=JSON.parse(localStorage.getItem('password'));
     console.log(this.model.username)
    if(usr !==this.model.username || pass !==this.model.password){
      alert('Username not found, Please register User first !')
    }
    else{
      alert('Login Successful !!')
      window.location.href ='http://localhost:4200/shop';
    }

  }
}
