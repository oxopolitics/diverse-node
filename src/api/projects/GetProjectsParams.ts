import {ProjectSchema} from "../../models/projects/Project";

export interface GetProjectsRequestParams {
}

export interface GetProjectsResponseParams {
  projects: ProjectSchema[];
}
