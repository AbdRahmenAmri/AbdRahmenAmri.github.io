import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  navs: string[] = [
    'About',
    'Portfolio',
    'Contact'
  ]

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
        case '/' + this.navs[2].toLocaleLowerCase():
          this.host.nativeElement
            .querySelector('app-contact')
            .classList.add('bye');
          setTimeout(() => {
            resolve(true);
          }, 1500);
          break;

        case '/' + this.navs[1].toLocaleLowerCase():
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
          if (this.navs[1] === e)
            this.route.navigate(['/' + this.navs[1].toLocaleLowerCase()]);
          else if (this.navs[2] === e)
            this.route.navigate(['/' + this.navs[2].toLocaleLowerCase()]);
          else if (this.navs[0] === e) this.route.navigate(['/']);
        }
      });
  }
  constructor(private route: Router, private host: ElementRef) {}
  title = 'AbdRahmen Amri';
}
