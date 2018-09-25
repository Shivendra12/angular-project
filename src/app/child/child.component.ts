import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 counter=0;
 @Input() uname;
 @Output() valueChange= new EventEmitter();
  constructor() { }
  valueChanged(){
    this.counter=this.counter +1;
    this.valueChange.emit(this.counter);
  }
  ngOnInit() {
  }

}
