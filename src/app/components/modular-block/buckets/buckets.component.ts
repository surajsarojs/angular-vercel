import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {
  constructor() { }
  @Input() sectionBuckets: any;
  @Input() page: string;
  ngOnInit(): void { }
}
