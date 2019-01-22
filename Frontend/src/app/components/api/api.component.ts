import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  apiData: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getApi().subscribe(data => {
      this.apiData = data
      console.log(this.apiData)
    })
  }

}
