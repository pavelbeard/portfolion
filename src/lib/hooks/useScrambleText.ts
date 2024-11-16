import { useEffect, useRef, useState } from "react";
import { useScramble } from "use-scramble";

function* generatorQueue<T>(array: T[]): Generator<T, void, unknown> {
  let index = 0;
  while (true) {
    if (index >= array.length) {
      index = 0;
    }
    yield array[index];
    index++;
  }
}

export default function useScrambleText({
  initialText,
  textArray,
}: {
  initialText: string;
  textArray: string[];
}) {
  const [text, setText] = useState(initialText);
  const genRef = useRef(generatorQueue(textArray));
  const { ref, replay } = useScramble({
    playOnMount: false,
    text: text,
    speed: 0.18,
    tick: 2,
    seed: 2,
    scramble: 2,
    step: 4,
    range: [65, 68],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const next = genRef.current.next();
      setText(next.value!);
      replay();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return ref;
}
