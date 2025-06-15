import { Component } from '@angular/core';
import { SecondButtonComponent } from "../second-button/second-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-list',
  imports: [SecondButtonComponent, RouterLink],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  id: string = '5'
}
