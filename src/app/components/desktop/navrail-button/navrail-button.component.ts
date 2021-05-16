import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navrail-button',
  templateUrl: './navrail-button.component.html',
  styleUrls: ['./navrail-button.component.scss']
})
export class NavrailButtonComponent implements OnInit {

  @Input() mode: String = "";
  @Input() icon: String = "";
  @Input() activeIcon: String = "";
  @Input() route: string = "";

  currentIcon: String = this.icon;
  active: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentIcon = this.icon;
  }

  setToggle(): void {
    if(this.router.isActive(this.route, true)){
      this.currentIcon = this.activeIcon;
    }
    else {
      this.currentIcon = this.icon;
    }
    /*this.active = !this.active;
    if(this.activeIcon) {
      if(this.currentIcon == this.icon) {
        this.currentIcon = this.activeIcon;
      }
      else {
        this.currentIcon = this.icon;
      }*/
    
  }

}
