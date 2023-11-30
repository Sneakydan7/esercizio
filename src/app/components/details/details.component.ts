import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    post: Post | undefined;
    subscribe!: Subscription;

    constructor(private srv: PostsService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscribe = this.route.params.subscribe((param) => {
            const id = +param['id'];
            console.log(id);
            this.post = this.srv.recuperaPost(id);
        });
    }
}
