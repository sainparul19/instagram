import React from "react";
import "./Home.css";
import InstaFeed from "./InstaFeed";

function Home() {
  let insta = [
    {
      url1: "https://images.unsplash.com/photo-1652883865604-efdb4e6567b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500",
      name: "Lorem",
      url2: "https://images.unsplash.com/photo-1650631874741-c5ce3bd819ab?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fF9oYi1kbDRRLTRVfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      like: "35,000",
      usercaption: "Surfing !!!",
    },
    {
      url1: "https://images.unsplash.com/photo-1647641707092-6f2eeaa0a9fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      name: "Wini",
      url2: "https://images.unsplash.com/photo-1645739845596-e61748b074bf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      like: "255,089",
      usercaption: "See You Soon ...",
    },
    {
      url1: "https://images.unsplash.com/photo-1616767709128-073bb5c6503d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      name: "Katty",
      url2: "https://images.unsplash.com/photo-1652919611011-d9ebf404dbaf?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      like: "21,398",
      usercaption: "Nature has it's own beauty",
    },
    {
      url1: "https://images.unsplash.com/photo-1652375186211-805106e54556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      name: "Lily",
      url2: "https://images.unsplash.com/photo-1510404041231-951f2d534898?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eWxpZ2h0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
      like: "45,765",
      usercaption: "CITYLIGHTS!",
    },
    {
      url1: "https://images.unsplash.com/photo-1652550616981-e4dcabc0b489?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500",
      name: "Mark",
      url2: "https://images.unsplash.com/photo-1646072507652-128f79e5e10d?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Qm4tRGpyY0Jyd298fGVufDB8fHx8&auto=format&fit=crop&w=500",
      like: "555,000",
      usercaption: "Hustle Hustle Hustle !!",
    },
  ];

  return (
    <div className="home">
      <div className="home-body">
        <div className="user">
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652848337562-2ad09462b5c5?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Eve</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1653002456763-6e2cb2a21b90?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Aadi</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652972149871-363210767bd2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Laura</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652883865604-efdb4e6567b3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Lorem</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1616767709128-073bb5c6503d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Katty</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1647641707092-6f2eeaa0a9fc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Wini</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652550616981-e4dcabc0b489?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Mark</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652375186211-805106e54556?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Lily</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1652847351205-a7cfdd5a8488?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Hailey</a>
          </div>
          <div className="users">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1618572591885-a05e04ee5bba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500"
              alt=""
            />
            <a>Abbi</a>
          </div>
        </div>{" "}
        {insta.map((data) => (
          <InstaFeed key={data.name} prop={data} />
        ))}
      </div>
    </div>
  );
}

export default Home;
