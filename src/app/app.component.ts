import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph = false;
  clickCount = [];

  onDisplayParagraph(event:any) {
    if (this.displayParagraph === false) {
      this.displayParagraph = true;
    } else {
      this.displayParagraph = false;
    }
    this.clickCount.push(this.clickCount.length + 1);
  }

  // changesStyle() {
  //   if (this.clickCount.length >= 5) {
  //     return {
  //       backgroundColor: "blue",
  //       color: "white"
  //     }
  //   }
  // }

}
