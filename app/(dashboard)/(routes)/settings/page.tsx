import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checksubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

const settingsPage = async () => {
  const isPro = await checksubscription();

  return (
    <div>
      <Heading
        title="settings"
        description="Manage your settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4-4 lg:px-8 space-y-4">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? "you are currently on a Pro Plan"
            : "You are currently using a free tier plan"}
        </div>
        <SubscriptionButton isPro={isPro}/>
      </div>
    </div>
  );
};

export default settingsPage;
