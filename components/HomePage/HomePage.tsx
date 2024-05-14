import { Shell } from '../Shell';
import { Banner } from './Banner/Banner';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

  return (
    <Shell>
      <Banner componentsCount={allComponentsCount} />
    </Shell>
  );
}
