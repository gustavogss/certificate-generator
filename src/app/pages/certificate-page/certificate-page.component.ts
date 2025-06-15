import { Component } from '@angular/core';
import { SecondButtonComponent } from "../../_components/second-button/second-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificate-page',
  imports: [SecondButtonComponent, RouterLink],
  templateUrl: './certificate-page.component.html',
  styleUrl: './certificate-page.component.css'
})
export class CertificatePageComponent {

}
