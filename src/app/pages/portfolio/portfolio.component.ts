import { Component, ElementRef, OnInit } from '@angular/core';
import { faC, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  showWork(i: number, e: any) {
    this.host.nativeElement
      .querySelector('.projects li.active')
      .classList.toggle('active');
    if (e.target.tagName === 'IMG')
      e.target.parentElement.classList.toggle('active');
    else e.target.classList.toggle('active');
    this.selected = this.works[i];
    this.host.nativeElement.querySelector('.details').classList.toggle('hide');
    this.host.nativeElement.querySelector('.details').classList.toggle('pop');
  }
  hideWork(){
    this.host.nativeElement.querySelector('.details').classList.toggle('pop');
    this.host.nativeElement.querySelector('.details').classList.toggle('hide');
  }
  openUrl(url: string | undefined) {
    window.open(url, '_blank');
  }
  icons = {
    openLink: faUpRightFromSquare,
    github: faGithub,
    circleClose: faCircleXmark,
  };
  works = [
    {
      name: 'exemple of projects name 1',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rem,porro libero odio magni et magnam aut ipsum velit iusto saepe labore nostrumcommodi earum quam voluptate debitis qui eveniet. Pariatur nam dolorumfacere. Rem commodi deserunt quidem consectetur, excepturi laborum velmagnam ut perferendis non voluptatibus perspiciatis laboriosam porro.',
      url: 'https://google.tn',
      github: undefined,
      src: 'https://assets.designhill.com/resize_img.php?atyp=page_file&pth=ad_ca_nh_bn_org||1754||banner_image_for_desktop_img&flp=1615975496-16316663006051d448ca7e87-29896522.jpg',
      tags: ['reactjs', 'python', 'javascript', 'springboot'],
    },
    {
      name: 'exemple of projects name 2',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rem,porro libero odio magni et magnam aut ipsum velit iusto saepe labore nostrumcommodi earum quam voluptate debitis qui eveniet. Pariatur nam dolorumfacere. Rem commodi deserunt quidem consectetur, excepturi laborum velmagnam ut perferendis non voluptatibus perspiciatis laboriosam porro.',
      url: undefined,
      github: undefined,
      src: 'https://www.designhill.com/design-blog/wp-content/uploads/2020/01/post1-1-min-768x439.jpg',
      tags: ['reactjs', 'python', 'javascript', 'springboot'],
    },
    {
      name: 'exemple of projects name 3',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rem,porro libero odio magni et magnam aut ipsum velit iusto saepe labore nostrumcommodi earum quam voluptate debitis qui eveniet. Pariatur nam dolorumfacere. Rem commodi deserunt quidem consectetur, excepturi laborum velmagnam ut perferendis non voluptatibus perspiciatis laboriosam porro.',
      url: undefined,
      github: 'https://github.com',
      src: undefined,
      tags: ['reactjs', 'python', 'javascript', 'springboot', 'laravel'],
    },
  ];

  selected = this.works[0];
  constructor(private host: ElementRef) {}

  ngOnInit(): void {}
}
