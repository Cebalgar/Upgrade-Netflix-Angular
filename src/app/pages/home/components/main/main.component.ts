import { Component, Input, OnInit } from '@angular/core';
import { Imain } from '../../models/Ihome';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() public main!:Imain;

  constructor() { }

  ngOnInit(): void {
  }

}
