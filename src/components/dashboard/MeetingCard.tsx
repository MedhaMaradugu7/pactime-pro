import { Clock, Users, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MeetingCardProps {
  time: string;
  title: string;
  duration: string;
  attendees: number;
  project?: string;
  venue?: string;
  onView?: () => void;
}

const MeetingCard = ({ time, title, duration, attendees, project, venue, onView }: MeetingCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Time Badge */}
          <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-center min-w-[70px]">
            <p className="text-lg font-bold">{time.split(' ')[0]}</p>
            <p className="text-xs">{time.split(' ')[1]}</p>
          </div>

          {/* Meeting Details */}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">{title}</h4>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {attendees} attendees
              </span>
              {venue && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {venue}
                </span>
              )}
            </div>
            {project && (
              <Badge variant="secondary" className="mt-2">
                {project}
              </Badge>
            )}
          </div>

          {/* Action Button */}
          <Button variant="ghost" size="sm" onClick={onView}>
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
