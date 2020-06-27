import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ngnt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() brand: string;

  constructor() { }

  ngOnInit(): void {
  }

}
