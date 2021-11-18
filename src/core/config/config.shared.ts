import { RoutesConfigType } from '../types/config';

export const entitiesConfig: RoutesConfigType = {
  areas: { collectionType: 'areas', basicType: 'BlueTorchArea' },
  circles: { collectionType: 'circles', basicType: 'BlueTorchCircle' },
  fplRoutes: { collectionType: 'fplRoutes', basicType: 'BlueTorchFplRoute' },
  lines: { collectionType: 'lines', basicType: 'BlueTorchLine' },
  moPresets: { collectionType: 'moPresets', basicType: 'BlueTorchMoPreset' },
  points: { collectionType: 'points', basicType: 'BlueTorchFixedPoint' },
  presets: { collectionType: 'presets', basicType: 'BlueTorchPreset' },
  psoRoutes: { collectionType: 'psoRoutes', basicType: 'BlueTorchPsoRoute' },
  systems: { collectionType: 'systems', basicType: 'RakiaSystemName' }
};
