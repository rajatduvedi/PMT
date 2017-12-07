 import{ Injectable } from '@angular/core';
import{ Http , Response , Headers} from '@angular/http';

@Injectable()
export class GroupChatService{
  private postMsgUrl = 'http://localhost:8000/apis/saveChat';
  private getMsgUrl = 'http://localhost:8000/apis/getChat';
  constructor( private http: Http) {
  }
  saveChat(item) {
    let body = '';
    for(let entry in item) {
        body += entry + '=' + encodeURIComponent(item[entry]) + '&';
    }
    body = body.substring(0, body.length-1);
    console.log(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:8000');
    // headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.post(this.postMsgUrl, body, {headers: headers})
    .map((res: Response) => {
        return res.json();
    });
  }

  getChat(){
    return this.http.get(this.getMsgUrl)
    .map((res:Response) => {
      return res.json();
    });
  }
}
