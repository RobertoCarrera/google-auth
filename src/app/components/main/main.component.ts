import { Component, OnInit} from '@angular/core';
import { AuthGoogleService } from 'src/app/services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  user_info: any;

  constructor(private authGoogleService: AuthGoogleService, private router: Router){
  }

  ngOnInit(): void {
    
    this.showData();

    setTimeout(() => {
      this.reloadComponent();
    }, 5000);
  }

  showData(){

    this.user_info = this.authGoogleService.getProfile();
  }

  logout(){

    this.authGoogleService.logout();
  }

  reloadComponent(){

    let currentURL = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentURL]);
  }
}
