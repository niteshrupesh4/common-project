import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  localUrl = "https://jsonplaceholder.typicode.com/posts/";

  getData(data: number) {
    return this.http.get(this.localUrl + data);
  }
}
