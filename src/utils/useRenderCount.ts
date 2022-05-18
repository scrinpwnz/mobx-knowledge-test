import {useEffect, useState} from "react";

export const useRenderCount = () => {
    const [state] = useState({ count: 0 });

    useEffect(() => {
        state.count += 1;
    })

    return state.count
}
