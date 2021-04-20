import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'from-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class FromBlogComponent implements OnInit {
  constructor() { }
  @Input() blog: any;
  ngOnInit(): void { }
}
