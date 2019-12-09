import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChefService } from '../chef.service';
import { Observable } from 'rxjs';

export interface DialogData {
  name: string;
  address: string;
  description: string;
  chef: Array<any>;
}

@Component({
  selector: 'app-add-restaurant-dialog',
  templateUrl: './add-restaurant-dialog.component.html',
  styleUrls: ['./add-restaurant-dialog.component.css']
})
export class AddRestaurantDialogComponent implements OnInit {
  form: FormGroup;

  chefs$: Observable<any[]>;

  constructor(
    private chefService: ChefService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddRestaurantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: DialogData) {
    this.form = fb.group({
      name: '',
      address: '',
      description: '',
      chef: []
    });
  }

  ngOnInit() {
    this.chefService.getChefs();
    this.chefs$ = this.chefService.getChefList;
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
