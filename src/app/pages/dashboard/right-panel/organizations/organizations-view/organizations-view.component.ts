import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations-view',
  templateUrl: './organizations-view.component.html',
  styleUrls: ['./organizations-view.component.css']
})
export class OrganizationsViewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'status', 'actions'];

  constructor() { }

  ngOnInit() {
  }

}