import { stations } from '../data/stations.interface';
import { bus } from '../data/bus.interface';
import { metro } from '../data/metro.interface';
import metro01 from '../data/metro01';
import intra01 from '../data/intra01';
import inter01 from '../data/inter01';
import { localBus } from '../data/localBus.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* this will get the schedule using http and save that in array */
@Injectable()
export class ScheduleService {
  private favouriteBus: bus[] = [];
  private favouriteLocalBus: localBus[] = [];
  private favouriteMetro: metro[] = [];
  private films: any;
  constructor(private httpClient: HttpClient) {
    this.films = this.httpClient.get('http://203.253.128.164:1026/v2/entities/subway_yataptowangsimni');
    this.films.subscribe(data => {
      console.log('my data: ', data);
    });
  }

  // remove all the body in the getCommuteSchedule and write a http get methode
  getCommuteSchedule(commute: stations) {
    if (commute.url.includes('subway')) {
      const commuteDetials = metro01;
      return commuteDetials;
    } else if (commute.url.includes('inter')) {
      const commuteDetials = inter01;
      return commuteDetials;
    } else {
      const commuteDetials = intra01;
      return commuteDetials;
    }
  }

  addCommuteToFavourite(commute: bus | localBus | metro) {
    //Todo Extract the url
    //Todo get the commute schedule
    //check type
    //put it in appropriate array

    if (commute.type == 'metro') {
      const commuteDetials = metro01;
      this.favouriteMetro.push(commuteDetials);
      console.log(
        this.favouriteMetro,
        this.favouriteLocalBus,
        this.favouriteBus
      );
    } else if (commute.type == 'intra_bus') {
      const commuteDetials = intra01;
      this.favouriteBus.push(commuteDetials);
      console.log(
        this.favouriteMetro,
        this.favouriteLocalBus,
        this.favouriteBus
      );
    } else {
      const commuteDetials = inter01;
      this.favouriteLocalBus.push(commuteDetials);
      console.log(
        this.favouriteMetro,
        this.favouriteLocalBus,
        this.favouriteBus
      );
    }
  }

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
