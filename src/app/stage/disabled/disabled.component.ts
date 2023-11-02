import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.sass'],
  host: { 'class': 'w-100' },
})
export class DisabledComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {
  }
}

