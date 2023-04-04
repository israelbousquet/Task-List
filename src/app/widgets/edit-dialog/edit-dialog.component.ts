import { ToastService } from 'src/app/shared/services/toast.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    public toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      editName: new FormControl(this.data, Validators.required),
    });
  }

  close() {
    this.dialogRef.close();
  }

  save(inputValue: string) {
    if (inputValue === this.data) {
      this.toastService.showToastError('Digite um valor diferente do atual');
      return;
    }
    this.dialogRef.close(inputValue);
  }
}
