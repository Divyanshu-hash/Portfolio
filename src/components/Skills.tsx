import CenterTitle from '@/components/UI/CenterTitle';
import SkillTitle from '@/components/UI/SkillTitle';
import SkillGrid from '@/components/UI/SkillGrid';
import {
  WebLanguagesStack,
  FrameworksStack,
  AIMLStack,
  DatabaseToolsStack,
} from '@/constants/skillStack';

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen py-4 pt-14 bg-background">
      <CenterTitle title="Tech Stack" color="primary" />

      {/* Web & Frontend Skills */}
      <div className="Fade_Up flex justify-center items-start flex-col lg:flex-row gap-2">
        <div className="Fade_Up flex_center flex-col gap-4 py-4 xs:p-4 w-full h-full">
          <SkillTitle title="Web & Programming" color="primary" />
          <SkillGrid stack={WebLanguagesStack} />
        </div>

        <div className="Fade_Up flex_center flex-col gap-4 py-4 xs:p-4 w-full h-full">
          <SkillTitle title="Frameworks & Technologies" color="primary" />
          <SkillGrid stack={FrameworksStack} />
        </div>
      </div>

      {/* Backend & Database Skills */}
      <div className="Fade_Up flex justify-center items-start flex-col lg:flex-row gap-2">
        <div className="Fade_Up flex_center flex-col gap-4 py-4 xs:p-4 w-full h-full">
          <SkillTitle title="AI / ML" color="primary" />
          <SkillGrid stack={AIMLStack} />
        </div>

        <div className="Fade_Up flex_center flex-col gap-4 py-4 xs:p-4 w-full h-full">
          <SkillTitle title="Databases & Tools" color="primary" />
          <SkillGrid stack={DatabaseToolsStack} />
        </div>
      </div>


    </section>
  );
}
