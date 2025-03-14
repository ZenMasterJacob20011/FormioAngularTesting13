import { Component } from '@angular/core';
import {FormioComponent} from "@formio/angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormioAngularTesting13';

  onReady(formioComponent: FormioComponent){
    formioComponent.formio.on('fileUploadingEnd', (change: Promise<any>) => {
      console.log('file upload ended');
    })
  }
}
