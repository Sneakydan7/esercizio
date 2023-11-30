import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { DetailsComponent } from './components/details/details.component';
import { UsersComponent } from './components/users/users.component';
import { UsersinfoComponent } from './components/usersinfo/usersinfo.component';
import { UppercasePipe } from './components/uppercase.pipe';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'activePosts',
        component: ActivePostsComponent,
    },
    {
        path: 'inactivePosts',
        component: InactivePostsComponent,
    },
    {
        path: 'activePosts/:id',
        component: DetailsComponent,
    },
    {
        path: 'inactivePosts/:id',
        component: DetailsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id',
                component: UsersinfoComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ActivePostsComponent,
        InactivePostsComponent,
        NavbarComponent,
        PostCardComponent,
        DetailsComponent,
        UsersComponent,
        UsersinfoComponent,
        UppercasePipe,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
