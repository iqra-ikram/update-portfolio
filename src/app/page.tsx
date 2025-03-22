
import About from "./About/page";
import Hero from "./Hero/page";

import SkillProgressBar from "./SkillSphere/page";
import Contact from "./Contact/page";
import Projects from "./Project/page";


export default function Home() {
  return (
    <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">

<br />
<br /><br />

<Hero/>
<About/>
<Projects/>
<SkillProgressBar/>

<Contact/>

    </div>
  );
}
