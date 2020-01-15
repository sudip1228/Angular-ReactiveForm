import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router, ParamMap} from '@angular/router'
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    department id = {{departmentId}}
    <h3>
    
    <button (click)="showoverview()"> overview </button>
    <button (click)="showcontact()"> contact </button>

  
    <router-outlet></router-outlet> 
   
    
    <button (click)="goPrevious()"> previous </button>
    <button (click)="goNext()"> Next </button>
    
  <div>  <button (click)="gotoDepartments()">Back </button></div>


  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  departmentId;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

   // let id= parseInt(this.route.snapshot.paramMap.get('id'));//reading the param ID of path 'departments/:id'
    //this.departmentId=id;
    //following code is better than above snapshot method.Following is an alternative way of above
    this.route.paramMap.subscribe((params: ParamMap)=>{//reading the param ID of path 'departments/:id'
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }
goPrevious(){
  let previousId= this.departmentId-1;
  this.router.navigate(['/departments',previousId]);


}

goNext(){
  let nextId= this.departmentId+1;
  this.router.navigate(['/departments',nextId]);
  

}
gotoDepartments()
{
  let selectedId= this.departmentId ? this.departmentId:null;
  //this.router.navigate(['/departments',{id: selectedId}]);//using optional route parameter.you dont need to assign placeholder for id in path when you use route parameter
this.router.navigate(['../',{id:selectedId}],{relativeTo: this.route});//(../)removes id and / from url while going back to another page.maybe removes two letter from url
}
showoverview()
{
  this.router.navigate(['overview'],{relativeTo: this.route});//adding 'overview' to this route
}

showcontact()
{
  this.router.navigate(['contact'],{relativeTo: this.route});
}

}
