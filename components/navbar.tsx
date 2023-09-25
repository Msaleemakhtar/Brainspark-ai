import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limits"
import {checksubscription} from "@/lib/subscription"



const Navabr = async() => {
  const isPro = await checksubscription()
  const apiLimitCount = await getApiLimitCount()
  return (
    <div className="flex items-center p-4">
      <Mobilesidebar isPro= {isPro} apiLimitCount ={apiLimitCount}/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navabr;
