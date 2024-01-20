"use client";
// Import the necessary modules
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useRouter } from "next/navigation";

const supabase = createClient(
  "https://boxkznfnxnciiwxzpihk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveGt6bmZueG5jaWl3eHpwaWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NDk0NzAsImV4cCI6MjAyMTMyNTQ3MH0.GhajM_RhfKiOvHWfhBvtklihIYCG996-RrnmmrJYPok"
);

export default function Home() {
  const [session, setSession] = useState(null);
  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    // Redirect to "/home" when logged in
    router.push("/home");

    // You can also return null here, as the user will be redirected
    return null;
  }
}
