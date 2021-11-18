import express from 'express';
import { forceCreate, create, remove, update } from '../actions';
import { EntityConfig } from '../core/types/config';

export default (data: EntityConfig) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    console.log(data);
    res.send(`hello from ${data.collectionType}`);
  });

  router.post('/forceCreate', (req, res) => {
    const response = forceCreate(req.body);
    res.send(response);
  });

  router.post('/create', (req, res) => {
    const response = create(req.body);
    res.send(response);
  });

  router.post('/update', (req, res) => {
    const response = update(req.body);
    res.send(response);
  });

  router.delete('/remove', (req, res) => {
    const response = remove(req.body);
    res.send(response);
  });

  return router;
};
