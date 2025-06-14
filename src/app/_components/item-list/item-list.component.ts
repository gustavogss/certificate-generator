import { Component } from '@angular/core';
import { SecondButtonComponent } from "../second-button/second-button.component";

@Component({
  selector: 'app-item-list',
  imports: [SecondButtonComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

}
