import { EffectCallback, useEffect } from "react";

export const useMountEffect = (effect) => {
    useEffect(effect, []);
}