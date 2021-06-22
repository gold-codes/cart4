import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


/**
 * 
 * @param form 
 */

function symbolValidator(control){  //control=registerForm.get('password')

  if(control.hasError('required')) return null;
  if(control.value.indexOf('@')> -1){
    return null
  }
  else{
    return{symbol: true}
  }
}

  function passwordMatch(form){
    const password=form.get('password')
    const confirmPassword= form.get('confirmPassword')

    if(password.value !== confirmPassword.value){
      confirmPassword.setErrors({ passwordMatch: true})
    }
    else{
      confirmPassword.setErrors(null)
    }
  }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private builder: FormBuilder) { }

  registerForm: FormGroup;

   

  ngOnInit() {
    this.buildForm()
    
  
  }
  addAddressButtonClick(): void {
    (<FormArray>this.registerForm.get('ADDRESS')).push(this.addAddress());
 }

 
    addAddress(): FormGroup{
       return this.builder.group({
        city: ['', Validators.required],
        address: ['', Validators.required]
      });
    }

  buildForm(): FormGroup{
    return this.registerForm= this.builder.group({
      name: ['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      number:['' ,[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(8)]],
      confirmPassword: '',
      ADDRESS: this.builder.array([
        this.addAddress()
      ])
    }, {
      validators: passwordMatch
    })
  }

  register() {
    localStorage.setItem('usrname', JSON.stringify(this.registerForm.value.username)),
    localStorage.setItem('password', JSON.stringify(this.registerForm.value.password)),
    console.log(this.registerForm.value)
    alert("User registered ! ")
  }
}
