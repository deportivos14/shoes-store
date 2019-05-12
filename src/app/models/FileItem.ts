export class FileItem {
    public file: File;
    public nameFile: string;
    public url: string;
    public uploading: boolean;
    public proggres: number;

    constructor( file: File ){
        this.file = file;
        this.nameFile = file.name;
        
        this.uploading = false;
        this.proggres = 0;
    }
}