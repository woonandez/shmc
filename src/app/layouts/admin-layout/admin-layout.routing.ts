import { Routes } from '@angular/router';

import { EventsComponent } from '../../components/events/events.component';
import { TournamentResultsComponent } from '../../components/tournament-results/tournament-results.component';
import { HandicapsComponent } from '../../components/handicaps/handicaps.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'events',             component: EventsComponent },
    { path: 'tournament-results', component: TournamentResultsComponent },
    { path: 'handicaps',          component: HandicapsComponent },
    { path: 'dashboard',          component: DashboardComponent },
    { path: 'user-profile',       component: UserProfileComponent },
    { path: 'table-list',         component: TableListComponent },
    { path: 'typography',         component: TypographyComponent },
    { path: 'icons',              component: IconsComponent },
    { path: 'maps',               component: MapsComponent },
    { path: 'notifications',      component: NotificationsComponent },
    { path: 'upgrade',            component: UpgradeComponent },
];
