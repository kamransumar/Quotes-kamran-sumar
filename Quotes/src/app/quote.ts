export class Quote {
public showDetails: boolean;

constructor(public id: number, public quote: string, public author: string, public postedBy: string, public datePublished: Date) {
this.showDetails = false;

}
}
