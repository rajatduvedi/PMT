import{ Injectable } from '@angular/core';
import{ Http , Response , Headers} from '@angular/http';
// import{ Observable }from 'rxjs/Observable';
//
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';

@Injectable()
export class ProjectService{
  private dataurl='http://localhost:8000/apis/createProj';
  private getdataurl='http://localhost:8000/apis/getProj/';
  constructor( private http:Http){}
  userProject(item:any) {
        let body = '';
        for(let entry in item) {
            body += entry + '=' + encodeURIComponent(item[entry]) + '&';
        }
        body = body.substring(0, body.length-1);
        console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.dataurl, body, {headers: headers})
        .map((res: Response) => {
            return res.json();
        });
    }
    getproject(id:any){
        this.getdataurl = this.getdataurl + id;
        // console.log(this.getdataurl);
        return this.http.get(this.getdataurl)
        .map((res:Response) => {
          return res.json();
        });
    }

}
