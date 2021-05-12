import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navrail-button',
  templateUrl: './navrail-button.component.html',
  styleUrls: ['./navrail-button.component.scss']
})
export class NavrailButtonComponent implements OnInit {

  @Input() mode: String = "";
  @Input() icon: String = "";
  @Input() activeIcon: String = "";
  currentIcon: String = this.icon;

  toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.currentIcon = this.icon;
  }

  setToggle(): void {
    if(this.activeIcon) {
      if(this.currentIcon == this.icon) {
        this.currentIcon = this.activeIcon;
      }
      else {
        this.currentIcon = this.icon;
      }
    }
  }

}
