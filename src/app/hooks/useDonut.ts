import { useEffect, useState } from "react";

export const useDonut = () => {
  const [donut, setDonut] = useState("");
  useEffect(() => {
    function renderTorusFrame() {
      const typedThis = this as unknown as any;
      typedThis.A ??= 1;
      typedThis.B ??= 1;
      typedThis.A += 0.07;
      typedThis.B += 0.03;
      const A = typedThis.A;
      const B = typedThis.B;
      const b = [];
      const z = [];

      const cA = Math.cos(A);
      const cB = Math.cos(B);
      const sA = Math.sin(A);
      const sB = Math.sin(B);

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
      }

      for (let i = 0; i < 6.28; i += 0.07) {
        const cI = Math.cos(i);
        const sI = Math.sin(i);

        for (let j = 0; j < 6.28; j += 0.02) {
          const cJ = Math.cos(j);
          const sJ = Math.sin(j);

          const h = cI + 2;
          const d = 1 / (sJ * h * sA + sI * cA + 5);
          const t = sJ * h * cA - sI * sA;

          const x = 0 | (40 + 30 * d * (cJ * h * cB - t * sB));
          const y = 0 | (12 + 15 * d * (cJ * h * sB + t * cB));
          const o = x + 80 * y;
          const n =
            0 |
            (8 *
              ((sI * sA - sJ * cI * cA) * cB -
                sJ * cI * sA -
                sI * cA -
                cJ * cI * sB));

          if (y < 22 && y >= 0 && x >= 0 && x < 79 && d > z[o]) {
            z[o] = d;
            b[o] = ".,-~:;=!*#$@"[n > 0 ? n : 0];
          }
        }
      }
      const result = b.reduce((acc, next) => {
        return acc + next;
      }, "");
      setDonut(result);
    }
    const interval = setInterval(renderTorusFrame, 50);
    return () => clearInterval(interval);
  });
  return donut;
};
