import { Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { StoreComponent } from "./store/store.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
  
    {
        path: 'search',
        component: SearchComponent
    },

    {
        path: 'store',
        component: StoreComponent
    },

];