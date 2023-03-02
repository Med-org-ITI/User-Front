import { Component } from '@angular/core';
import { SharedService } from './Services/sendData.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showCrumb = true;
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.changeEmitted$.subscribe((text) => {
      setTimeout(() => {
        if (text == false || text == true) {
          this.showCrumb = text;
        }
      });
    });
  }
  title = 'Project';
}
