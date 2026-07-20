import ProfileCard from "../components/profile-card/profile-card";
import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="workTeam">
          <ProfileCard
            imgLink="https://mockmind-api.uifaces.co/content/human/218.jpg"
            name="Jose Souza"
            jobTitle="Fullstack"
            place="Miami - Florida"
            skills={["HTML5", "CSS", "React", "Angular", "DotNet"]}
          />
          <ProfileCard
            imgLink="https://mockmind-api.uifaces.co/content/human/217.jpg"
            name="Ana Lim"
            jobTitle="Back-End"
            place="Oakland Park - Florida"
            skills={["DotNet", "Node"]}
          />
          <ProfileCard
            imgLink="https://mockmind-api.uifaces.co/content/human/216.jpg"
            name="Bruna P"
            jobTitle="Front-End"
            place="Fort Laudardale - Florida"
            skills={["HTML5", "CSS", "React"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
