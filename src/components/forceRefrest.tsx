'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export function ForceRefrest() {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, []);

    return <></>
}

