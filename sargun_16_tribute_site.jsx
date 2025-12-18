import React, { useEffect, useState } from "react";

// 💖 Sargun Turns 16 — Ultimate Friendship Universe 💖
// Single-file React + Tailwind tribute
// Long-form emotional writing (1000+ words), multi-question quiz, fixed day/night, celebrations

// -----------------------------
// Helpers + tests
// -----------------------------
export function detectTrigger(buffer, trigger) {
  return buffer.toLowerCase().includes(trigger.toLowerCase());
}

console.assert(detectTrigger("xxsargunyy", "sargun") === true);
console.assert(detectTrigger("sarg", "sargun") === false);
console.assert(detectTrigger("SARGUN", "sargun") === true);

// -----------------------------
// Main Component
// -----------------------------
export default function SargunTributeSite() {
  const [theme, setTheme] = useState("day");
  const [confetti, setConfetti] = useState(0);
  const [easter, setEaster] = useState(false);

  // Quiz state
  const [qIndex, setQIndex] = useState(0);
  const [qScore, setQScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  useEasterEgg("sargun", () => setEaster(true));

  // ✅ FIXED day/night toggle
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "night") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const questions = [
    {
      q: "Where did our chaos peak into a core memory?",
      options: ["Lucknow Victory Adventure Park", "Library", "Classroom"],
      a: 0
    },
    {
      q: "What made school days unforgettable?",
      options: ["Homework", "Bunks + laughs", "Exams"],
      a: 1
    },
    {
      q: "Menon coaching will always be remembered for…",
      options: ["Silence", "Crazy laughs + inside jokes", "Strict discipline"],
      a: 1
    },
    {
      q: "What matters most in our friendship?",
      options: ["Consistency", "Trust + comfort", "Both of these"],
      a: 2
    }
  ];

  function answer(idx) {
    if (idx === questions[qIndex].a) setQScore((s) => s + 1);
    if (qIndex + 1 === questions.length) setQuizDone(true);
    else setQIndex((i) => i + 1);
  }

  function celebrateUs() {
    setConfetti((c) => c + 25);
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-sky-100 dark:from-indigo-950 dark:via-purple-950 dark:to-black transition-colors duration-700">
      <StarCursor />
      <VirtualPet />

      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className="text-6xl font-extrabold text-pink-600 dark:text-pink-300">Happy 16th Birthday, Sargun 🎂</h1>
        <p className="mt-8 max-w-4xl mx-auto text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          This is not a normal website. This is a digital keepsake, a scrapbook made of words, feelings, shared glances,
          and moments that never asked to be remembered yet stayed forever. It exists because you exist. Because somewhere
          between school corridors, random laughter, unplanned adventures, and quiet understanding, you became one of the
          most important constants in my life. This page is long on purpose. Because short words could never hold what
          you mean.
        </p>
        <button
          onClick={() => setTheme(theme === "day" ? "night" : "day")}
          className="mt-10 px-8 py-4 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur shadow-lg hover:scale-110 transition"
        >
          Switch to {theme === "day" ? "Night 🌙" : "Day ☀️"}
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-24">
        {/* LONG LETTER */}
        <section className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-300 mb-8">A Letter Meant to Last 💌</h2>
          <div className="space-y-6 leading-relaxed text-gray-800 dark:text-gray-200">
            <p>
              Turning sixteen feels like standing at the edge of something new. Not because everything suddenly changes,
              but because you begin to notice how much already has. Watching you grow into this age feels surreal. You are
              becoming more aware of the world, yet you still carry the same warmth, humor, and softness that made you who
              you are in the first place. You laugh fully. You care deeply. You leave traces of yourself everywhere,
              whether you mean to or not.
            </p>
            <p>
              Lucknow Victory Adventure Park wasn’t just a trip. It was chaos wrapped in excitement, adrenaline mixed with
              freedom, and the kind of laughter that comes from being unapologetically yourself. School trips weren’t about
              destinations either. They were about stolen conversations, shared snacks, tired feet, loud laughs, and the
              feeling that for a brief moment, the world belonged to us. Even the bunks, the Menon coaching madness, the
              ordinary routines — they transformed into memories because you were there.
            </p>
            <p>
              There’s something rare about the way you exist in people’s lives. You don’t demand attention. You don’t try
              to impress. Yet somehow, you become unforgettable. You listen. You remember. You show up. And in doing so,
              you make people feel safe, understood, and seen. That is not a small thing. That is a gift.
            </p>
            <p>
              This letter keeps going because my gratitude keeps going. Because even on quiet days, even when nothing big
              happens, knowing you is still one of the best parts of my life. I hope you never underestimate how loved you
              are. Not just today. Not just on birthdays. But on the in-between days too. The days where you doubt yourself.
              The days that feel heavy. You matter, consistently and endlessly.
            </p>
            <p>
              If years from now you somehow find this page again, I hope it reminds you of who you were at sixteen. Kind.
              Bright. Full of potential. Surrounded by people who cared. And I hope it reminds you that some bonds don’t
              fade. They grow quieter, deeper, stronger. Just like this one.
            </p>
          </div>
        </section>

        {/* QUIZ */}
        <section className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold mb-8">Friendship Quiz 📝</h2>
          {!quizDone ? (
            <>
              <p className="mb-6 text-lg">{questions[qIndex].q}</p>
              <div className="space-y-3">
                {questions[qIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => answer(i)}
                    className="block w-full text-left px-4 py-3 rounded-xl bg-pink-100 dark:bg-purple-900 hover:scale-105 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold">Quiz Complete 🎉</p>
              <p className="text-lg">Score: {qScore} / {questions.length}</p>
              <p>
                No matter the score, the real win is the memories. And those? We nailed every single one.
              </p>
            </div>
          )}
        </section>

        {/* CELEBRATE */}
        <section className="text-center">
          <button
            onClick={celebrateUs}
            className="px-12 py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl shadow-2xl hover:scale-110 transition"
          >
            Celebrate Us 🎉
          </button>
        </section>
      </main>

      {/* Easter Egg */}
      {easter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl max-w-xl max-h-[70vh] overflow-y-auto">
            <h2 className="text-4xl font-bold mb-6">You Found the Secret 💖</h2>
            <p className="leading-relaxed">
              This is the quietest room in this universe. If you’re here, it means curiosity led you somewhere gentle.
              Remember this feeling. You are cherished. You are important. And you will always be loved.
            </p>
            <button onClick={() => setEaster(false)} className="mt-6">Close</button>
          </div>
        </div>
      )}

      <footer className="text-center py-10 text-sm text-gray-600 dark:text-gray-300">
        Made with love, memory, and intention 💕
      </footer>

      {Array.from({ length: confetti }).map((_, i) => (
        <Confetti key={i} />
      ))}
    </div>
  );
}

