import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  registForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  data: any;
  
  constructor(private registerRest: RestService) { }

  ngOnInit(): void {
  }
  registData() {
    this.registerRest.register(this.registForm.value).subscribe((data: any) =>
      this.data = data)
      this.alert=true;

  }
  closeAlert(){
    this.alert=false;
  }




}
