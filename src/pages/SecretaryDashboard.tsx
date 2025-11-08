import { Calendar as CalendarIcon, Users, Clock, Plus, Search, UserCog } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import MeetingCard from "@/components/dashboard/MeetingCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const SecretaryDashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Mock data for executives
  const executives = [
    { id: 1, name: "John Doe", meetings: 4, available: true },
    { id: 2, name: "Sarah Smith", meetings: 3, available: true },
    { id: 3, name: "Mike Johnson", meetings: 2, available: false },
    { id: 4, name: "Emily Davis", meetings: 5, available: true },
  ];

  // Mock data for upcoming meetings
  const upcomingMeetings = [
    {
      time: "09:00 AM",
      title: "Project Alpha Review",
      duration: "1h",
      attendees: 4,
      project: "Alpha",
      venue: "Conference Room A"
    },
    {
      time: "10:30 AM",
      title: "Team Standup",
      duration: "30m",
      attendees: 8,
      project: "General",
      venue: "Virtual"
    },
    {
      time: "02:00 PM",
      title: "Client Presentation",
      duration: "2h",
      attendees: 6,
      project: "Beta",
      venue: "Executive Boardroom"
    },
  ];

  // Mock data for pending approvals
  const pendingRequests = [
    { id: 1, executive: "John Doe", type: "Meeting Reschedule", time: "2h ago" },
    { id: 2, executive: "Sarah Smith", type: "Leave Request", time: "5h ago" },
    { id: 3, executive: "Mike Johnson", type: "Meeting Request", time: "1d ago" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role="secretary" />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Good Morning, Secretary</h1>
                <p className="text-muted-foreground mt-1">Here's the overview for today, {currentDate}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search executives or meetings..." 
                    className="pl-10 w-80"
                  />
                </div>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Schedule Meeting
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Executives"
              value={executives.length}
              subtitle="4 available today"
              icon={UserCog}
              iconColor="text-primary"
            />
            <StatCard
              title="Today's Meetings"
              value={upcomingMeetings.length}
              subtitle="7 hours total duration"
              icon={CalendarIcon}
              iconColor="text-accent"
            />
            <StatCard
              title="Pending Requests"
              value={pendingRequests.length}
              subtitle="Require action"
              icon={Clock}
              iconColor="text-warning"
            />
            <StatCard
              title="Available Slots"
              value="12"
              subtitle="Across all executives"
              icon={Users}
              iconColor="text-success"
            />
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Today's Meetings - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Today's Meetings</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingMeetings.map((meeting, index) => (
                    <MeetingCard key={index} {...meeting} />
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Executive Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Executive Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {executives.map((exec) => (
                    <div key={exec.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{exec.name}</p>
                        <p className="text-xs text-muted-foreground">{exec.meetings} meetings today</p>
                      </div>
                      <Badge variant={exec.available ? "default" : "secondary"}>
                        {exec.available ? "Available" : "Busy"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pending Approvals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pendingRequests.map((request) => (
                    <div key={request.id} className="p-3 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{request.executive}</p>
                          <p className="text-xs text-muted-foreground">{request.type}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">{request.time}</Badge>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" className="flex-1" variant="default">Approve</Button>
                        <Button size="sm" className="flex-1" variant="outline">Decline</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Find Common Slots */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Find Common Slots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input placeholder="Select executives for meeting..." />
                </div>
                <Button>
                  <Search className="w-4 h-4 mr-2" />
                  Find Slots
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SecretaryDashboard;
