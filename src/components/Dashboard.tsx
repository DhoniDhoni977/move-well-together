
import React from "react";
import { Container } from "@/components/ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressChart from "./ProgressChart";
import BuddyMatch from "./BuddyMatch";
import SocialFeed from "./SocialFeed";
import WorkoutCard from "./WorkoutCard";
import ProfileCard from "./ProfileCard";
import { Button } from "@/components/ui/button";
import { Calendar, Dumbbell, Heart, MenuSquare, Trophy, UserCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample user data
const userData = {
  name: "Jamie Miller",
  avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  location: "New York, NY",
  bio: "Fitness enthusiast looking to improve strength and find workout partners for motivation.",
  goals: ["Strength Training", "Weight Loss", "Running"],
  completedWorkouts: 12,
  totalWorkouts: 20,
  buddies: 7
};

// Sample workout data
const workouts = [
  {
    title: "Full Body HIIT",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: 30,
    difficulty: "intermediate" as const,
    category: "HIIT",
    instructor: "Alex Trainer",
    likes: 245
  },
  {
    title: "Morning Yoga Flow",
    image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: 20,
    difficulty: "beginner" as const,
    category: "Yoga",
    instructor: "Sarah Yogi",
    likes: 187
  },
  {
    title: "Strength Building",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: 45,
    difficulty: "advanced" as const,
    category: "Strength",
    instructor: "Mike Muscle",
    likes: 320
  }
];

const Dashboard: React.FC = () => {
  const isMobile = useIsMobile();
  
  const QuickNav = () => (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <Dumbbell className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Workouts</span>
      </Button>
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <UserCheck className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Buddies</span>
      </Button>
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <Calendar className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Schedule</span>
      </Button>
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <MenuSquare className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Plans</span>
      </Button>
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <Heart className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Health</span>
      </Button>
      <Button variant="outline" className="flex flex-col items-center h-auto py-3">
        <Trophy className="h-5 w-5 mb-1 text-fitness-teal" />
        <span className="text-xs">Goals</span>
      </Button>
    </div>
  );

  return (
    <Container className="py-6">
      <QuickNav />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Profile & Progress on mobile, Profile on desktop */}
        <div className={isMobile ? "order-1" : ""}>
          <div className="mb-6">
            <ProfileCard
              name={userData.name}
              avatar={userData.avatar}
              location={userData.location}
              bio={userData.bio}
              goals={userData.goals}
              completedWorkouts={userData.completedWorkouts}
              totalWorkouts={userData.totalWorkouts}
              buddies={userData.buddies}
            />
          </div>
          
          {!isMobile && (
            <div className="mb-6">
              <ProgressChart />
            </div>
          )}
        </div>
        
        {/* Middle column - Workouts & Social on mobile, Feed on desktop */}
        <div className={`${isMobile ? "order-2" : ""} ${!isMobile ? "col-span-2" : ""}`}>
          {isMobile ? (
            <Tabs defaultValue="workouts" className="mb-6">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="workouts">Workouts</TabsTrigger>
                <TabsTrigger value="buddies">Buddies</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>
              
              <TabsContent value="workouts" className="space-y-4">
                <h3 className="text-lg font-medium">Recommended Workouts</h3>
                {workouts.map((workout, index) => (
                  <WorkoutCard
                    key={index}
                    title={workout.title}
                    image={workout.image}
                    duration={workout.duration}
                    difficulty={workout.difficulty}
                    category={workout.category}
                    instructor={workout.instructor}
                    likes={workout.likes}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="buddies">
                <BuddyMatch />
              </TabsContent>
              
              <TabsContent value="social">
                <SocialFeed />
              </TabsContent>
            </Tabs>
          ) : (
            <SocialFeed />
          )}
        </div>
        
        {/* Right column - Buddies on desktop */}
        {!isMobile && (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Recommended Workouts</h3>
              <div className="space-y-4">
                {workouts.slice(0, 2).map((workout, index) => (
                  <WorkoutCard
                    key={index}
                    title={workout.title}
                    image={workout.image}
                    duration={workout.duration}
                    difficulty={workout.difficulty}
                    category={workout.category}
                    instructor={workout.instructor}
                    likes={workout.likes}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <BuddyMatch />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
