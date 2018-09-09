import { CarStatusServer } from './car-status-server';

let app = new CarStatusServer().getApp();
export { app };
