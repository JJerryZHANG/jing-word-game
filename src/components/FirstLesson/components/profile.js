import pandaImage from "@/assets/img/panda.jpg";
import "./profile.css";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function Profile() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="profile" src={pandaImage} alt="Gregorio Y. Zara" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
