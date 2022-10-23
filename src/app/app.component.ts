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
  bye(whereYouWas: string) {
    return new Promise((resolve, reject) => {
      switch (whereYouWas) {
        case '/':
          this.host.nativeElement
            .querySelector('app-index')
            .classList.add('bye');
          this.host.nativeElement
            .querySelector('app-download-btn')
            .classList.add('bye');
          setTimeout(() => {
            resolve(true);
          }, 2500);
          break;
        case '/' + this.link2.toLocaleLowerCase():
          this.host.nativeElement
            .querySelector('app-contact')
            .classList.add('bye');
          setTimeout(() => {
            resolve(true);
          }, 1500);
          break;

        case '/' + this.link1.toLocaleLowerCase():
          this.host.nativeElement
            .querySelector('app-portfolio')
            .classList.add('bye');
          setTimeout(() => {
            resolve(true);
          }, 1500);
          break;

        default:
          break;
      }
    });
  }
  async navClick(e: any) {
    if ('/' + e.toLocaleLowerCase() == this.route.url || (e.toLocaleLowerCase() == 'about' && this.route.url == '/')) window.location.reload();
    else
      await this.bye(this.route.url).then((res) => {
        if (res) {
          if (this.link1 === e)
            this.route.navigate(['/' + this.link1.toLocaleLowerCase()]);
          else if (this.link2 === e)
            this.route.navigate(['/' + this.link2.toLocaleLowerCase()]);
          else if (this.link3 === e) this.route.navigate(['/']);
        }
      });
  }
  constructor(private route: Router, private host: ElementRef) {}
  title = 'AbdRahmen Amri';
}
