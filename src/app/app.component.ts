import { Component } from '@angular/core';
import { DimensionService } from "./dimension.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width = 0;
  height = 0;

  constructor(private dimensionService: DimensionService) {
    
  }

  fileChange($event) {

    const file = $event.target.files[0];

    this.dimensionService.getImageDimensions(file)
    .then((result) => {
      this.width = result.width;
      this.height = result.height;
    });

  }
}
