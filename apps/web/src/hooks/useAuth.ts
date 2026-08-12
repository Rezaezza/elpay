"use client";

import { useEffect, useState } from "react";

import {
  getToken,
} from "../lib/auth";

export function useAuth() {
  const [authenticated, setAuthenticated] =
    useState(false);

  useEffect(() => {
    setAuthenticated(!!getToken());
  }, []);

  return {
    authenticated,
  };
}