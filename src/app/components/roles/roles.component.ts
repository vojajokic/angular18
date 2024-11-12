import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient);
  roleList: IRole[] = [];

  // constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.getAllRoles();
}

getAllRoles() {
  this.http.get("https://projectapi.gerasim.in/api/Insurance/GetAllCategories"
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': '*'
    // }
  ).subscribe((res: any) => {
    this.roleList = res;
    console.log(res)
  })
}

}
