import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})



export class FooterComponent implements OnInit {

  reactiveForm: FormGroup;

  onSubmit() {
    console.log(this.reactiveForm);
  }
  
  faFacebookF = faFacebookF;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faLinkedinIn = faLinkedinIn;

  
  constructor(public router: Router, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

  }

  

  openLg() {
   
  }


  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstandlastname: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phonenumber: new FormControl (null, [Validators.required, Validators.pattern("[0-9]{10}")]), 
      comments: new FormControl (null, [Validators.required, Validators.maxLength(240)])

    });
  }

}
