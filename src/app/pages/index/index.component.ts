import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild('welcome') welcome!: ElementRef;
  greeting: any = 'Welcome.';

  greetingToSpan(str: String): string {
    let i: number = 0;
    let spans: string = '';

    str.split('').forEach((val) => {
      i++;
      spans += '<span style="' + '--i:' + i + '">' + val + '</span>';
    });
    return spans;
  }
  constructor(private sanitizer: DomSanitizer,private host:ElementRef) {}

  ngOnInit(): void {    
    this.greeting = this.sanitizer.bypassSecurityTrustHtml(this.greetingToSpan(this.greeting));
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.host.nativeElement.classList.add("show")
    }, 1000);
  }

}
