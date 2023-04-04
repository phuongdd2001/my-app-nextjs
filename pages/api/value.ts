import { env } from "process";

export const API_SLIDER = `${env.API_URL}/api/slides?populate=deep`;
export const API_HEADER = `${env.API_URL}/api/headers?populate=deep`;