import { Routes } from '@angular/router';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CertificatePageComponent } from './pages/certificate-page/certificate-page.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  {
    path: "",
    component: CertificatesComponent
  },
  {
    path:"certificados/novo",
    component: FormComponent
  },
  {
    path:"certificados/:id",
    component: CertificatePageComponent
  }
];
