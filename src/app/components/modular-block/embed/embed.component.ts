import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'embed-section',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.css']
})
export class EmbedComponent implements OnInit {
  constructor() { }
  @Input() embed: any;
  ngOnInit(): void { }
}
