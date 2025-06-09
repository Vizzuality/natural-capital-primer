// Workaround for Next.js 14.0.0+ not allowing catch-all routes in the app directory
// https://github.com/vercel/next.js/discussions/50034

import { notFound } from "next/navigation";

export default function NotFoundDummy() {
  notFound();
}
