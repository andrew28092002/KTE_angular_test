import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/models/item';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [
    ItemService
  ]
})
export class ItemsComponent implements OnInit {
  items: IItem[] = []
  constructor(private ItemService: ItemService) {}

  ngOnInit(): void {
    this.ItemService.getAll().subscribe(items => {
      this.items = items
    })
  }
}
