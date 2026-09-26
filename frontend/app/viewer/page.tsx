"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
export default function ViewerArena() {
  const [chatInput, setChatInput] = useState("");
  return (
    <div
      className="flex h-screen w-screen bg-[#121212] text-white
overflow-hidden p-4 gap-4"
    >
      <div className="flex flex-col flex-1 h-full gap-4">
        <Card
          className="flex-1 bg-[#1A1A1A] border-zinc-800 flex
items-center justify-center relative overflow-hidden"
        >
          <div
            id="video-container"
            className="w-full h-full flex
items-center justify-center text-zinc-500"
          >
            [ Live Video Feed Buffer ]
          </div>
        </Card>
        <Card
          className="h-28 bg-[#1A1A1A] border-zinc-800 p-4 flex
items-center justify-around gap-4"
        >
          <Button
            className="flex-1 h-16 bg-[#8B5CF6] hover:bg-
[#7C3AED] text-white font-bold text-lg rounded-xl shadow-lg border
border-purple-400"
          >
            {" "}
            Airhorn{" "}
            <span className="block text-xs fontnormal text-purple-200">5¢</span>
          </Button>
          <Button
            className="flex-1 h-16 bg-[#EC4899] hover:bg-
[#DB2777] text-white font-bold text-lg rounded-xl shadow-lg border
border-pink-400"
          >
            {" "}
            Confetti{" "}
            <span className="block text-xs fontnormal text-pink-200">25¢</span>
          </Button>
          <Button
            className="flex-1 h-16 bg-[#EF4444] hover:bg-
[#DC2626] text-white font-bold text-lg rounded-xl shadow-lg border
border-red-400"
          >
            {" "}
            Scare{" "}
            <span
              className="block text-xs font-normal
text-red-200"
            >
              50¢
            </span>
          </Button>
        </Card>
      </div>
      <Card
        className="w-96 h-full bg-[#1A1A1A] border-zinc-800 flex
flex-col p-4"
      >
        <div className="text-sm font-bold tracking-wider text-white uppercase border-b border-zinc-800 pb-2 mb-2">
          {" "}
          Live Nostr Relay Chat
        </div>
        <div
          id="chat-history"
          className="flex-1 overflow-y-auto
space-y-3 pr-2 scrollbar-thin text-sm"
        >
          <div className="text-zinc-500 italic">
            Connecting to relay stream...
          </div>
        </div>
        <div
          className="flex gap-2 pt-4 border-t border-zinc-800
mt-2"
        >
          <Input
            type="text"
            placeholder="Type a broadcast
message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            className="bg-[#242424] border-zinc-700
text-white focus-visible:ring-purple-500"
          />
          <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">Send</Button>
        </div>
      </Card>
    </div>
  );
}
