import { Component, Input, OnInit } from '@angular/core';
import { Ihero } from '../../models/Ihome';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public hero!: Ihero;

  constructor() { }

  ngOnInit(): void {
  }

}
