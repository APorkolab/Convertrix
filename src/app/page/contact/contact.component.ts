import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // setup typewriter effect in the terminal demo
    if (document.getElementsByClassName('demo').length > 0) {
      let i = 0;
      const txt = ` contact_info.md
				            [Entry mode; press Ctrl+D to save and quit; press Ctrl+C to quit without saving]
				
				            ### The programmer of this application is Ádám Dr. Porkoláb.
                    You can contact him by his webpage:  https://www.adamporkolab.hu
				
				            - The GitHub page of the author: https://github.com/APorkolab/`;
      const speed = 60;

      function typeItOut() {
        if (i < txt.length) {
          document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeItOut, speed);
        }
      }

      setTimeout(typeItOut, 1800);
    }
  }
}
