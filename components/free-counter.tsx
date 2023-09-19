"use client";

import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface FreeCounterProp {
  apiLimitCount: number;
}

export const FreeCounter = ({ apiLimitCount }: FreeCounterProp) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-sm text-center text-white mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS}Free Generation
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>

          <Button className="w-full" variant = "premium">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white"/>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
