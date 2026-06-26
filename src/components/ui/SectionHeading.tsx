interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading = ({
  title,
  subtitle,
}: Props) => {
  return (
    <div className="text-center mb-20">
      <h2
        className="
        font-heading
        text-4xl
        md:text-5xl
        font-bold
        mb-4
        "
      >
        {title}
      </h2>

      <p
        className="
        text-gray-400
        max-w-2xl
        mx-auto
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;