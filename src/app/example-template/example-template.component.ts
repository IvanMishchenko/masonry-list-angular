import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-template',
  templateUrl: './example-template.component.html',
  styleUrls: ['./example-template.component.css']
})
export class ExampleTemplateComponent {
  @Input() src: string;
  @Input() description: string;  
}