import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild, AfterContentInit, Renderer2 } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass'],
  host: {'class': 'w-100'}
})
export class BaseComponent implements OnInit {
  public DataResponse: any = [];
  Search: string = "";
  Spin: boolean = false;
  loading: boolean = true;
  CurrentUrl: string = '';
  Pages: any = [];
  Page: any = {};
  Host: string = "";
  currentMenuState: boolean;
  InitForm: boolean = false;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  constructor(private elementRef: ElementRef, private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, config: NgbCarouselConfig, public meta: Meta, public title: Title, private service: PostService, private renderer: Renderer2) {
    this.CurrentUrl = this.router.url;
    this.Host = service.url.replace('/api', '');
    this.title.setTitle('Venta de lotes | Ibague');
    this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
    this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });
    this.currentMenuState = true;
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.LoadData();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

  }

  ngOnInit(): void {
    this.Page.imagen = {};
    this.LoadData();
    try {
      setTimeout(function () {
        let el = document.getElementById('scrollId');
        if (el) {
          el.scrollIntoView();
        }

      }, 2000)
    }
    catch (ex) {

    }

  }
  ngAfterViewInit() {
    this.renderer.listen(this.elementRef.nativeElement, 'click', (event) => {
      console.log(event);
      if (event.srcElement.id == "location") {
        this.ShareText();
      }
      else if (event.srcElement.id == "whatsapp") {
        window.open("http://wa.me//573212472489", "_blank");
      }

    });

  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
  togglePaused() {
    throw new Error('Method not implemented.');
  }

  HaveImages(): boolean {
    if (this.Page.imagen.data != null) {
      var Images = this.Page.imagen.data.filter((data: any) => { return data.attributes.ext == '.png' || data.attributes.ext == '.jpg' || data.attributes.ext == '.jpeg' || data.attributes.ext == '.gif' });
      if (Images.length > 0) {
        return true;
      }
    }
    return false;
  }
  HaveVideos(): boolean {
    if (this.Page.imagen.data != null) {
      var Images = this.Page.imagen.data.filter((data: any) => { return data.attributes.ext == '.mp4' || data.attributes.ext == '.mov' });
      if (Images.length > 0) {
        return true;
      }
    }
    return false;
  }
  LoadData(): void {

    this.CurrentUrl = this.router.url;
    if (this.CurrentUrl == '' || this.CurrentUrl == '/') {
      this.CurrentUrl = '/home';
    }
    setTimeout(a => {
      this.OnSearch(this.CurrentUrl, true);
    }, 1000)


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

  OnFilterPage(Data: any, Page: String) {
    console.log('Page');
    console.log(Page);
    var PageFilter = Data.data.filter((data: any) => { return data.attributes.url === Page || data.attributes.url === Page + '/' });
    if (PageFilter.length > 0) {

      this.Page = PageFilter[0].attributes;
      this.Page.contenido=this.Page.contenido.replace(/{YEAR}/g,new Date().getFullYear().toString());
      this.Page.contenido = this.sanitizer.bypassSecurityTrustHtml(this.Page.contenido);
      console.log('this.Page');
      console.log(this.Page);
      this.ChangeMeta(this.Page.metadata);


      //setTimeout(function () {
      this.loading = false;
      // }, 500);

    }
    else {

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['pagina-no-encontrada']));
      //this.router.navigate(['pagina-no-encontrada']);

    }

  }

  OnSearch(value?: string, category?: boolean) {
    var SearchString = '';
    SearchString = value ? value : this.Search;

    if (SearchString != 'pagina-no-encontrada') {
      this.Spin = true;
      this.InitForm = true;


      var data = localStorage.getItem('paginas');
      /* if (data != null) {
         this.Pages = JSON.parse(data);
         this.OnFilterPage(this.Pages, this.router.url);
       }*/
      //else {
      this.service.getPosts('get', {}, '/paginas?populate=*')
        .subscribe({
          next: data => {
            this.Spin = false;

            //localStorage.setItem('paginas', JSON.stringify(data));
            this.OnFilterPage(data, this.router.url);
            var data1: any = [];
            // var data1={};
            data1.push({ Load: false });
            //this.SendData.emit(data1);
          },
          error: error => {
            this.Spin = false;
          }

        });
      //}
    }
  }


  ChangeMeta(Data?: any[]) {
    try {
      this.meta.removeTag('keywords');
      this.meta.removeTag('description');
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
      this.meta.removeTag('title');
      this.meta.removeTag('ResourceLoaderDynamicStyles');
      this.meta.removeTag('medium');
      this.meta.removeTag('syndication-source');
      this.meta.removeTag('original-source');
      this.meta.removeTag('verify-v1');
      this.meta.removeTag('y_key');
      this.meta.removeTag('pageKey');
      this.meta.removeTag('type');
      this.meta.removeTag('url');
      this.meta.removeTag('image');
      this.meta.removeTag('site_name');
      this.meta.removeTag('description');
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
    }
    catch (ex) { }

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

}
