import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  roleList: any[] = [];

  // constructor(private http: HttpClient) {}

ngOnInit(): void {
}

getAllRoles() {
  this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {

  })
}






















  // firstName: string = "Angular Tutorial";
  // angularVersion = "Version 18";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "button";
  // selectedState: string = "";

  // showWelcomeAlert () {
  //   alert("Welcome to Angular 18 Tutorial");
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }
}
