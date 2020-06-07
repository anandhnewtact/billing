import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ItemSettingsComponent } from 'app/item-settings/item-settings.component';
import { BillingComponent} from '../../billing/billing.component'
import {StockComponent} from '../../stock/stock.component'
import { CustomerComponent } from 'app/customer/customer.component';
import { LoginComponent } from 'app/login/login.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path: 'item-settings', component: ItemSettingsComponent},
    {path: 'billing', component:BillingComponent },
    {path: 'stock', component:StockComponent},
    {path: 'customer', component:CustomerComponent},
    {path: 'login',component:LoginComponent},
    
];
