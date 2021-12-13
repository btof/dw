import { connect } from 'mongoose';
import config from '../core/config';

export default async (): Promise<void> => {
  const CONNECTION_STRING = config.db?.connectionString;
  await connect(CONNECTION_STRING);
};
