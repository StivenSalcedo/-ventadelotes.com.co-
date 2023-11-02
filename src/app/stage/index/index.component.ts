import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faWrench, faHeadset, faLayerGroup, faCloud, faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Title, Meta } from '@angular/platform-browser';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
  host: { 'class': 'w-100' },
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class IndexComponent implements OnInit {

  paused = true;

  faWrench = faWrench;
  faHeadset = faHeadset;
  faLayerGroup = faLayerGroup;
  faCloud = faCloud;
  faCircleNotch = faCircleNotch;

  DataResponseDetail: any = [];
  loading: boolean = true;
  CurrentUrl: string = '';
  public DataResponse: any = [];
  Search: string = "";
  Spin: boolean = false;
  InitForm: boolean = false;
  faSpinner = faSpinner;
  Pages: any = [];
  Page: any = {};

  constructor(private router: Router, private route: ActivatedRoute, config: NgbCarouselConfig, public meta: Meta, public title: Title, private service: PostService) {
    this.CurrentUrl = this.router.url;

    this.title.setTitle('Cargo Software | Misiil');
    this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
    this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });
    this.meta.updateTag({ property: 'og:image', content: 'https://test.misiil.com/filescodes/no-borrar-files-companies/logo-mail.png' });


  }



  ngOnInit(): void {
    this.LoadData();




  }

  LoadData(): void {
    this.CurrentUrl = this.router.url;
   if(this.CurrentUrl=='' || this.CurrentUrl=='/')
   {
    this.CurrentUrl='/home';
    }
    setTimeout(a=>{
      this.OnSearch(this.CurrentUrl, true);
    },1000)
    

  }

  OnFilterPage(Data: any, Page: String) {
    console.log('Page');
   console.log(Page);
    var PageFilter = Data.data.filter((data: any) => { return data.attributes.Url === Page || data.attributes.Url === Page + '/' });
    if (PageFilter.length > 0) {
      this.loading = false;
      this.Page = PageFilter[0].attributes;
      this.ChangeMeta(this.Page.MetaData);

     /* setTimeout(function () {
        const element = document.querySelector("#DetailPost");
        element.scrollIntoView(true);
      }, 1100);*/

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
        this.service.getPosts('get', {}, '/paginas')
          .subscribe({
            next: data => {
              this.Spin = false;

              localStorage.setItem('paginas', JSON.stringify(data));
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
    console.log('Data');
    console.log(Data);
    Data.forEach((data: any, index2: number) => {
      if(data.tipo=='tittle')
      {
        this.title.setTitle(data.valor);
      }
      else if(data.tipo=='property')
      {
        this.meta.updateTag({name: data.nombre, content: data.valor  });
      }
      else if(data.tipo=='name')
      {
        this.meta.updateTag({ name: data.nombre, content: data.valor });
      }
    })
    


  }

}


