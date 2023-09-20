import { UserButton } from "@clerk/nextjs";
import Mobilesidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limits"




const Navabr = async() => {

  const apiLimitCount = await getApiLimitCount()
  return (
    <div className="flex items-center p-4">
      <Mobilesidebar apiLimitCount ={apiLimitCount}/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navabr;
