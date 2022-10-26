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
  about_description:string = 'It\'s me AbdRahmen Amri. A Computer Science Student and \
    Full Stack Web Developer Having specialization in back end & front end development.\n\n\
    + I have back end skills in PHP, Flask(Python), NodeJs, SpringBoot.\n\
    + I have front end skills in ReactJs, Angular.'

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
