export type BTEntity = {
  collectionType: CollectionType;
  basicType: BTBasicType;
};

export type BTBasicType =
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
  [key in CollectionType]: BTEntity;
};
