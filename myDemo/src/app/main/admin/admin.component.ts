import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[],
})
export class AdminComponent implements OnInit {
  
  constructor(dataservice:DataService) { }
  showData() {
   
  }
  ngOnInit() {  
  }

}
