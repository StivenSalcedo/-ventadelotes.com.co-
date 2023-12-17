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

  constructor(private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, config: NgbCarouselConfig, public meta: Meta, public title: Title, private service: PostService) {
   
    
    this.title.setTitle('Venta de lotes | Ibague');
    this.meta.updateTag({ name: 'description', content: 'venta de lotes' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_CO' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ventadelotes.com.co/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Venta De Lotes | Ibague' });
    this.meta.updateTag({ property: 'og:description', content: 'venta de lotes' });
   

  }
  

  ngOnInit(): void {

    

    try {
      setTimeout(function () {
        let el = document.getElementById('scrollId');
        if(el)
        {
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

  



}


