export class Recipe{
  public name: string;
  public description: string;
  public imgpath: string;

  constructor(name: string, description: string,imgpath: string){
    this.name= name;
    this.description= description;
    this.imgpath= imgpath;
  }
}
