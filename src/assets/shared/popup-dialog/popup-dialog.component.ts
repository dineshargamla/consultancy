import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popup-dialog',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './popup-dialog.component.html',
  styleUrl: './popup-dialog.component.css'
})
export class PopupDialogComponent {
/**
 *
 */
constructor(
  public dialogRef: MatDialogRef<PopupDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {}

closeDialog(): void {
  this.dialogRef.close();
}
submitForm(form: NgForm) {
  if (form.valid) {
    const formData = form.value;
    console.log('Form Data:', formData);
    // You can perform additional actions here, like submitting the data to a server
    // Reset the form after submission
    form.resetForm();
    this.closeDialog();
    
  } else {
    // Handle form validation errors
    console.error('Form is invalid.');
  }
}

}
