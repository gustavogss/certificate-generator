import { Component } from '@angular/core';
import { SecondButtonComponent } from "../../_components/second-button/second-button.component";
import { ItemListComponent } from "../../_components/item-list/item-list.component";

@Component({
  selector: 'app-certificates',
  imports: [SecondButtonComponent, ItemListComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
