import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface form {
  name: AbstractControl;
  icon: AbstractControl;
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  form: FormGroup<form>;
  icons: Array<{ name: string; value: string }> = [
    {
      name: 'Home',
      value: 'home',
    },
    {
      name: 'Private',
      value: 'key',
    },
    {
      name: 'Shopping',
      value: 'shopping_cart',
    },
    {
      name: 'Store',
      value: 'store',
    },
    {
      name: 'Money',
      value: 'monetization_on',
    },
    {
      name: 'Controller',
      value: 'sports_esports',
    },
    {
      name: 'Exercise',
      value: 'fitness_center',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public project: { name: string; icon: string }
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup<form>({
      name: new FormControl('', [Validators.required]),
      icon: new FormControl({ name: 'Home', value: 'home' }),
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    const objFormSave = {
      name: this.form.controls.name.value.trim(),
      icon: {
        name: this.form.controls.icon.value.name,
        value: this.form.controls.icon.value.value,
      },
    };
    this.dialogRef.close(objFormSave);
  }
}
