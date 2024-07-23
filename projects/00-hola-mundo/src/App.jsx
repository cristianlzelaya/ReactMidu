import "./App.css";
import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
const users = [
  {
    userName: "midudev",
    name: "Miguel Angel",
    isFollowing: true,
  },
  {
    userName: "Cristianlzelaya",
    name: "Cristian Leonel Zelaya",
    isFollowing: false,
  },
  {
    userName: "Pheral",
    name: "Pablo H.",
    isFollowing: true,
  },
  {
    userName: "PacoHdez",
    name: "Paco",
    isFollowing: true,
  },
];
export function App() {
  return (
    <>
      <section className="App">
        {users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          );
        })}
      </section>
    </>
  );
}
