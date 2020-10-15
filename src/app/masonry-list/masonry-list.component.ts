import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-masonry-list',
  templateUrl: './masonry-list.component.html',
  styleUrls: ['./masonry-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasonryListComponent {
  /**
   * The template to use when displaying items
   */
  @Input() listItemTemplate: TemplateRef<any>;
  
  /**
   * The items to display
   */
  @Input() items: any[] = [];
}