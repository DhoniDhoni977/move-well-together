
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar,
  CartesianGrid,
  Legend
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample workout data
const weeklyData = [
  { name: "Mon", workouts: 1, duration: 30, calories: 250 },
  { name: "Tue", workouts: 0, duration: 0, calories: 0 },
  { name: "Wed", workouts: 1, duration: 45, calories: 320 },
  { name: "Thu", workouts: 1, duration: 20, calories: 180 },
  { name: "Fri", workouts: 0, duration: 0, calories: 0 },
  { name: "Sat", workouts: 2, duration: 60, calories: 450 },
  { name: "Sun", workouts: 1, duration: 30, calories: 260 },
];

const monthlyData = [
  { name: "Week 1", workouts: 4, duration: 120, calories: 950 },
  { name: "Week 2", workouts: 5, duration: 150, calories: 1100 },
  { name: "Week 3", workouts: 3, duration: 90, calories: 780 },
  { name: "Week 4", workouts: 6, duration: 180, calories: 1300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
        <p className="font-medium">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}${entry.name === 'duration' ? ' mins' : entry.name === 'calories' ? ' cal' : ''}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const ProgressChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("workouts");
  const [timeRange, setTimeRange] = React.useState("weekly");

  const data = timeRange === "weekly" ? weeklyData : monthlyData;

  const renderChart = () => {
    switch (activeTab) {
      case "workouts":
        return (
          <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="workouts" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case "duration":
        return (
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="duration" 
              stroke="#2DD4BF" 
              strokeWidth={2}
              dot={{ stroke: '#0E7490', strokeWidth: 2, r: 4, fill: 'white' }}
              activeDot={{ r: 6, fill: '#0E7490' }}
            />
          </LineChart>
        );
      case "calories":
        return (
          <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="calories" fill="#FB923C" radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Your Progress</CardTitle>
          <div>
            <select 
              className="text-sm bg-transparent border-0 outline-none cursor-pointer text-muted-foreground"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="workouts" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="duration">Duration</TabsTrigger>
            <TabsTrigger value="calories">Calories</TabsTrigger>
          </TabsList>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {renderChart()}
            </ResponsiveContainer>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
