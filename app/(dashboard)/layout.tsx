import Navabr from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { getApiLimitCount } from "@/lib/api-limits"
import {checksubscription} from "@/lib/subscription"

const DashboardLayout = async({ children }: { children: React.ReactNode }) => {
    
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checksubscription()
    
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0  bg-gray-900">
                <Sidebar isPro = {isPro} apiLimitCount = {apiLimitCount}/>
            </div>

            <main className="md:pl-72 pb-10">
                <Navabr />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout