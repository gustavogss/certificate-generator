import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondButtonComponent } from "./_components/second-button/second-button.component";
import { ItemListComponent } from "./_components/item-list/item-list.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CommonModule, PrimaryButtonComponent, SecondButtonComponent, ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'certificate-generator';
  exibeNavbar: boolean = true;
}
