export class BaseEntity{
  id:number;
  name:string;
  get parent(){
    return null
  }
  get children(){
    return null
  }
  get parentName():string{
    return this.parent.name;
  }
  set parentName(value){}
  get childrenNames():string{
    return this.children.map(ch=>ch.name).join(", ")
  }
  set childrenNames(value){}
}
