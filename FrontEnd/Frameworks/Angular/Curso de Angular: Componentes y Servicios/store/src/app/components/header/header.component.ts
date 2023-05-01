import { Component, OnDestroy, OnInit } from '@angular/core';

// Reactividad
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    private sub$!: Subscription;

    isTheSideMenuVisible: boolean;
    counter = 0;

    constructor(private storeService: StoreService) {
        this.isTheSideMenuVisible = false;
    }

    ngOnInit(): void {
        this.storeService.myCart$.subscribe((data) => {
            this.counter = data.length;
        });
    }

    ngOnDestroy() {
        this.sub$.unsubscribe();
    }

    toogleSideMenu() {
        this.isTheSideMenuVisible = !this.isTheSideMenuVisible;
    }
}
