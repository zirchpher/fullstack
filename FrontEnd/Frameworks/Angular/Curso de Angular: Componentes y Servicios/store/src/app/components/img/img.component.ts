import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.css'],
})
export class ImgComponent
    implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
    @Input() imgUrl = '';
    @Output() loaded = new EventEmitter<string>();

    imgUrlDefault = './assets/default.png';
    counter = 0;
    interval: NodeJS.Timer | undefined;

    constructor() {
        // before render
        // run just once time
        console.log('1. constructor');
    }

    ngOnChanges(): void {
        // antes - durante el render
        // Escucha cambios de inputs
        console.log('2. ngOnChanges');
    }

    ngOnInit(): void {
        // before render
        // Async Permitido | run just once time
        console.log('3. ngOnInit');
        this.interval = setInterval(() => {
            this.counter += 1;
            console.log('running counter');
        }, 1000);
    }

    ngAfterViewInit(): void {
        // after render
        // handler child
        console.log('4. ngAfterViewInit');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
        clearInterval(this.interval);
    }

    showDefaultImage() {
        this.imgUrl = this.imgUrlDefault;
    }

    imgLoaded() {
        console.log('Hello from child component');
        this.loaded.emit(this.imgUrl);
    }
}
