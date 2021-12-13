import { Schema } from 'mongoose';

export interface Environment {
  env: string
}

export const environmentSchema = new Schema<Environment>({
  env: { type: String, required: true }
});
