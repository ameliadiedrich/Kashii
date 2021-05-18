import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

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
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && this.router.isActive(this.route, true) && this.activeIcon) {
        console.log("Navigation end");
        this.currentIcon = this.activeIcon;
        this.active = true;
      }
      else if(!this.router.isActive(this.route, true)) {
        this.currentIcon = this.icon;
        this.active = false;
      }
    });
  }
}
