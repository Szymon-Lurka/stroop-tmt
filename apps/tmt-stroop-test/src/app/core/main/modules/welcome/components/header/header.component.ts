import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmt-stroop-test-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Input() title!:string;
@Input() label!: string;
@Input() route?: string;

  constructor(private router:Router) {
  }

  goBack() {
    this.router.navigate([this.route]).then();
  }
}
