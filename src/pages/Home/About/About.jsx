import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col p-0 hero-content lg:flex-row">
        <div className="relative lg:w-1/2">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="absolute w-1/2 border-8 border-white rounded-lg shadow-2xl right-5 top-1/2 "
          />
        </div>
        <div className="py-4 space-y-4 lg:w-1/2">
          <h3 className="text-3xl font-bold text-orange-700">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="text-white bg-orange-700 btn">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
