import { stations } from '../models/stations.interface';
import { bus } from '../models/bus.interface';
import { metro } from '../models/metro.interface';
import { localBus } from '../models/localBus.interface';
import { Injectable } from '@angular/core';

/* this will get the schedule using http and save that in array */
@Injectable()
export class ScheduleService {
  private favouriteBus: bus[] = [];
  private favouriteLocalBus: localBus[] = [];
  private favouriteMetro: metro[] = [];
  // private tripletBus:any[]=[];
  // private tripletLocalBus:any[]=[];
  // private tripletMetro:any[]=[];

  constructor() {}

  addCommuteToFavourite(commute: any) {
    if (commute.type == 'metro') {
      this.favouriteMetro.push(commute);
    } else if (commute.type == 'intra_bus') {
      this.favouriteBus.push(commute);
    } else {
      this.favouriteLocalBus.push(commute);
    }
  }


  // addingTriplets(commute:any){
  //   if (commute.type == 'metro') {

  //   } else if (commute.type == 'intra_bus') {

  //   } else if(commute.type == 'inter_bus'){
  //     let notyetThree: boolean = true;
  //     let sizeThreeArray: string []=[];
  //     commute.depTime.value.array.forEach(element => {
  //       if(notyetThree){
  //         if(Date.parse(element)> Data.parse()){
  //           if(index is 1 |2 |3 ){
  //             add first three to array
  //           }else{
  //             add x-1, x-2, x-3 to array
  //           }
  //         }else{
  //             do nothing
  //         }
  //       }
  //     });
  //   }
  // }

  removeCommuteFromFavourite(commute: metro | localBus | bus) {
    const type = commute.type;
    if (type == 'metro') {
      const position = this.favouriteMetro.findIndex((commuteEL: metro) => {
        return commuteEL.id == commute.id;
      });
      this.favouriteMetro.splice(position, 1);
    } else if (type == 'inter_bus') {
      const position = this.favouriteLocalBus.findIndex(
        (commuteEL: localBus) => {
          return commuteEL.id == commute.id;
        }
      );
      this.favouriteLocalBus.splice(position, 1);
    } else {
      const position = this.favouriteBus.findIndex((commuteEL: bus) => {
        return commuteEL.id == commute.id;
      });
      this.favouriteBus.splice(position, 1);
    }
  }

  removeCommuteUsingStation(commute: stations) {
    if (commute.url.includes('subway')) {
      const position = this.favouriteMetro.findIndex((commuteEL: metro) => {
        return commuteEL.id == commute.id;
      });
      this.favouriteMetro.splice(position, 1);
    } else if (commute.url.includes('inter')) {
      const position = this.favouriteLocalBus.findIndex(
        (commuteEL: localBus) => {
          return commuteEL.id == commute.id;
        }
      );
      this.favouriteLocalBus.splice(position, 1);
    } else {
      const position = this.favouriteBus.findIndex((commuteEL: bus) => {
        return commuteEL.id == commute.id;
      });
      this.favouriteBus.splice(position, 1);
    }
  }

  isCommuteFavouriteForSchedulePage(commute: metro | localBus | bus) {
    const type = commute.type;
    console.log(type);
    if (type == 'metro') {
      return this.favouriteMetro.find((commuteEl: metro) => {
        return commuteEl.id == commute.id;
      });
    } else if (type == 'intra_bus') {
      return this.favouriteBus.find((commuteEl: bus) => {
        return commuteEl.id == commute.id;
      });
    } else {
      return this.favouriteLocalBus.find((commuteEl: localBus) => {
        return commuteEl.id == commute.id;
      });
    }
  }

  isCommuteFavourite(commute: stations) {
    if (commute.url.includes('subway')) {
      return this.favouriteMetro.find((commuteEl: metro) => {
        return commuteEl.id == commute.id;
      });
    } else if (commute.url.includes('inter')) {
      return this.favouriteLocalBus.find((commuteEl: localBus) => {
        return commuteEl.id == commute.id;
      });
    } else {
      return this.favouriteBus.find((commuteEl: bus) => {
        return commuteEl.id == commute.id;
      });
    }
  }

  getFavouriteCommute() {
    return {
      localbus: this.favouriteLocalBus.slice(),
      bus: this.favouriteBus.slice(),
      merto: this.favouriteMetro.slice()
    };
  }
}
