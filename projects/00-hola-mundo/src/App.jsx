import "./App.css";
import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        Miguel Angel
      </TwitterFollowCard>
      <TwitterFollowCard userName="pheral">Pablo Hernandez</TwitterFollowCard>
      <TwitterFollowCard userName="cristianlzelaya">
        Cristian Leonel
      </TwitterFollowCard>

      <TwitterFollowCard userName="Elonmusk">Don Elon</TwitterFollowCard>
    </section>
  );
}
