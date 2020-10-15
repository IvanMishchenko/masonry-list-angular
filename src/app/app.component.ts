import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = [
    { 
      src: '../assets/images/guinea-1.jpg',
      description: ' Lets spread the love. Tag a guinea-loving friend! Follow @lovetheguinea and use #lovetheguinea to get featured!'      
    },
    { 
      src: '../assets/images/guinea-5.jpg',
      description: '#guineapig #guineapigs #guineapigsofinstagram #guineapiglove #guineapigsofig #guineapiglife #guineapiggy #guineapiglover #guineapigstagram #guineapigofinstagram #guineapiglovers #guineapigmom #guineapigposts101 #guineapigsofinsta #guineapigofig #guineapigoftheday #guineapiggies #guineapigcare #guineapigslove #guineapigherd #guineapigsoninstagram #guineapigdaily #guineapiggie #guineapiggiesofig #cavylover #lovemyguineapigs #cavycuteness #meerschweinchen #guineapigmoments'
    },
    { 
      src: '../assets/images/guinea-3.jpeg',
      description: '#lovetheguinea #guineapig #guineapigs #guineapigsofinstagram #guineapiglove #guineapigsofig #guineapiglover #guineapiglife #guineapigposts101 #guineapiglovers #guineapiggy #guineapigstagram #guineapigsofinsta #smallanimal #adorable #fluffy #furry #fuzzy #animals #furryfriend #fluffylove #pet #love #critter #animal #sweet #smallfluffy_ig #guineapigsof_ig'
    },
    { 
      src: '../assets/images/guinea-4.jpg',
      description: '#lovetheguinea #guineapig #guineapigs #guineapigsofinstagram #guineapiglove #guineapigsofig #guineapiglover #guineapiglife #guineapigposts101 #guineapiglovers #guineapiggy #guineapigstagram #guineapigsofinsta #smallanimal #adorable #fluffy #furry #fuzzy #animals #furryfriend #fluffylove #pet #love #critter #animal #sweet #smallfluffy_ig #guineapigsof_ig'
    }
  ]
}
