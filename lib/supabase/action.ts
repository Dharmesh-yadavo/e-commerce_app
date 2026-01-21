"use server";

import { createClient } from "@/lib/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const signInWith = async (provider: Provider) => {
  const supabase = await createClient();

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.log("Error during OAuth sign-in:", error.message);
  }

  if (data?.url) {
    redirect(data.url);
  }
};

const signinWithGoogle = async () => signInWith("google");

const signUpAction = async (prevState: unknown, formData: FormData) => {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      // Ensure this matches your Supabase Redirect URLs
      // emailRedirectTo: `${process.env.SITE_URL}/auth/callback`,
    },
  });

  console.log(data);

  if (data?.session) {
    redirect("/");
  }

  if (error) {
    console.log(error);
    return { error: error.message, success: "" };
  }

  // Since Email Confirmation is ON, data.session will be null here.
  return {
    error: "",
    success: "Registration successful!",
  };
};

const signInAction = async (prevState: unknown, formData: FormData) => {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // console.log(data);

  if (error) {
    console.log("error", error);
    return {
      success: null,
      error: error.message,
    };
  }
  if (data?.session) {
    redirect("/");
  }
};

export { signinWithGoogle, signUpAction, signInAction };
