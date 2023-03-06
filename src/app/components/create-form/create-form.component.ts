import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  providers: [ItemService],
})
export class CreateFormComponent implements OnInit {
  selectedFile: any = null;
  form: FormGroup;

  constructor(private router: Router, private ItemService: ItemService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
    });
  }

  onSubmit(): void {
    this.ItemService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
