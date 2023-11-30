import { Component, OnInit, ViewChild ,} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './interface/country';
import { CountryService } from './bank.service';
import { map, filter, tap } from 'rxjs/operators'

declare function muttbutt(): void;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mapper';
 public data:any = [];
public bank:any = [];
private buttonCounter:number = 0;
public costa:string = 'wasta';


showId: boolean;

constructor(private countryService: CountryService) {

  this.showId = false;

  
}

clickHandler(){
 console.log("maserati");
 
  
}

onclick() {
  console.log("This .data should come after this");
  this.activator();
  console.log(this.costa);

}
onclicky() {
//  this.bank = []
console.log("above this.bank will be emptied");
console.log(this.bank);


}



activator(){
console.log(this.data + " This.data is before this");
 var store: any = []
 store = this.data[1];
 this.bank = store;
 console.log(this.bank[1] + " wow " + this.data[1][8].name);
 console.log('butt' + '  ' + store);
 
 
 
 var list = document.createElement('ul');

 for ( var i = 0; i < store.length; i ++) {
  var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(store[1][i]));

        // Add it to the list:
        list.appendChild(item);
 }
 console.log(store[1][5] + " part fart :)");
 
 return list;

 

}

showZid(show: boolean){
  this.showId = show;
}


ngOnInit(): void {
  this.onGetCountries();
  // throw new Error Error('Method not implemented')
  console.log("onGetCountries called");
  console.log(this.data);
  console.log(this.bank,  " this is this.bank before get request");
  
  

}

onGetCountries(): void {
  this.countryService.getCountries().subscribe((res) => {
    this.data = res;
    
  });
  console.log(this.data + "  " + "agian")

}
 




// {next:
//   (response: Country) => this.data = response,
//   error:
//   (error: any) => console.log(error),
//   complete:
//   () => console.log(this.data[1][35]['id'])
//   ,
  



// }


  //http://api.worldbank.org/v2/country/br?format=json
//   public data:any = []
//  constructor(private http: HttpClient) {
   
//  }


//  getData(){
//    const url ='http://api.worldbank.org/v2/country/br?format=json'
//    this.http.get(url).subscribe((res)=>{
//      this.data  = res;
     
//      let twin = this.data;

  
   
//      console.log(twin);
//      console.log(this.data);
//      let array = this.data;
// for(let i = 0; i < array[1].length; i++){
  
// }
     
//    })
   
//  }








//  countriesFiltered(): this.data[] {
//   if (this.filter === 'all') {
//     return this.countries;
//   } else if (this.filter === 'active') {
//     return this.todos.filter(todo => !todo.done);
//   } else if (this.filter === 'done') {
//     return this.todos.filter(todo => todo.done);
//   }
// }



// }


//You can access the data array of the object, then, the item of the array by index and so on, like this}


}