import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph=false;

  onDisplayParagraph() {
    if (this.displayParagraph === false) {
      this.displayParagraph = true;
    } else {
      this.displayParagraph = false;
    }
    console.log(this.displayParagraph)
  }
}
