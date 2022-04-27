import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  constructor(private http: HttpClient) {}

  processVideo(data: any) {
    return this.http.post(`/api/video/process`, data);
  }
}
