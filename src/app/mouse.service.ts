import {Injectable} from '@angular/core'
import {Subject,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class MouseService {

  private subject:Subject<any>=new Subject()
  observableID:Observable<any>=this.subject as Observable<any>
  constructor() { }
  message(id:string)
  {
    this.subject.next(id)
  }

}