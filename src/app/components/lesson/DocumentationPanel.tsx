import { ScrollArea } from '@/app/components/ui/scroll-area';
import { LessonHeader } from './LessonHeader';
import { ComplexityBadges } from './ComplexityBadges';
import { ContentSection } from './ContentSection';
import { StepList } from './StepList';
import { BulletList } from './BulletList';
import { PseudocodeViewer } from '../PseudocodeViewer';

interface DocumentationPanelProps {
  lessonData: {
    title: string;
    category: string;
    description: string;
    timeComplexity: string;
    spaceComplexity: string;
    pseudocode: string[];
    overview: string;
    explanation: string[];
    useCases: string[];
  };
  highlightedLines: number[];
}

export function DocumentationPanel({ lessonData, highlightedLines }: DocumentationPanelProps) {
  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8">
        <LessonHeader
          category={lessonData.category}
          title={lessonData.title}
          description={lessonData.description}
        />

        <ComplexityBadges
          timeComplexity={lessonData.timeComplexity}
          spaceComplexity={lessonData.spaceComplexity}
        />

        <ContentSection title="Algorithm">
          <PseudocodeViewer code={lessonData.pseudocode} highlightedLines={highlightedLines} />
        </ContentSection>

        <ContentSection title="Overview">
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{lessonData.overview}</p>
        </ContentSection>

        <ContentSection title="How It Works">
          <StepList steps={lessonData.explanation} />
        </ContentSection>

        <ContentSection title="Common Use Cases">
          <BulletList items={lessonData.useCases} />
        </ContentSection>
      </div>
    </ScrollArea>
  );
}
