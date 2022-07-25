import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editpartcard',
  templateUrl: './editpartcard.component.html',
  styleUrls: ['./editpartcard.component.css']
})
export class EditpartcardComponent implements OnInit {

  @Input()Part:Object
  constructor() { }

  ngOnInit() {
  }

}
