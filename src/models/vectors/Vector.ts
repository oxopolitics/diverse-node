import {TypeVector} from "./TypeVector";

export interface VectorSchema {
  id: string;
  updatedAt: number;
  vector: TypeVector;
  vectorType: VectorType;
  parentReferenceId: string;
  parentReferenceType: VectorReferenceType;
  clusterMemberCount: number;
  representativeReferenceId?: string;
  representativeReferenceReactionTotalCount?: number;
  reactionTotalCount?: number;
}

export enum VectorType {
  COMMENT = "comment",
  USER = "user",
  CLUSTER_CENTROID = "cluster_centroid",
}

export enum VectorReferenceType {
  POST = "post",
  PROJECT = "project",
}
