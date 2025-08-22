import { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈 | Your App",
  description: "Next.js와 Tailwind CSS로 구축된 홈페이지입니다.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          안녕하세요, Next.js + Tailwind!
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          현대적인 웹 개발을 위한 강력한 조합입니다.
        </p>
        <p className="mt-4 font-mono text-base text-muted-foreground sm:text-lg">
          이 텍스트는 모노스페이스 폰트를 사용합니다.
        </p>
        
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button 
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            type="button"
          >
            시작하기
          </button>
          <button 
            className="rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            type="button"
          >
            더 알아보기
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            title="빠른 개발"
            description="Next.js의 강력한 기능들로 빠르게 개발하세요"
            icon="⚡"
          />
          <FeatureCard 
            title="반응형 디자인"
            description="Tailwind CSS로 아름다운 반응형 UI를 만드세요"
            icon="📱"
          />
          <FeatureCard 
            title="타입 안전성"
            description="TypeScript로 안전하고 확장 가능한 코드를 작성하세요"
            icon="🔒"
          />
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
