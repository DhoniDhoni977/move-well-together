
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Dumbbell, MapPin, MessageCircle, UserPlus, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ProfileCardProps {
  name: string;
  avatar: string;
  location: string;
  bio: string;
  goals: string[];
  completedWorkouts: number;
  totalWorkouts: number;
  buddies: number;
  compact?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  avatar,
  location,
  bio,
  goals,
  completedWorkouts,
  totalWorkouts,
  buddies,
  compact = false
}) => {
  const progressPercentage = totalWorkouts > 0 
    ? Math.round((completedWorkouts / totalWorkouts) * 100) 
    : 0;

  return (
    <Card className={`${compact ? "w-full" : "w-full max-w-md"} overflow-hidden`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img 
              src={avatar} 
              alt={`${name}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      {!compact && (
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{bio}</p>
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <Badge key={goal} variant="secondary">{goal}</Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Dumbbell className="h-4 w-4 text-fitness-teal" />
                <span>Workouts</span>
              </span>
              <span>{completedWorkouts}/{totalWorkouts}</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-fitness-dark-teal" />
              <span>{buddies} buddies</span>
            </div>
            <div className="flex items-center gap-1">
              <Activity className="h-4 w-4 text-fitness-accent" />
              <span>Active</span>
            </div>
          </div>
        </CardContent>
      )}
      
      <CardFooter className="flex gap-2 pt-2">
        {compact ? (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              <UserPlus className="h-4 w-4 mr-1" /> Connect
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" className="flex-1">
              <MessageCircle className="h-4 w-4 mr-1" /> Message
            </Button>
            <Button className="flex-1 bg-fitness-teal hover:bg-fitness-dark-teal">
              <UserPlus className="h-4 w-4 mr-1" /> Add Buddy
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
