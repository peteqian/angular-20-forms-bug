import { Component, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RadioButtonControl } from "./radio-button-control";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: "lib-forms-lib",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    RadioButtonControl,
    MatRadioModule,
  ],
  templateUrl: "./forms-lib.html",
})
export class FormsLib {
  textFormControl: FormControl;
  radioFormControl: FormControl;

  options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  constructor() {
    this.textFormControl = new FormControl("");
    this.radioFormControl = new FormControl("");
  }
}
