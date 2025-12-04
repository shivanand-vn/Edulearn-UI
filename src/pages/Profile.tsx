import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Mail, Phone, MapPin, Calendar, Award, BookOpen, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const location = useLocation();
  const isTeacher = location.pathname.includes("teacher");
  const userType = isTeacher ? "teacher" : "student";
  const userName = isTeacher ? "Dr. Sarah Miller" : "Alex Johnson";

  const [profile, setProfile] = useState({
    fullName: userName,
    email: isTeacher ? "sarah.miller@edulearn.com" : "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: isTeacher
      ? "Passionate educator with 10+ years of experience in software development and teaching. Specialized in React, TypeScript, and modern web technologies."
      : "Enthusiastic learner pursuing a career in software development. Currently focused on mastering React and TypeScript.",
    joinDate: "January 2024",
  });

  const handleSave = () => {
    toast({
      title: "Profile updated",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <DashboardLayout userType={userType} userName={userName}>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-card rounded-xl shadow-card overflow-hidden">
          {/* Cover */}
          <div className="h-32 gradient-primary relative">
            <div className="absolute inset-0 bg-foreground/10" />
          </div>

          {/* Avatar & Basic Info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-card">
                  <AvatarImage src="" />
                  <AvatarFallback className="gradient-primary text-primary-foreground text-2xl">
                    {userName.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  <Camera className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-display text-xl font-bold">{profile.fullName}</h2>
                <p className="text-muted-foreground capitalize">{userType}</p>
              </div>

              <Button onClick={handleSave} className="gradient-primary text-primary-foreground">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xl font-bold">{isTeacher ? "8" : "12"}</p>
                <p className="text-sm text-muted-foreground">{isTeacher ? "Courses" : "Enrolled"}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xl font-bold">{isTeacher ? "4.8" : "5"}</p>
                <p className="text-sm text-muted-foreground">{isTeacher ? "Rating" : "Certificates"}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xl font-bold">{isTeacher ? "1,234" : "48h"}</p>
                <p className="text-sm text-muted-foreground">{isTeacher ? "Students" : "Learned"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <h3 className="font-display text-lg font-semibold mb-6">Personal Information</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                rows={4}
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Profile;
