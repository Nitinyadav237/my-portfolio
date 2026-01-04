type Tab = "pow" | "learning";

interface TabsProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="flex gap-2 border-b border-neutral-800">
      <TabButton
        label="OSS / Proof of Work"
        isActive={active === "pow"}
        onClick={() => onChange("pow")}
      />

      <TabButton
        label="Learning"
        isActive={active === "learning"}
        onClick={() => onChange("learning")}
      />
    </div>
  );
}

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium transition ${
        isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute inset-x-0 -bottom-px h-px bg-white" />
      )}
    </button>
  );
}
