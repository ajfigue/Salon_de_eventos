import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }
  public folder: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
