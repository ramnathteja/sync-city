export interface bus {
  id: string;
  type: string;
  busLineType: {
    type: string;
    value: string;
    metadata: {};
  };
  destination: {
    type: string;
    value: string;
    metadata: {};
  };
  direction: {
    type: string;
    value: string;
    metadata: {};
  };
  intervalHoli: {
    type: string;
    value: string[];
    metadata: {};
  };
  intervalNorm: {
    type: string;
    value: string[];
    metadata: {};
  };
  localID: {
    type: string;
    value: string;
    metadata: {};
  };
  operationHoli: {
    type: string;
    value: string[];
    metadata: {};
  };
  operationNorm: {
    type: string;
    value: string[];
    metadata: {};
  };
  origin: {
    type: string;
    value: string;
    metadata: {};
  };
}
