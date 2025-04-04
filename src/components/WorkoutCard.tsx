
import React from "react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Heart, Share2, User } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  image: string;
  duration: number; // in minutes
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  date?: string;
  instructor?: string;
  likes?: number;
  isLiked?: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  image,
  duration,
  difficulty,
  category,
  date,
  instructor,
  likes = 0,
  isLiked = false
}) => {
  const [liked, setLiked] = React.useState(isLiked);
  const [likeCount, setLikeCount] = React.useState(likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden fitness-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge className={getDifficultyColor()}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2 space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration} min</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Badge variant="outline">{category}</Badge>
          </div>
        </div>
        
        {(date || instructor) && (
          <div className="flex justify-between text-sm text-muted-foreground">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
            )}
            
            {instructor && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{instructor}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-1">
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className={liked ? "text-red-500" : "text-muted-foreground"}
            onClick={handleLike}
          >
            <Heart className="h-4 w-4 fill-current" />
          </Button>
          <span className="text-sm text-muted-foreground">{likeCount}</span>
        </div>
        
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button className="bg-fitness-teal hover:bg-fitness-dark-teal">Start</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
