import { Component, NgModule, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {

  constructor(private service:SharedService) { }

  Albums:any=[];

  ModalTitle:string | undefined;
  album:any;
  AcitivateAddEditAlbumComponent:boolean=false;

  ngOnInit(): void {
    this.refreshAlbums();
  }

  //  Open window to add new album //
  addClick(){
    this.album={
      id:0,
      userId:null,
      title:""
    }
    this.ModalTitle="Add new album";
    this.AcitivateAddEditAlbumComponent=true;
  }

  //  Open window to edit album  //
  editClick(item: any) {
    this.album=item;
    this.ModalTitle="Edit album";
    this.AcitivateAddEditAlbumComponent=true;
  }

  //  Delete album  //
  deleteClick(item: any) {
    if(confirm('Are you sure to delete album?')){
      this.service.deleteAlbum(item.id).subscribe(data=>{alert("Album has been deleted")});
    }
  }

  //  Close add-edit window and refresh website with all albums, including new data //
  closeClick() {
    this.AcitivateAddEditAlbumComponent=false;
    this.refreshAlbums();
  }

  // Refresh website with all albums  //
  refreshAlbums() {
    this.service.getAlbums().subscribe(data=>{
      this.Albums=data;
    });
  }

  
}
