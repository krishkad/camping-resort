"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

const DashboardName = () => {
    const pathname = usePathname();
    switch (pathname) {
        case "/v1/dashboard":
            return <h1 className=' text-base font-semibold whitespace-nowrap text-ellipsis'>Dashboard</h1>
        case "/v1/campsites":
            return <h1 className=' text-base font-semibold whitespace-nowrap text-ellipsis'>Manage Campsites</h1>
        case "/v1/bookings":
            return <h1 className=' text-base font-semibold whitespace-nowrap text-ellipsis'>Booking Management</h1>
        case "/v1/team":
            return <h1 className=' text-base font-semibold whitespace-nowrap text-ellipsis'>Team</h1>
        case "/v1/settings":
            return <h1 className=' text-base font-semibold whitespace-nowrap text-ellipsis'>Settings</h1>
    
        
    }
}

export default DashboardName