// -----------------------------
// Components
// -----------------------------
function Confetti() {
  const left = Math.random() * 100;
  return <div className="fixed top-0 w-2 h-4 bg-pink-400 animate-bounce" style={{ left: `${left}%` }} />;
}

function useEasterEgg(trigger, onUnlock) {
  useEffect(() => {
    let buffer = "";
    const handler = (e) => {
      buffer += e.key.toLowerCase();
      if (detectTrigger(buffer, trigger)) {
        onUnlock();
        buffer = "";
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [trigger, onUnlock]);
}

function StarCursor() {
  useEffect(() => {
    document.body.style.cursor = "none";
    const star = document.createElement("div");
    star.innerText = "✨";
    star.style.position = "fixed";
    star.style.pointerEvents = "none";
    star.style.zIndex = 9999;
    document.body.appendChild(star);
    const move = (e) => {
      star.style.left = e.clientX + "px";
      star.style.top = e.clientY + "px";
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      star.remove();
      document.body.style.cursor = "auto";
    };
  }, []);
  return null;
}

function VirtualPet() {
  useEffect(() => {
    const pet = document.createElement("div");
    pet.innerText = "🐰";
    pet.style.position = "fixed";
    pet.style.zIndex = 9998;
    document.body.appendChild(pet);
    const move = (e) => {
      pet.style.left = e.clientX + 20 + "px";
      pet.style.top = e.clientY + 20 + "px";
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      pet.remove();
    };
  }, []);
  return null;
}
