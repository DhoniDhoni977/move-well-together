
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface ActivityPost {
  id: string;
  user: {
    name: string;
    avatar: string;
    initials: string;
  };
  time: string;
  content: string;
  image?: string;
  workout?: {
    name: string;
    duration: number;
    calories: number;
  };
  likes: number;
  comments: number;
  liked: boolean;
}

const activities: ActivityPost[] = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      initials: "SJ",
    },
    time: "2 hours ago",
    content: "Just completed my morning run! 🏃‍♀️ Feeling great and ready for the day!",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    workout: {
      name: "Morning Run",
      duration: 35,
      calories: 320,
    },
    likes: 24,
    comments: 5,
    liked: false,
  },
  {
    id: "2",
    user: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      initials: "MC",
    },
    time: "Yesterday",
    content: "Hit a new PR on my deadlift today! 285lbs 💪 #GainingStrength",
    workout: {
      name: "Strength Training",
      duration: 60,
      calories: 450,
    },
    likes: 42,
    comments: 12,
    liked: true,
  },
  {
    id: "3",
    user: {
      name: "Ava Williams",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      initials: "AW",
    },
    time: "3 days ago",
    content: "Just signed up for my first half marathon! Training starts next week. Any tips?",
    likes: 18,
    comments: 8,
    liked: false,
  },
];

const SocialFeed: React.FC = () => {
  const [posts, setPosts] = React.useState<ActivityPost[]>(activities);

  const handleLike = (id: string) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id === id) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
                <AvatarFallback>{post.user.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-sm">{post.user.name}</h4>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                <p className="text-sm mt-1">{post.content}</p>
                
                {post.image && (
                  <div className="mt-3 rounded-md overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                
                {post.workout && (
                  <div className="mt-3 bg-muted rounded-md p-3 flex justify-between text-sm">
                    <div>
                      <span className="font-medium">{post.workout.name}</span>
                    </div>
                    <div className="flex gap-4">
                      <span>{post.workout.duration} mins</span>
                      <span>{post.workout.calories} calories</span>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-3">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`px-2 ${post.liked ? "text-red-500" : ""}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="px-2">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SocialFeed;
