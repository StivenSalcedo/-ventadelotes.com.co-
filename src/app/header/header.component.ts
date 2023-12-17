import { Component, OnInit } from '@angular/core';
import { PathLocationStrategy} from '@angular/common';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],

})
export class HeaderComponent implements OnInit {

  
  faWhatsapp = faWhatsapp;
Menu: any=[];
  public isMenuCollapsed = true;

  constructor( private service: PostService) {
    const _orig_prepareExternalUrl = PathLocationStrategy.prototype.prepareExternalUrl;

    PathLocationStrategy.prototype.prepareExternalUrl = function(internal) {
      const url = _orig_prepareExternalUrl.call(this, internal);
     // console.log('For ' + internal + ' we generated ' + url);
      if (url.endsWith('.html') || url.endsWith('/') || url === '') {
          return url;
      } 
      else
      {
        return url + '/';
      }
    };
    
    //Location.stripTrailingSlash = function (url) {
     //   const /** @type {?} */ match = url.match(/#|\?|$/);
     //   const /** @type {?} */ pathEndIdx = match && match.index || url.length;
     //   const /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
     //   const first = url.slice(0, droppedSlashIdx);
     //   const last = url.slice(pathEndIdx);
    
      //  if (first.endsWith('.html')) {
       //     return first + last;
      //  }
    
      //  return first + '/' + last;
    
   // };
  


  }
  


  ngOnInit(): void {
    this.loadMenu(true);
  }
  loadMenu(reload:boolean){
    var localdata =reload?null: localStorage.getItem('paginas');
    var CurrentDate=new Date();
       if (localdata == null) {
        this.service.getPosts('get', {}, '/paginas?populate=*')
        .subscribe({
          next: data => {
            this.Menu= data;
            this.Menu= this.Menu.data.filter((data: any) => {
              return data.attributes.menu>0;
            });
            this.Menu.forEach((data: any, index2: number) => {
              data.localcreated=CurrentDate;
              data.menu=data.attributes.menu;
            })
            localStorage.setItem('paginas', JSON.stringify(data));
          },
          error: error => {
          
          }

        });
       }
      else {
        this.Menu=JSON.parse(localdata);
        this.Menu=this.Menu.data;
        var CurrentDate1=CurrentDate.getDate()-1;
        this.Menu =this.Menu.filter((data: any) => {
          var current=new Date(data.localcreated);
          return current.getDate()>CurrentDate1 && data.attributes.menu>0;
        });
        this.Menu.forEach((data: any, index2: number) => {
          data.menu=data.attributes.menu;
        })
        if(this.Menu.length==0)
        {
          this.loadMenu(true);
        }
        console.log('this.Menu');
        console.log(this.Menu);
      }
      
  }





}
