import type { JSX } from "react";
import type { Repository } from "./Repository";

export type User = {
  name?: string;
  avatar_url?: string;
  bio?: string;
  html_url?: string;
  instagram_url?: string
  instagram_nickname?:string
  publicReposCount?: number;
  starredReposCount?: number;
  repositories?: Repository[],
  starredRepositories?: Repository[],
  location?: string;
  company?: string;
  blog?: string;
  status?: UserStatus;
};

export type UserStatus = {
  emoji?: JSX.Element;
  message?: string;
};