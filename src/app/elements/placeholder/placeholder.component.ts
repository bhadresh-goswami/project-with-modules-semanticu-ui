import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  @Input() lines = 2;
  @Input() imageShow = true;
  @Input() data: string[] = [];
  ngOnInit() {
    console.log(`Data in Placeholder: ${JSON.stringify(this.data)}`);
  }
}
