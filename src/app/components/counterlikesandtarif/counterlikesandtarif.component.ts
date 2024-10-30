import { Component, Input, OnInit } from '@angular/core';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-counterlikesandtarif',
  standalone: true,
  imports: [],
  templateUrl: './counterlikesandtarif.component.html',
  styleUrl: './counterlikesandtarif.component.scss'
})
export class CounterlikesandtarifComponent implements OnInit {
  @Input() price!: number | undefined
  @Input() numberLikes!: number

  constructor(private likeService: LikeService) { }
  ngOnInit(): void {
    this.likeService.liked$.subscribe(islike => {
      return islike ? this.numberLikes += 1 : this.numberLikes -= 1
    })
  }
}
