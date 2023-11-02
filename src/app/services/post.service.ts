import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Options } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://ventadelotes.com.co/api/api';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(Type?:string,ObjectData?:any,Action?:string ){
    let Params = new HttpParams();
   // Params = Params.append('username', 'TEST');
   // Params = Params.append('password', 'TEST');
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    /*header.append('Referrer-Policy', 'no-referrer');
    header=header.set('Referrer-Policy', 'no-referrer');
    header=header.set('Accept', '');
    header=header.set('Sec-GPC', '1');
    header=header.set('Accept-Encoding', 'gzip, deflate');
    header=header.set('Accept-Language', 'en-US,en;q=0.9');*/
    var options = { headers: header, params: Params,body:JSON.stringify(ObjectData) };
    var urlpost=this.url;
    Action!=undefined?urlpost+='/'+Action:urlpost=this.url;
    if(Type=='post'){
      return this.httpClient.post(urlpost,JSON.stringify(ObjectData),options);
    }
    else
    {
      return this.httpClient.get(this.url+Action,options);
    }
   
    
  }
}
