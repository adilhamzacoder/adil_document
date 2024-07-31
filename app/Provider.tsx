"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Image from "next/image";



const Provider = ({children}: {children: ReactNode}) => {
    return (
        <LiveblocksProvider authEndpoint={`/api/liveblocks-auth`}>
            <ClientSideSuspense fallback={<div className="loader"><Image src="/assets/icons/loader.svg" alt="loader" width={32} height={32} className="animate-spin"/></div>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    );
};

export default Provider;