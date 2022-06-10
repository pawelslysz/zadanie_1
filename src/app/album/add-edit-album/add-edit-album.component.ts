import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-album',
  templateUrl: './add-edit-album.component.html',
  styleUrls: ['./add-edit-album.component.css']
})
export class AddEditAlbumComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() album:any;
  id:string | undefined;
  userId:string | undefined;
  title:string | undefined;

  ngOnInit(): void {
    this.id=this.album.id;
    this.userId=this.album.userId;
    this.title=this.album.title;
  }

  //  Add new album //
  addAlbum() {
     var val = {
       id:this.id,
       userId:this.userId,
       title:this.title
     };

     this.service.addAlbum(val).subscribe({
      next(response){alert("Added");}
     })
  }

  //  Edit album  //
  updateAlbum() {
    var val = {
      id:this.id,
      userId:this.userId,
      title:this.title
    };

    this.service.updateAlbum(val).subscribe({
      next(response){alert("Updated");}
     })
  }

}
