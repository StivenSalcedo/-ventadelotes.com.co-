import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { PostService } from '../services/post.service';
interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.sass'],
  host: { 'class': 'w-100' }
})
export class ContactformComponent implements OnInit {

  faSpinner = faSpinner;
  reactiveForm: FormGroup;
  DataPost: any = {};
  alerts: any = [];


  onSubmit() {
    this.DataPost.CfTelephone = String(this.DataPost.CfTelephone);
    this.service.getPosts('post', this.DataPost)
      .subscribe({
        next: data => {
          this.ngOnInit();
          this.alerts.push({
            type: 'success',
            message: '¡Información registrada con éxito, pronto lo contactaremos!'
          });
          setTimeout(() => this.alerts = [], 5000);
        },
        error: error => {
          this.alerts.push({
            type: 'warning',
            message: '¡Hubo un error al registrar la información, por favor intente de nuevo!'
          });
        }

      });
    console.log(this.reactiveForm);
  }
  close(alert: Alert) {
    this.alerts.splice.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = [];
  }

  constructor(private service: PostService, public meta: Meta, public title: Title) {

    this.title.setTitle('Contacto | Misiil');
    this.meta.updateTag({ name: 'description', content: 'Registre cotizaciones, peticiones, quejas, reclamos o sugerencias desde nuestro formulario de contacto.' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.misiil.com/contacto/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Contacto | Misiil' });
    this.meta.updateTag({ property: 'og:description', content: 'Registre cotizaciones, peticiones, quejas, reclamos o sugerencias desde nuestro formulario de contacto.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });

  }

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl(null, [Validators.minLength(5)]),
      NameCompany: new FormControl(null, [Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phonenumber: new FormControl(null, [Validators.required, Validators.pattern("^(?=(?:.{7}|.{10}|.{13})$)[0-9]*$")]),
      comments: new FormControl(null, [Validators.required, Validators.maxLength(240)])

    });
  }

}
