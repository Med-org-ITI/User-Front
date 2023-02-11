import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: any;
  ID: string;
  constructor(
    private clientService: ItemService,
    myActiveRoute: ActivatedRoute
  ) {
    this.ID = myActiveRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.clientService.getItem(this.ID).subscribe({
      next: (res) => {
        this.item = res;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
