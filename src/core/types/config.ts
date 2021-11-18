export type EntityConfig = {
  collectionType: CollectionType;
  basicType: BasicType;
};

export type BasicType =
  | 'BlueTorchArea'
  | 'BlueTorchCircle'
  | 'BlueTorchFplRoute'
  | 'BlueTorchLine'
  | 'BlueTorchMoPreset'
  | 'BlueTorchFixedPoint'
  | 'BlueTorchPreset'
  | 'BlueTorchPsoRoute'
  | 'RakiaSystemName';

export type CollectionType =
  | 'areas'
  | 'circles'
  | 'fplRoutes'
  | 'lines'
  | 'moPresets'
  | 'points'
  | 'presets'
  | 'psoRoutes'
  | 'systems';

export type RoutesConfigType = {
  [key in CollectionType]: EntityConfig;
};
