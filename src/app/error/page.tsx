"use client";

import { useEffect } from "react";

export default function ErrorTestingPage() {
  useEffect(() => {
    throw new Error();
  }, []);

  return null;
}
