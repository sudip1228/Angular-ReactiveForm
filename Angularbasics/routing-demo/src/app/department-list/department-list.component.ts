import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h1>
Learning Routeparameters</h1>
<ul class="items">
  <li (click)="onSelect(department)" *ngFor="let department of departments" [class.selected]="isSelected(department)">
    <span class="badge">{{department.id}}</span> {{department.name}}
  </li>
</ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
  });
}
  onSelect(department)
  {
//this.router.navigate(['/departments',department.id]);//this is absolute path which is not flexible 
this.router.navigate([department.id],{relativeTo:this.route});//using relative path which is flexible.It adds department id to the department list url
  }
  isSelected(department)
  {
    return department.id===this.selectedId;
  }

}
