import { Injectable } from '@angular/core';
import { ImageDimensions } from "./image-dimensions";

@Injectable()
export class DimensionService {

  constructor() { }

  public getImageDimensions(file: File): Promise<ImageDimensions> {

    const promise = new Promise<ImageDimensions>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.onload = () => {
          const dimensions = new ImageDimensions();
          dimensions.width = image.width;
          dimensions.height = image.height;

          resolve(dimensions);
        }
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });

    return promise;
  }

}
