import { AppConfig } from '@/config/portfolio.config';

type Props = {
  config: AppConfig['hero'];
};

export default function Hero({ config }: Props) {
  return (
    <section
      id="Hero"
      className="w-full h-[calc(100vh-4rem)] py-4 bg-background flex justify-evenly lg:justify-around items-center flex-col-reverse lg:flex-row overflow-hidden"
    >
      {/* Hero Intro Info */}
      <div className="w-full lg:w-fit flex justify-start items-center flex-col gap-8">
        <div className="text-[18px] lg:text-[26px] text-center lg:text-left">
          <p className="Fade_Stagger">{config.salutation}</p>
          <h1 className="Fade_Stagger gradientText font-ubuntu text-[4em] lg:text-[9rem] leading-tight max-w-xs md:max-w-6xl">
            {config.firstName}
            {' ' + config.lastName}
          </h1>
          <p className="Fade_Stagger">I'm a {config.position}.</p>
          <p className="Fade_Stagger">
            {config.tagLine.prefixText}
            <span className="gradientText font-ubuntu">
              {config.tagLine.highlightedText}
            </span>
            {config.tagLine.suffixText}
          </p>
        </div>

        <div className="Fade_Stagger flex justify-center lg:justify-start items-center w-full gap-10 py-4 text-[var(--socialIconColor)]!">
          {config.links?.map((link: { label: string; url: string; icon: string }) => (
            <a
              key={link.label}
              href={link.url}
              title={link.label}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
              className="Fade_Stagger w-[30px] h-[30px] flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: link.icon }}
            />
          ))}
        </div>
      </div>

      {/* Hero Orbit Animation */}
      <div className="Hero_Orbit relative flex_center w-[340px] lg:w-[500px] aspect-square">
        <div
          id="avatarImage"
          role="button"
          className="flex_center w-[180px] sm:w-[250px] aspect-square rounded-full z-10 cursor-pointer"
          style={{ opacity: 0 }}
        >
          <img
            src={config.avatar as unknown as string}
            alt={`${config.firstName} ${config.lastName} Avatar`}
            className="object-cover w-full h-full rounded-full noDrag"
            width="180"
            height="180"
          />
        </div>

        {/* Orbit Trails */}
        <div className="Spring_Up Hero_Trail Trail1">
          <span className="Orbit_Dot"></span>
        </div>
        <div className="Spring_Up Hero_Trail Trail2">
          <span className="Orbit_Dot"></span>
        </div>
        <div className="Spring_Up Hero_Trail Trail3">
          <span className="Orbit_Dot"></span>
        </div>
        <div className="Spring_Up Hero_Trail Trail4">
          <span className="Orbit_Dot"></span>
        </div>
      </div>
    </section>
  );
}
