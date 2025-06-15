import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondButtonComponent } from "../../_components/second-button/second-button.component";

@Component({
  selector: 'app-form',
  imports: [PrimaryButtonComponent, SecondButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
