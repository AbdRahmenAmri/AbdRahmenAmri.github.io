import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { faC, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
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
  hideWork() {
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
      name: 'Phishing Attacks',
      description:
        'The phishing attack was the first project I was so enthusiastic about hacking staff so I cloned a website then plugged a form inside to stole user informations',
      url: undefined,
      github: undefined,
      src: '/assets/phishing.jpg',
      tags: ['PHP', 'MySQL', 'javascript'],
    },
    {
      name: 'URL Shortener',
      description:
        "This is not a simple URL shortener like bitly and the others the difference is the ability to share banned links on social media, For exemple if facebook banned your blog portfolio url you just need to short it in then i can share the short link it's simple.",
      url: undefined,
      github: undefined,
      src: '/assets/banned.jpeg',
      tags: ['ajax', 'PHP', 'Google captcha', 'mysql'],
    },
    {
      name: 'HangMan Game',
      description:
        'Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.',
      url: undefined,
      github: 'https://github.com/RmX404/Hangman_Game',
      src: '/assets/hangman.png',
      tags: ['Python', 'Tkinter'],
    },

    {
      name: 'Flappy bird Game',
      description:
        'The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.',
      url: undefined,
      github: undefined,
      src: '/assets/flappybird.jpg',
      tags: ['Python', 'pygame'],
    },
    {
      name: 'Scrum backlog tracker',
      description: "Scrum backlog tracker this project allows the customer to track developing progress,\
       what has been done what has not what is in progress and how long spring has been take who is working\
        on it when did he start when did he finish.\
        you can follow the app links and try it with those accounts:\n\
        Developer email: testdev@test.com\n\
        Customer email: test@test.com\n\
        PASSWORD: 1234",
      url: 'https://g4pfa.pythonanywhere.com/',
      github: 'https://github.com/AbdRahmenAmri/pfahelper',
      src: '/assets/scrum.png',
      tags: ['Python', 'flask', 'sqlite3', 'angular CDN'],
    },
    {
      name: 'Semi auto GPA Calculator',
      description:
        'Its a Grade Point Average (GPA) calculator the difference is you  don\'t need to write the whole program for each semester, you only have to write each module you had and its coefficient then the program will take the rest.',
      url: 'http://fsb.rf.gd',
      github: undefined,
      src: '/assets/fsb.png',
      tags: ['ajax', 'javascript', 'php'],
    },
    {
      name: 'Random Quote Machine',
      description:
        'its part of Front End Development Libraries Projects by Free Code Camp.',
      url: 'https://codepen.io/abdrahmenamri/pen/abYQRjM',
      github: undefined,
      src: 'https://shots.codepen.io/abdrahmenamri/pen/abYQRjM-800.jpg',
      tags: ['reactjs'],
    },
    {
      name: 'Drum machine',
      description:
      'its part of Front End Development Libraries Projects by Free Code Camp.',
      url: 'https://codepen.io/abdrahmenamri/details/gOeZOWx',
      github: undefined,
      src: 'https://shots.codepen.io/abdrahmenamri/pen/gOeZOWx-800.jpg',
      tags: ['reactjs'],
    },
    {
      name: 'javascript calculator',
      description:
      'its part of Front End Development Libraries Projects by Free Code Camp.',
      url: 'https://codepen.io/abdrahmenamri/pen/VwXVEVY',
      github: undefined,
      src: 'https://shots.codepen.io/abdrahmenamri/pen/VwXVEVY-800.jpg',
      tags: ['reactjs'],
    },
    {
      name: '25 + 5 clock',
      description:
      'its part of Front End Development Libraries Projects by Free Code Camp.',
      url: 'https://codepen.io/abdrahmenamri/pen/JjLVoRo',
      github: undefined,
      src: 'https://shots.codepen.io/abdrahmenamri/pen/JjLVoRo-800.jpg',
      tags: ['reactjs'],
    },
  ];

  selected = this.works[0];
  constructor(private host: ElementRef) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.host.nativeElement.classList.add('show');
    }, 1000);
  }

  ngOnInit(): void {}
}
