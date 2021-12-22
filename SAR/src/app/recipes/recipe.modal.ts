export class Receipe{
    public name : string;
    public description : string;
    public imgpath : string;

    constructor(name : string, dec: string, imgpath: string){
        this.name = name;
        this.description = dec;
        this.imgpath = imgpath;
    }
}