import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentData;//using 'parentdata' in child component
//@Input('parentData')name ;//alternative way :using 'name  instead 'parentdata' in child component
@Output() childevent= new EventEmitter();//make sure the import is from angularCore


  constructor() { }

  ngOnInit() {
  }

  fire()
  {
    this.childevent.emit("hello child component");//sending data to parent component
    
  }
}
