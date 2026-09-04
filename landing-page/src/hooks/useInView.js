import { useEffect, useRef, useState } from 'react';

/**
 * True once the element has scrolled into view (stays true). Used to start
 * entrance animations when a section is actually seen. Browsers without
 * IntersectionObserver render everything as in view.
 */
export const useInView = (rootMargin = '0px 0px 80px 0px') => {
    const ref = useRef(null);
    const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') return undefined;
        const observer = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) { setInView(true); observer.disconnect(); }
        }, { rootMargin });
        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin]);

    return [ref, inView];
};
