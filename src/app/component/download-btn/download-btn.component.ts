import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.css']
})
export class DownloadBtnComponent implements OnInit {

  constructor(private host:ElementRef) {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.host.nativeElement.classList.add('show');
    }, 2500);
  }

}
