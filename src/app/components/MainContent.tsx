import { HomePage } from "@/app/components/HomePage";
import { AlgorithmLesson } from "@/app/components/AlgorithmLesson";

interface MainContentProps {
  selectedAlgorithm: string;
  onSelectAlgorithm: (id: string) => void;
  onSectionChange: (section: string) => void;
}

export function MainContent({
  selectedAlgorithm,
  onSelectAlgorithm,
  onSectionChange,
}: MainContentProps) {
  // Show homepage when on Introduction section and no algorithm selected
  if (!selectedAlgorithm) {
    return (
      <HomePage
        onSelectAlgorithm={onSelectAlgorithm}
        onSectionChange={onSectionChange}
      />
    );
  }

  // Show algorithm lesson page when an algorithm is selected
  if (selectedAlgorithm) {
    return <AlgorithmLesson algorithmId={selectedAlgorithm} />;
  }
}
