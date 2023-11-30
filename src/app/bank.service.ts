import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Country } from './interface/country';
import { Observable, tap } from 'rxjs';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private http: HttpClient) { }

    
  
 // https://api.worldbank.org/v2/country/?format=JSON

 private apiUrl: any;
private data: any;
getCountries(): Observable<Country> {
  return this.http.get<Country>('https://api.worldbank.org/v2/country/?format=JSON')
  
  

  
  
};
getData(){
  // const url ='http://api.worldbank.org/v2/country/br?format=json'
  const url ='https://api.worldbank.org/v2/country/?format=JSON'
  this.http.get(url).subscribe((res: any)=>{
    this.data = res
    console.log(this.data)
  })
}




}
