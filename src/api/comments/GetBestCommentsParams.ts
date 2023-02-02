import {CommentSchema} from "../../models/comments/Comment";
import {StatsForClusterSchema} from "../../models/clusters/StatsForCluster";

export interface GetBestCommentsRequestParams {
  projectId: string;
  postId: string;
}

export interface ClusterData {
  id: string;
  bestComment: CommentSchema;
  clusterStats: StatsForClusterSchema;
  topComments: CommentSchema[];
}

// ID: projectId + postId
export interface GetBestCommentsResponseParams {
  projectId: string;
  postId: string;
  clusters: Record<string, ClusterData>;
}
