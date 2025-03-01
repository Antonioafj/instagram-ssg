import { Component, Input } from '@angular/core';
import { PostsComponent } from '../posts/posts.component';
import { ListViewModule } from "@syncfusion/ej2-angular-lists"
import { Post } from '../../types/posts';

@Component({
  selector: 'app-feed',
  imports: [ PostsComponent, ListViewModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  @Input() posts: Post [] = [];

}
