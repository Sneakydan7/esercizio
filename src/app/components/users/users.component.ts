import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/user.service';
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users!: User[];

    constructor(private srv: UsersService) {}

    async ngOnInit() {
        const users = await this.srv.recuperaUtenti();
        this.users = users;
    }
}
