import { Suspense } from "react";


export default function ResultLayout({ children }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {children}
        </Suspense>
    )
}