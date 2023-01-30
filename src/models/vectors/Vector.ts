import { db } from "../../index";
import { firestore } from "firebase-admin";
import { TypeVector } from "../../lib/utils/vector/TypeVector";
import FieldValue = firestore.FieldValue;

export const TABLE_VECTORS = "vectors";
export const collectionVectors = db.collection(TABLE_VECTORS);
// not to be triggered for centroid updates
export const collectionCentroidVectors = db.collection("centroid_vectors");

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

export interface VectorInputSchema
  extends Omit<
    VectorSchema,
    | "vector"
    | "id"
    | "clusterMemberCount"
    | "representativeReferenceReactionTotalCount"
    | "reactionTotalCount"
  > {
  id?: string;
  vector: Record<string, FieldValue> | TypeVector;
  clusterMemberCount?: FieldValue;
  representativeReferenceReactionTotalCount?: FieldValue | number;
  reactionTotalCount?: FieldValue;
}

export interface VectorUpdateVectorAndMemberCountSchema {
  updatedAt: number;
  vector: Record<string, FieldValue> | TypeVector;
  clusterMemberCount?: FieldValue;
}

export interface VectorUpdateForRepresentativeSchema {
  updatedAt: number;
  representativeReferenceId: string;
  representativeReferenceReactionTotalCount: number;
}
