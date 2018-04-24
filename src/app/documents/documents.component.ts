import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'http:google.com'
    },
    {
      title: "My Second Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'http:google.com'
    },
    {
      title: "My Last Doc",
      description: 'qwerty',
      file_url: 'http://google.com',
      updated_at: '11/11/18',
      image_url: 'http:google.com'
    },
  ]
}