import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PartdataService {

  part: any;

  constructor(
    private http: HttpClient
  ) { }

  searchByVehicle_type(vehicle_type) {
    return this.http.post('http://localhost:3000/part/type',vehicle_type).map((res: any) => res);
  }

  searchByBrand(brand) {
    return this.http.post('http://localhost:3000/part/brand',brand).map((res: any) => res);
  }

  searchByCondition(condition) {
    return this.http.post('http://localhost:3000/part/condition',condition).map((res: any) => res);
  }

  searchById(id) {
    return this.http.post('http://localhost:3000/part/id',id).map((res: any) => res);
  }


  searchByAuthor(author) {
    return this.http.post('http://localhost:3000/part/author',author).map((res: any) => res);
  }

  savePart(part){
    return this.http.post('http://localhost:3000/part/savepart',part).map((res:any) => res);
  }

  saveComment(part) {
    return this.http.post('http://localhost:3000/part/savecomment',part).map((res:any) => res);
  }

  saveRate(part) {
    console.log(part);
    return this.http.post('http://localhost:3000/part/saverate',part).map((res:any) => res);
  }


  editPart(part){
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/part/update', part, {headers: headers}).map((res: any) => res);
  }

  deletePart(part){
    return this.http.post('http://localhost:3000/part/delete',part).map((res:any) => res);
  }

  searchAllPart() {
    return this.http.post('http://localhost:3000/part/searchall',{user:"as"}).map((res: any) => res);
  }

  searchByIdMult(id_lis) {
    console.log(id_lis);
    return this.http.post('http://localhost:3000/part/id_mult', id_lis).map((res: any) => res);
  }

}
