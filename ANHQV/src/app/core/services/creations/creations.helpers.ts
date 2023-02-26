
import { Creations } from './creations.models';
import { ApiCreations } from "./api/api-creations.models";


export function transformCreation(apiCreations: ApiCreations): Creations {
  delete apiCreations.createdAt;
  return apiCreations;
}