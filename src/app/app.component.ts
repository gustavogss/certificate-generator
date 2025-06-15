import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondButtonComponent } from "./_components/second-button/second-button.component";
import { ItemListComponent } from "./_components/item-list/item-list.component";
import { UiBaseComponent } from "./_components/ui-base/ui-base.component";
import { CertificatesComponent } from "./pages/certificates/certificates.component";
import { FormComponent } from "./pages/form/form.component";
import { ListCertificateComponent } from "./pages/list-certificate/list-certificate.component";
import { CertificatePageComponent } from "./pages/certificate-page/certificate-page.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, UiBaseComponent, CertificatesComponent, ItemListComponent, FormComponent, ListCertificateComponent, CertificatePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificate-generator';
  exibeNavbar: boolean = true;
}
