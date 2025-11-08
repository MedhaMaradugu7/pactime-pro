import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="max-w-4xl w-full px-6">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
            <Clock className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground">Time Management System</h1>
          <p className="text-xl text-muted-foreground">Choose your role to continue</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Executive Card */}
          <Card className="hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate("/")}>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Executive</h2>
                <p className="text-muted-foreground mb-6">
                  Manage your personal schedule, view appointments, and track your time allocation across projects.
                </p>
              </div>
              <Button className="w-full group-hover:bg-primary/90" size="lg">
                Continue as Executive
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Secretary Card */}
          <Card className="hover:shadow-xl transition-shadow cursor-pointer group" onClick={() => navigate("/secretary")}>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Secretary</h2>
                <p className="text-muted-foreground mb-6">
                  Manage executive schedules, coordinate meetings, find common slots, and handle appointment requests.
                </p>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                Continue as Secretary
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
