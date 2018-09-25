import { Component, OnInit } from '@angular/core';
import { MyserService } from '../myser.service';
@Component({
  selector: 'app-shortcodes',
  templateUrl: './shortcodes.component.html',
  styleUrls: ['./shortcodes.component.css']
})
export class ShortcodesComponent implements OnInit {
  fData;
  fNewsData;
    constructor(private ser:MyserService) { }
  
    ngOnInit() 
    {
      this.ser.fetchLatestNews()
      .subscribe(res=>
      {
        this.fData=res;
        this.fNewsData=this.fData.articles;
        console.log(res)
      },err=>
      {
        console.log(err);
      })
    }
  
  }
  