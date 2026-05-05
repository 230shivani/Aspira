import React, { useState } from "react";
import { 
  User, 
  Settings as SettingsIcon, 
  Lock, 
  Bell, 
  Shield, 
  LogOut, 
  Save, 
  Camera,
  Mail,
  Briefcase,
  PenLine
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import userService from "../services/userService";

export default function Settings() {
  const { user, logout, updateUserInfo } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    bio: user?.bio || "",
    experience: user?.experience || 0,
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      await userService.updateUser(user._id, profileData);
      updateUserInfo(profileData);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: error.response?.data?.message || "Failed to update profile" });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return setMessage({ type: "error", text: "New passwords do not match" });
    }
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      await userService.changePassword({
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword,
      });
      setMessage({ type: "success", text: "Password changed successfully!" });
      setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      setMessage({ type: "error", text: error.response?.data?.message || "Failed to change password" });
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: "profile", name: "Account Profile", icon: <User size={18} /> },
    { id: "security", name: "Security & Privacy", icon: <Lock size={18} /> },
    { id: "notifications", name: "Notifications", icon: <Bell size={18} /> },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] -z-10 animate-blob"></div>
      
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-80 shrink-0 space-y-4">
          <div className="glass p-6 rounded-[32px] border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shadow-xl">
                {user?.name?.[0] || "U"}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">{user?.name}</h2>
                <p className="text-xs text-white/50">{user?.email}</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/5">
              <button 
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold text-red-400 hover:bg-red-500/10 transition-all"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>

          <div className="glass p-6 rounded-[32px] border border-white/5 text-center">
            <Shield size={24} className="mx-auto text-blue-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">Advanced Security</h4>
            <p className="text-[10px] text-white/40 leading-relaxed">
              Your data is encrypted using industry standard protocols.
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="glass p-8 md:p-12 rounded-[40px] border border-white/10 min-h-[600px]">
            {message.text && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-8 p-4 rounded-2xl text-sm font-bold flex items-center gap-3 ${
                  message.type === "success" 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${message.type === "success" ? "bg-emerald-400" : "bg-red-400"}`}></div>
                {message.text}
              </motion.div>
            )}

            {activeTab === "profile" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">Profile Settings</h3>
                    <p className="text-sm text-white/40">Manage your public presence and professional info</p>
                  </div>
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                    <div className="relative group">
                      <div className="w-32 h-32 rounded-[40px] bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-all">
                        <User size={48} className="text-white/10" />
                      </div>
                      <button type="button" className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
                        <Camera size={18} />
                      </button>
                    </div>
                    <div className="flex-1 space-y-2">
                       <h4 className="text-white font-bold">Profile Photo</h4>
                       <p className="text-xs text-white/40 max-w-xs leading-relaxed">
                         Upload a professional headshot. Recommended size: 400x400px. JPG, PNG formats only.
                       </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-400" size={18} />
                        <input 
                          type="text" 
                          value={profileData.name}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-400" size={18} />
                        <input 
                          disabled
                          type="email" 
                          value={profileData.email}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white/40 cursor-not-allowed"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Professional Bio</label>
                    <div className="relative group">
                       <PenLine className="absolute left-4 top-5 text-white/20 group-focus-within:text-blue-400" size={18} />
                       <textarea 
                         rows="4"
                         value={profileData.bio}
                         onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                         className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all resize-none leading-relaxed"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Experience (Years)</label>
                    <div className="relative group">
                       <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-400" size={18} />
                       <input 
                         type="number" 
                         value={profileData.experience}
                         onChange={(e) => setProfileData({...profileData, experience: e.target.value})}
                         className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                       />
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    type="submit"
                    className="flex items-center gap-2 px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                  >
                    <Save size={18} />
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </form>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-4 mb-10">
                   <div className="p-3 bg-red-500/10 rounded-2xl text-red-400">
                     <Lock size={24} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-black text-white leading-tight">Security & Privacy</h3>
                     <p className="text-sm text-white/40">Protect your account and managed access</p>
                   </div>
                </div>

                <form onSubmit={handlePasswordUpdate} className="space-y-8 max-w-md">
                   <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Current Password</label>
                        <input 
                          required
                          type="password" 
                          value={passwordData.oldPassword}
                          onChange={(e) => setPasswordData({...passwordData, oldPassword: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-red-500/30 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">New Password</label>
                        <input 
                          required
                          type="password" 
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Confirm New Password</label>
                        <input 
                          required
                          type="password" 
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                   </div>

                   <button 
                    disabled={loading}
                    type="submit"
                    className="flex items-center gap-2 px-10 py-4 bg-white text-black font-black rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                  >
                    Update Password
                  </button>
                </form>

                <div className="mt-12 pt-12 border-t border-white/5 space-y-6">
                   <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold">Two-Factor Authentication</h4>
                        <p className="text-xs text-white/40">Add an extra layer of security to your account</p>
                      </div>
                      <div className="w-12 h-6 bg-white/10 rounded-full relative p-1 cursor-pointer">
                         <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                      </div>
                   </div>
                   <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold">Active Sessions</h4>
                        <p className="text-xs text-white/40">Manage your logged in devices</p>
                      </div>
                      <button className="text-[10px] font-black text-blue-400 hover:underline px-3 py-1 bg-blue-400/10 rounded-lg">VIEW ALL</button>
                   </div>
                </div>
              </motion.div>
            )}

            {activeTab === "notifications" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                   <Bell size={40} className="text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Notification Center</h3>
                <p className="text-sm text-white/40 max-w-xs">We are currently fine-tuning our alert engine. Stay tuned for real-time job alerts!</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
