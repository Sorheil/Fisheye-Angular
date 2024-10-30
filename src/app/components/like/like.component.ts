import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-like',
  standalone: true,
  imports: [NgClass],
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'] // Notez "styleUrls" au pluriel
})
export class LikeComponent {
  liked: boolean = false;
  @Input() numberLikes!: number;

  constructor(private likeService: LikeService) { }

  toggleLike(): void {
    this.liked = !this.liked;
    this.numberLikes += this.liked ? 1 : -1;
    this.likeService.updateNumberLike(this.liked);
  }
}
