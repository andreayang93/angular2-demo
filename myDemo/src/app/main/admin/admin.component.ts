import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[],
})
export class AdminComponent implements OnInit {
  public data:any;
  constructor(private dataservice:DataService) { }
  ngOnInit() {
    this.showData();
    console.log(this.data);
  }
  public showData() {
   this.dataservice.getData().subscribe(
     (data)=>{
       this.data=data;
     }
   );
  }

}
