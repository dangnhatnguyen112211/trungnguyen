import Breakline from "@/common/components/elements/Breakline";

import Story from "./Story";

import EducationList from "./EducationList";

const About = () => {
  return (
    <>
      <Story />
      <Breakline className="my-8" />

      <EducationList />
    </>
  );
};

export default About;
