import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']

})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(public translateLang: TranslateService) {
    translateLang.addLangs(['es', 'en']);
    translateLang.setDefaultLang('es');
    this.changeLanguage('es');
    const browserLang = translateLang.getBrowserLang();


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
  public changeLanguage(langCode:string){
    this.translateLang.use(langCode);
    
 }


  ngOnInit(): void {

  }





}
