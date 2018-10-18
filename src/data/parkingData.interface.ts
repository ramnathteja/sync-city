import { ValueTransformer } from "@angular/compiler/src/util";

export interface parkingDataModel {
  id: string,
  type: string,
  availableSpotNumber: {
    metadata: {},
    type: string,
    value: string
  },
  category: {
    metadata: {},
    type: string,
    value: string
  },
  location: {
    metadata :{},
    type:string,
    value:{
      coordinates:number [],
      type:string
    }
  }
  name: {
    metadata: {},
    type: string,
    value: string
  },
  totalSpotNumber: {
    metadata: {},
    type:string,
    value: string
  },
  value:{
    type:string,
    value: string,
    metadata: {}
  }
}
