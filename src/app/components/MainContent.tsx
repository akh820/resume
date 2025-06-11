const MainContent = () => {
  return (
    <main className="w-2/3 p-8">
      <Section title="학력과 교육이력">
        <Entry
          period="2019.03 ~ 2024.02"
          title="홍익대학교 컴퓨터공학과 19학번 졸업"
        />
        <Entry period="2020.12 ~ 2022.05" title="42 서울 3기" />
      </Section>

      <Section title="경력">
        <Entry
          period="2024.01 ~ 2024.04"
          title="NOI (스타트업) 모바일 개발 프로젝트 참여"
        />
      </Section>

      <Section title="활동">
        <Entry period="2022.09 ~ 2023.06" title="GDSC Hongik Member" />
        <Entry
          period="2022.09 ~ 2023.06"
          title="홍익대학교 알고리즘 학회 HI-ARC 운영진"
        />
        <Entry
          period="2022.12 ~ 2024.02"
          title="ICPC Sinchon 2023W, 2023S, 2024W 운영진"
        />
        <Entry
          period="2023.07 ~ 2024.03"
          title="1Day 1Streak, 이하 1D1S 단체 운영"
        />
        <Entry
          period="2023.10 ~ 2024.01"
          title="HISU(Hong Ik Start Up) 7기 수료"
        />
        <Entry period="2024.03 ~ 진행중" title="GDSC Hongik 모바일 멘토" />
      </Section>

      <Section title="프로젝트">
        <ProjectEntry
          period="2021.04 ~ 2022.01"
          title="Cub3D, Simple Top View Game"
          tags={["개인 프로젝트", "그래픽스 개발"]}
        />
        <ProjectEntry
          period="2023.09 ~ 2023.11"
          title="NewFit"
          tags={["팀 프로젝트", "모바일 개발"]}
        />
        <ProjectEntry
          period="2024.01 ~ 2024.04"
          title="BrainQube"
          tags={["팀 프로젝트", "모바일 개발"]}
        />
      </Section>

      <Section title="깃허브와 블로그">
        <LinkEntry title="깃허브" url="https://github.com/NOGUEN" />
        <LinkEntry title="테크 블로그" url="https://noguen.com" />
      </Section>

      <Section title="스킬">
        <SkillEntry
          name="Flutter, Dart"
          level="주력"
          levelColor="bg-blue-500 text-white"
        />
        <SkillEntry
          name="Swift, C++, C"
          level="지식이 있음"
          levelColor="bg-yellow-500 text-white"
        />
        <SkillEntry
          name="Figma, Notion"
          level="기타"
          levelColor="bg-gray-500 text-white"
        />
      </Section>
    </main>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const Entry = ({ period, title }: { period: string; title: string }) => (
  <div className="flex">
    <p className="w-40 text-gray-600">{period}</p>
    <p>{title}</p>
  </div>
);

const ProjectEntry = ({
  period,
  title,
  tags,
}: {
  period: string;
  title: string;
  tags: string[];
}) => (
  <div className="flex items-start">
    <p className="w-40 text-gray-600">{period}</p>
    <div>
      <p className="font-semibold">{title}</p>
      <div className="flex space-x-2 mt-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const LinkEntry = ({ title, url }: { title: string; url: string }) => (
  <div className="flex">
    <p className="w-40 font-semibold">{title}</p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      {url}
    </a>
  </div>
);

const SkillEntry = ({
  name,
  level,
  levelColor,
}: {
  name: string;
  level: string;
  levelColor: string;
}) => (
  <div className="flex items-center">
    <p className="w-40 font-semibold">{name}</p>
    <span className={`px-3 py-1 text-sm rounded-full ${levelColor}`}>
      {level}
    </span>
  </div>
);

export default MainContent;
