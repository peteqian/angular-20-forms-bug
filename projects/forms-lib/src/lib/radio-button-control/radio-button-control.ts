import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: "lib-radio-button-control",
  standalone: true,
  imports: [ReactiveFormsModule, MatRadioModule],
  templateUrl: "./radio-button-control.html",
})
export class RadioButtonControl {
  @Input() childControl!: FormControl;
  @Input() options!: { label: string; value: string }[];
}
