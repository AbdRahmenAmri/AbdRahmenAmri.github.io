import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-download-btn',
  templateUrl: './download-btn.component.html',
  styleUrls: ['./download-btn.component.css']
})
export class DownloadBtnComponent implements OnInit {
  cvLink:URL = new URL('https://drive.google.com/file/d/1jeBkABtPIS2eTAPyJGCBGf-W_hJ1u4um/view?usp=sharing');
downloadCV() {
  window.open(this.cvLink,'_blank')
}

  constructor(private host:ElementRef) {
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.host.nativeElement.classList.add('show');
    }, 2500);
  }

}
