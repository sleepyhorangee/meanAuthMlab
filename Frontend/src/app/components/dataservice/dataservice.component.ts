import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrls: ['./dataservice.component.scss']
})
export class DataServiceComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }

}
