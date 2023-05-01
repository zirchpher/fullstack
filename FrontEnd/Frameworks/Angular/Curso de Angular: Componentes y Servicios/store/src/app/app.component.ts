import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    ParentTitle = '';

    isTheImageShown = true;

    listenEventFromParent(img: string) {
        console.log('Hello from parent component');
        console.log(img);
    }

    toogleImage() {
        this.isTheImageShown = !this.isTheImageShown;
    }
}
