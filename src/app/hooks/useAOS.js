"use client";

import { useEffect } from "react";
import AOS from "aos";

const useAOS = (options = {}) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            ...options,
        });
    }, [options]);
};

export default useAOS;
