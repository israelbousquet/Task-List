import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public subtaskName: string
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      editName: new FormControl('', Validators.required),
    });
  }

  close() {
    this.dialogRef.close();
  }

  save(inputValue: string) {
    this.dialogRef.close(inputValue);
  }
}
