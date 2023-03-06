import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from 'src/app/models/item';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  providers: [ItemService],
})
export class ItemDetailsComponent implements OnInit {
  item: IItem;

  constructor(
    private route: ActivatedRoute,
    private ItemService: ItemService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ItemService.getById(params['id']).subscribe((item) => {
        this.item = item;
      });
    });
  }
}
