import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-rest',
  templateUrl: './update-rest.component.html',
  styleUrls: ['./update-rest.component.css']
})
export class UpdateRestComponent implements OnInit {
updateForm=new FormGroup({
  name:new FormControl(''),
  address:new FormControl(''),
  email:new FormControl('')
})
  constructor() { }

  ngOnInit(): void {
  }
  // editRest(item.id){

  // }
}
