"use client";

export default function Toast({
  message,
  visible,
}: {
  message: string;
  visible: boolean;
}) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[10001] animate-[fadeInUp_0.3s_ease]">
      <div
        className="card-holographic px-6 py-3 font-jetbrains text-sm text-[var(--accent)]"
        style={{
          boxShadow: "var(--shadow-neon)",
        }}
      >
        {message}
      </div>
    </div>
  );
}
