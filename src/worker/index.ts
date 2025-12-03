import { Hono } from "hono";
import type { Env } from "../types/worker";

const app = new Hono<{ Bindings: Env }>();

export default app;
