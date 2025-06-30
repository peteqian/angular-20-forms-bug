# Angular20FormsDebugging

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Bug Reproduction

To reproduce the bug, follow these steps:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build the library:**

   ```bash
   ng build forms-lib
   ```

3. **Run the application:**

   ```bash
   ng serve
   ```

4. **Open in browser:**

   Open your browser and navigate to `http://localhost:4200/`.

### Expected Behavior

The child component should be created with the form passed from the parent compoennt.

### Actual Behavior

ERROR RuntimeError: NG01203: No value accessor for form control unspecified name attribute. Find more at https://angular.dev/errors/NG01203

### Code Location

- **Parent Component:** `projects/forms-lib/src/lib/forms-lib.ts`
- **Child Component:** `projects/forms-lib/src/lib/radio-button-control/radio-button-control.ts`
