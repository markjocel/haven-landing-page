import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  services: string[] = [
    "Book keeping & payroll",
    "Financial & GST",
    "KiwiSaver advice",
    "Insuring people", 
    "Tax & Business advice",
    "Trustee services",
    "Mortgage advice"
  ]
}
