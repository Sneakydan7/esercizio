import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: User[] = [
        {
            email: 'daniele@html.com',
            id: 1,
            nome: 'daniele',
            ruolo: 'user',
        },
        {
            email: 'alex@css.com',
            id: 2,
            nome: 'alex',
            ruolo: 'admin',
        },
        {
            email: 'abberramane@js.com',
            id: 3,
            nome: 'abberramane',
            ruolo: 'user',
        },
        {
            email: 'paperino@paperino.com',
            id: 4,
            nome: 'paperino',
            ruolo: 'admin',
        },
    ];

    constructor() {}

    recuperaUtenti() {
        return this.users;
    }

    recuperaUtente(id: number) {
        let utenteSingolo = this.users.find((user) => user.id == id);
        return utenteSingolo;
    }
}
