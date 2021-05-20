import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wiki } from 'src/app/models/wiki';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.css']
})
export class AddWikiComponent implements OnInit {

  public project_id;
  public config;

  wiki = new Wiki();
  constructor(private route:ActivatedRoute, private wikiService:WikiService ) {
    this.config = { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] };
    //{ toolbar: [ 'heading', '|', 'bold', 'italic' ] }
   }

  ngOnInit(): void {
    //Get id from url
    this.project_id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    this.wiki.project_id = this.project_id;
    console.log(this.wiki);

    this.wikiService.storeData(this.wiki).subscribe(
      response => {
        console.log(response);
      }
    )

  }

}
