import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
})
export class TakeTestComponent implements OnInit {

  public choose='';
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }

  public choose1='';
  setvalue1(drp:any)
  {
    this.choose1=drp.target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
