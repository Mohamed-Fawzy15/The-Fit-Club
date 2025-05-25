import Hero from "../../Component/Hero/Hero";
import Join from "../../Component/Join/Join";
import Plans from "../../Component/Plans/Plans";
import Program from "../../Component/Program/Program";
import Reasons from "../../Component/Reasons/Reasons";
import Testimonials from "../../Component/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
}
