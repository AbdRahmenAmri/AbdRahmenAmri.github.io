import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  link1: string = 'Portfolio';
  link2: string = 'Contact';
  link3: string = 'About';
  bye(whereYouWas:string){
    switch (whereYouWas) {
      case '/':
        this.host.nativeElement.querySelector('app-index').classList.add('bye');
        this.host.nativeElement.querySelector('app-download-btn').classList.add('bye');
        break;
    
      default:
        break;
    }

  }
  navClick(e: any) {
    this.bye(this.route.url);
    if (this.link1 === e) {
      setTimeout(() => {
        this.route.navigate(['/' + this.link1.toLocaleLowerCase()]);
      }, 3000);
    }
    if (this.link2 === e)
      this.route.navigate(['/' + this.link2.toLocaleLowerCase()]);
    if (this.link3 === e) this.route.navigate(['/']);
  }
  constructor(private route: Router, private host: ElementRef) {}
  title = 'AbdRahmen Amri';
}
