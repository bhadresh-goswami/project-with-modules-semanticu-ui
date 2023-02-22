import { Component } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css'],
})
export class ElementsHomeComponent {
  numberOfLines = 2;
  imageVisibility = true;

  names: string[] = [];

  changeLines(event: any) {
    this.numberOfLines = parseInt(event.target.value);
    this.names = [];
    for (let i = 0; i < this.numberOfLines; i++) {
      this.names.push(`New Name ${i}`);
    }
    console.log(`json: ${JSON.stringify(this.names)}`);
  }

  changeImageVisibility(event: any) {
    //console.log(event.target.checked);
    this.imageVisibility = event.target.checked;
  }
}
