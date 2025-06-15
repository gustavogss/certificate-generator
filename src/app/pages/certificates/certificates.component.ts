import { Component } from '@angular/core';
import { ListCertificateComponent } from "../list-certificate/list-certificate.component";
@Component({
  selector: 'app-certificates',
  imports: [ListCertificateComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
