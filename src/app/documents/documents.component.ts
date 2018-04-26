import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'https://c1.staticflickr.com/3/2586/4233673443_35845c6074_b.jpg'
    },
    {
      title: "My Second Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'https://www.maxpixel.net/static/photo/1x/Work-Freelancer-Businessman-Productivity-1995786.jpg'
    },
    {
      title: "My Last Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'https://c1.staticflickr.com/1/608/21167500651_ba42a5c4a0_b.jpg'
    },
  ]
}