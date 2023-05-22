import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { CakeService } from '../service/cake.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  regForm=new FormGroup({
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  })

  constructor(private service:CakeService){

  }

  register(){
    let formData=this.regForm.value
    this.service.createAccount(formData).subscribe(res=>console.log(res))
    
  }

}
