"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f0cd982d-ad04-4301-b933-3041895f0fee");
  }, []);

  return null;
};
