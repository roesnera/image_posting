import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  constructor(private client: HttpClient) { }

  public uploadFile(file: File) {
    const formData = new FormData()
    formData.append('media', file)
    return this.client.post('http://127.0.0.1:8000/images/new', formData)
  }
}
