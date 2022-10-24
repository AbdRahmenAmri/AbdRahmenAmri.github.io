import { Component, ElementRef, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTelegram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  icons:Array<any> = [
    {icon:faEnvelope,text:'Email',link:'mailto:abdrahmen.3amri@gmail.com'},
    {icon:faFacebook,text:'Facebook',link:'https://www.facebook.com/abd.rahmen.5811877/'},
    {icon:faTelegram,text:'Telegram',link:'https://t.me/siabdou'},
    {icon:faWhatsapp,text:'Whatsapp',link:'tel:+21651543503'},
    {icon:faGithub,text:'Github',link:'https://github.com/AbdRahmenAmri'},
  ] 

  constructor(private host:ElementRef) { }

  ngOnInit(): void {
    this.host.nativeElement.classList.add('show');
  }

}
