import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  orders: any;
  userId = localStorage.getItem('userId');
  user: any;
  constructor(
    private orderService: OrdersService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe(({ data }: any) => {
      console.log(data);

      this.user = data;
    });
  }

  // Tabs
  id: any = 'profile';
  tabChange(ids: any) {
    this.id = ids;
    if (ids == 'orders' && !this.orders) {
      this.orderService.getUserOrders().subscribe((data: any) => {
        this.orders = data.data;
      });
    }
  }

  // Edit Profile Data
  isEdit = false;
  edit() {
    this.isEdit = !this.isEdit;
  }

  // Overlay (Change Password)
  toggleOverlay = false;

  toggleClose(): void {
    this.toggleOverlay = false;
  }

  addOverlay(): void {
    this.toggleOverlay = true;
  }
}
