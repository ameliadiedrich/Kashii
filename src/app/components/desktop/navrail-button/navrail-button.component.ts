import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navrail-button',
  templateUrl: './navrail-button.component.html',
  styleUrls: ['./navrail-button.component.scss']
})
export class NavrailButtonComponent implements OnInit {

  @Input() iconName: string = "";
  @Input() mode: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
