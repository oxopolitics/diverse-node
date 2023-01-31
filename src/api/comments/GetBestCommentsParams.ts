import { CommentSchema } from "../../models/comments/Comment";
import { StatsForClusterSchema } from "../../models/clusters/StatsForCluster";
import {StatsForCommentSchema} from "../../models/comments/StatsForComment";

export interface GetBestCommentsRequestParams {
  projectId: string;
  postId: string;
}

// ID: projectId + postId
export interface GetBestCommentsResponseParams {
  projectId: string;
  postId: string;
  clusters: Record<
    string,
    {
      bestComment: CommentSchema;
      clusterStats: StatsForClusterSchema;
      topComments: CommentSchema[];
    }
  >;
}
