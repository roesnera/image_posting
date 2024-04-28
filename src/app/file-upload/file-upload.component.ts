import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ClientService],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  protected fileName = ''

  constructor(private client: ClientService) { }

  protected fileSelected(event: Event) {
    console.log(event)

    const target = event.target as HTMLInputElement
    const file = target.files ? target.files[0] : null

    if (file)  {
      console.log(file)

      this.fileName = file.name

      this.client.uploadFile(file).subscribe((res) => console.log(res))
    }
  }
}
