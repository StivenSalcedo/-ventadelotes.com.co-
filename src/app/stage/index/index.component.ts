import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faWrench, faHeadset, faLayerGroup, faCloud, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  host: { 'class': 'w-100' },
  providers: [NgbCarouselConfig],
  // add NgbCarouselConfig to the component providers
})

export class IndexComponent implements OnInit {

  @ViewChild('contentFrame') iframe: ElementRef;
  currentFrameUrl: string;
  paused = true;
  faWrench = faWrench;
  faHeadset = faHeadset;
  faLayerGroup = faLayerGroup;
  faCloud = faCloud;
  faCircleNotch = faCircleNotch;
  faSpinner = faSpinner;
  frameService: any;
  Page: any = {};
  Pages: any = [];

  constructor(private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, config: NgbCarouselConfig, public meta: Meta, public title: Title, private service: PostService) {




  }


  ngOnInit(): void {
    this.service.getPosts('get', {}, '/paginas?filters[titulo][$eq]=inicio')
      .subscribe({
        next: data => {
          this.Pages = data;
          this.Page = this.Pages.data;
          if (this.Pages.data.length > 0) {
            this.ChangeMeta(this.Pages.data[0].attributes.metadata);
          }
          else {
            this.ChangeMeta([]);
          }
        },
        error: error => {
        }
      });


    try {
      setTimeout(function () {
        let el = document.getElementById('scrollId');
        if (el) {
          el.scrollIntoView();
        }
      }, 1500)
    }
    catch (ex) {

    }



  }
  ShareText() {
    let shareData = {
      title: 'Lotes ',
      text: 'ubicación lotes',
      url: 'http://www.google.com/maps/place/4.363960,-75.107323/@4.363960,-75.107323,16z'
    }
    navigator.share(shareData)
      .then((data) => {
        console.log('shared successfully');
      }).catch((e) => {
        console.log('Error: ' + e)
      });
  }

  ChangeMeta(Data?: any[]) {
    this.meta.removeTag('description');
    this.meta.removeTag('title');
    this.meta.removeTag('description');
    this.meta.removeTag('url');
    this.meta.removeTag('type');
    try {
      this.meta.removeTag('keywords');
      this.meta.removeTag('subject');
      this.meta.removeTag('copyright');
      this.meta.removeTag('language');
      this.meta.removeTag('robots');
      this.meta.removeTag('revised');
      this.meta.removeTag('abstract');
      this.meta.removeTag('topic');
      this.meta.removeTag('summary');
      this.meta.removeTag('Classification');
      this.meta.removeTag('author');
      this.meta.removeTag('designer');
      this.meta.removeTag('reply-to');
      this.meta.removeTag('owner');
      this.meta.removeTag('url');
      this.meta.removeTag('identifier-URL');
      this.meta.removeTag('directory');
      this.meta.removeTag('pagename');
      this.meta.removeTag('category');
      this.meta.removeTag('coverage');
      this.meta.removeTag('distribution');
      this.meta.removeTag('rating');
      this.meta.removeTag('revisit-after');
      this.meta.removeTag('subtitle');
      this.meta.removeTag('target');
      this.meta.removeTag('HandheldFriendly');
      this.meta.removeTag('MobileOptimized');
      this.meta.removeTag('date');
      this.meta.removeTag('search_date');
      this.meta.removeTag('ResourceLoaderDynamicStyles');
      this.meta.removeTag('medium');
      this.meta.removeTag('syndication-source');
      this.meta.removeTag('original-source');
      this.meta.removeTag('verify-v1');
      this.meta.removeTag('y_key');
      this.meta.removeTag('pageKey');
      this.meta.removeTag('image');
      this.meta.removeTag('site_name');
      this.meta.removeTag('page_id');
      this.meta.removeTag('application-name');
      this.meta.removeTag('email');
      this.meta.removeTag('phone_number');
      this.meta.removeTag('fax_number');
      this.meta.removeTag('latitude');
      this.meta.removeTag('longitude');
      this.meta.removeTag('street-address');
      this.meta.removeTag('locality');
      this.meta.removeTag('region');
      this.meta.removeTag('postal-code');
      this.meta.removeTag('country-name');
      this.meta.removeTag('video');
      this.meta.removeTag('audio');
      this.meta.removeTag('og:description');
    this.meta.removeTag('og:title');
    this.meta.removeTag('og:description');
    this.meta.removeTag('og:url');
    this.meta.removeTag('og:type');
    this.meta.removeTag('og:image');
    this.meta.removeTag('og:image:secure_url');
    }
    catch (ex) { }
    if (Data.length > 0) {
      Data.forEach((data: any, index2: number) => {
        if (data.tipo == 'tittle') {
          this.title.setTitle(data.valor);
        }
        else if (data.tipo == 'property') {
          this.meta.updateTag({ property: data.nombre, content: data.valor });
        }
        else if (data.tipo == 'name') {
          this.meta.updateTag({ name: data.nombre, content: data.valor });
        }
      })
    }
    else {
      this.title.setTitle('Venta de lotes | Ibague');
      this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
      this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
      this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
      this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });
    }
  }





}


