import ProfileCard from "../components/profile-card/profile-card";
import "./App.css";

function App() {
  return (
    <div>
      <div className="workTeam">
        <ProfileCard
          imgLink="https://mockmind-api.uifaces.co/content/human/218.jpg"
          name="Jose Souza"
          jobTitle="Fullstack"
          place="Miami - Florida"
          skills={["HTML5", "CSS", "React", "Angular", "DotNet"]}
          isFollowing={true}
          followers={1}
          isOwner={true}
        />
        <ProfileCard
          imgLink="https://mockmind-api.uifaces.co/content/human/217.jpg"
          name="Ana Lim"
          jobTitle="Back-End"
          place="Oakland Park - Florida"
          skills={["DotNet", "Node"]}
          isFollowing={false}
          followers={0}
        />
        <ProfileCard
          imgLink="https://mockmind-api.uifaces.co/content/human/216.jpg"
          name="Bruna P"
          jobTitle="Front-End"
          place="Fort Laudardale - Florida"
          skills={["HTML5", "CSS", "React"]}
          isFollowing={false}
          followers={0}
        />
      </div>
    </div>
  );
}

export default App;
