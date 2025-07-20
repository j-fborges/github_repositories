import type { JSX } from "react";

export type User = {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  public_repos: number;
  location: string;
  company: string;
  blog: string;
  status: UserStatus;
};

export type UserStatus = {
  emoji: JSX.Element;
  message: string;
};