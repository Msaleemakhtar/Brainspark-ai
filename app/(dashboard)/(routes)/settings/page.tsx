import Heading from "@/components/heading";
import { checksubscription } from "@/lib/subscription";
import { SettingsIcon } from "lucide-react";

const settingsPage = async () => {
  const isPro = await checksubscription();

  return (
    <div>
      <Heading
        title="settings"
        description="Manage your settings"
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700"
      />
      <div className="px-4-4 lg:px-8 space-y-4">
        <div className="text-sm text-muted-foreground">
          {isPro
            ? "you are currently on a Pro Plan"
            : "You are currently using a free tier plan"}
        </div>
      </div>
    </div>
  );
};

export default settingsPage;
