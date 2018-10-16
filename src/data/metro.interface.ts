export interface metro{
  id:string,
  type:string,
  direction:{
    type:string,
    value:string,
    metadata:{}
  },
  line:{
    type:string,
    value:string,
    metadata:{}
  },
  operationNorm:{
    type:string,
    value:string[],
    metadata:{}
  },
  operationSat:{
    type:string,
    value:string[],
    metadata:{}
  },
  operationSun:{
    type:string,
    value:string[],
    metadata:{}
  },
  operationWeekExpress:{
    type:string,
    value:string[],
    metadata:{}
  },
  station:{
    type:string,
    value:string,
    metadata:{}
  }
}
