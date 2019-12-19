import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // private url = 'http://abcjsonplaceholder.typicode.com/posts';

    constructor(private url: string, private http: Http) {
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
    }

    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        // .catch((error: Response) => {
        //   return Observable.throw(new AppError(error));
        // });
    }

    getAll() {
        return this.http.get(this.url);
    }
}
