import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-add-rest',
  templateUrl: './add-rest.component.html',
  styleUrls: ['./add-rest.component.css']
})
export class AddRestComponent implements OnInit {
  alert: boolean = false;

  addRest = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  }

  )
  result: any;
  constructor(private addService: RestService) { }

  ngOnInit(): void {
  }
  restInfoSubmit() {
    // console.warn(this.addRest.value)
    this.addService.saveRest(this.addRest.value).subscribe((result: any) => {
      this.result = result;
      this.alert = true;
      this. addRest.reset({});

    });

  }
  closeAlert() {
    this.alert = false;
  }

}
