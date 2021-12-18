import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.css']
})
export class ListRestComponent implements OnInit {
  data: any;
  

  constructor(private restService:RestService) { }

  ngOnInit(): void {
    this.restService.getList().subscribe((data:any)=>
   this.data=data);
 
  }
  deleteRest(item: any){
    this.restService.deleteRest(item).subscribe((result)=>{
      console.warn("result",result)
    }
   
    )
  }
}
