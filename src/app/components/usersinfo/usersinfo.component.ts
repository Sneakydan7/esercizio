import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-usersinfo',
    templateUrl: './usersinfo.component.html',
    styleUrls: ['./usersinfo.component.scss'],
})
export class UsersinfoComponent implements OnInit {
    user: User | undefined;

    constructor(private route: ActivatedRoute, private userSrv: UsersService) {}

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            const id = +param['id'];
            this.user = this.userSrv.recuperaUtente(id);
        });
    }
}
