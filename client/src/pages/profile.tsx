import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ProfileSummary } from "../types/profile";

export default function Profile() {
  const [profile, setProfile] = useState<ProfileSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function getProfileInfo() {
    try {
      const response = await fetch("/profile/summary", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile (${response.status})`);
      }

      const data: ProfileSummary = await response.json();
      setProfile(data);
    } catch (e) {
      console.error(e);
      setError("Unable to load profile");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  if (loading) return <div>Loading profile</div>;
  if (error) return <div className="text-red-500">{error}</div>
  if (!profile) return null;

  return (
    <div className="flex flex-col">
      {/* Profile Information */}
      {/* User Top Data */}
    </div>
  )
}