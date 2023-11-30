import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    posts!: Post[];

    constructor(private postSrv: PostsService) {}

    async ngOnInit() {
        const posts = await this.postSrv.recuperaPosts();
        this.posts = posts;
    }
}
