
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileCard from "./ProfileCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BuddyProps {
  id: string;
  name: string;
  avatar: string;
  location: string;
  bio: string;
  goals: string[];
  completedWorkouts: number;
  totalWorkouts: number;
  buddies: number;
  compatibilityScore: number;
}

const buddySuggestions: BuddyProps[] = [
  {
    id: "1",
    name: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "San Francisco, CA",
    bio: "Morning runner, tech enthusiast. Looking for running buddies to train for a 10k.",
    goals: ["Running", "Weight Loss", "Endurance"],
    completedWorkouts: 24,
    totalWorkouts: 30,
    buddies: 5,
    compatibilityScore: 92,
  },
  {
    id: "2",
    name: "Taylor Kim",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "Chicago, IL",
    bio: "Yoga instructor looking for strength training partners. Let's motivate each other!",
    goals: ["Strength", "Flexibility", "Mindfulness"],
    completedWorkouts: 45,
    totalWorkouts: 50,
    buddies: 12,
    compatibilityScore: 88,
  },
  {
    id: "3",
    name: "Jordan Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    location: "Austin, TX",
    bio: "CrossFit enthusiast looking for workout partners. Love challenging myself!",
    goals: ["Strength", "CrossFit", "Conditioning"],
    completedWorkouts: 37,
    totalWorkouts: 40,
    buddies: 8,
    compatibilityScore: 85,
  },
  {
    id: "4",
    name: "Morgan Smith",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    location: "Denver, CO",
    bio: "Hiking enthusiast and weekend warrior. Looking for gym buddies during the week.",
    goals: ["Toning", "Cardio", "Outdoor Fitness"],
    completedWorkouts: 18,
    totalWorkouts: 25,
    buddies: 3,
    compatibilityScore: 79,
  }
];

const BuddyMatch: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Workout Buddy Matches</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {buddySuggestions.map((buddy) => (
              <div key={buddy.id} className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-fitness-teal animate-pulse-soft"></div>
                    <span className="text-sm font-medium">Match score: {buddy.compatibilityScore}%</span>
                  </div>
                </div>
                <ProfileCard
                  name={buddy.name}
                  avatar={buddy.avatar}
                  location={buddy.location}
                  bio={buddy.bio}
                  goals={buddy.goals}
                  completedWorkouts={buddy.completedWorkouts}
                  totalWorkouts={buddy.totalWorkouts}
                  buddies={buddy.buddies}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default BuddyMatch;
