import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'render-component',
  templateUrl: './render.components.html',
  styleUrls: ['./render.components.css']
})
export class RenderComponent implements OnInit {
  constructor() { }
  @Input() pageComponents: any;
  @Input() page: string;
  ngOnInit(): void { }
}
