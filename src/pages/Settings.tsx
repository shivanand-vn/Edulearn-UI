import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, Globe, Palette, Shield, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const location = useLocation();
  const isTeacher = location.pathname.includes("teacher");
  const userType = isTeacher ? "teacher" : "student";
  const userName = isTeacher ? "Dr. Sarah Miller" : "Alex Johnson";

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    assignments: true,
    grades: true,
    announcements: true,
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <DashboardLayout userType={userType} userName={userName}>
      <div className="space-y-6 max-w-3xl">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>

        {/* Notifications */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-primary">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-semibold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({ ...notifications, email: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <Switch
                checked={notifications.push}
                onCheckedChange={(checked) => setNotifications({ ...notifications, push: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Assignment Reminders</p>
                <p className="text-sm text-muted-foreground">Get notified about due dates</p>
              </div>
              <Switch
                checked={notifications.assignments}
                onCheckedChange={(checked) => setNotifications({ ...notifications, assignments: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Grade Updates</p>
                <p className="text-sm text-muted-foreground">Notifications when grades are posted</p>
              </div>
              <Switch
                checked={notifications.grades}
                onCheckedChange={(checked) => setNotifications({ ...notifications, grades: checked })}
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-primary">
              <Lock className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-semibold">Security</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" />
            </div>
            <Button variant="outline">Update Password</Button>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-primary">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-semibold">Preferences</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select
                id="timezone"
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
              >
                <option value="pst">Pacific Time (PST)</option>
                <option value="est">Eastern Time (EST)</option>
                <option value="utc">UTC</option>
                <option value="gmt">GMT</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-card rounded-xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg gradient-primary">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-display text-lg font-semibold">Privacy</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Show Activity Status</p>
                <p className="text-sm text-muted-foreground">Display when you're online</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <Button onClick={handleSave} className="gradient-primary text-primary-foreground">
          <Save className="w-4 h-4 mr-2" />
          Save All Changes
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
