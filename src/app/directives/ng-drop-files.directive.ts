import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/FileItem';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() aboutMouse: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ) {
    this.aboutMouse.emit( true );
    this.preventOpenImage( event );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ) {
    this.aboutMouse.emit( false );
  }

  @HostListener('drop', ['$event'])
  public onDrop( event: any ) {
    
    const transfer = this.getTransfer( event );
    if ( !transfer ) {
      return;
    }
    
    this.fileExtract( transfer.files );
    this.preventOpenImage( event );
    this.aboutMouse.emit( false );
  }




  private getTransfer( event: any ){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private fileExtract( fileList: FileList) {
    console.log(fileList);
    for (const property in Object.getOwnPropertyNames( fileList ) ) {
      const fileTemp = fileList[property];
      
      if ( this.fileCamLoaded( fileTemp ) ) {
        const newFile = new FileItem( fileTemp );
        this.files.push( newFile );
      }
    }

    console.log( this.files );
  }

  private fileCamLoaded( file: File ): boolean {
    if ( !this.fileDropped(file.name) && this.isImage( file.type ) ) {
      return true;
    } else {
      return false;
    }
  }

  private preventOpenImage( event ) {
    event.preventDefault();
    event.stopPropagation();
  }

  private fileDropped( name:string ): boolean {
    for (const file in this.files) {
      if (file.name == name) {
        console.log('ya existe');
        return true;
      }
    }

    return false;
  }

  private isImage( typeFile: string ): boolean {
    return ( typeFile === '' || typeFile === undefined ) ? false : typeFile.startsWith('image') ;
  }
}
