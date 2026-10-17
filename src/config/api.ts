import { auth } from "./firebase";

export const API_BASE = "https://app.kipnovatech.co.ke";

export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const user = auth.currentUser;
  if (!user) {
    window.location.href = "/login";
    throw new Error("Not signed in");
  }
  const token = await user.getIdToken();
  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(url, { ...options, headers });
  if (response.status === 401) {
    window.location.href = "/login";
    throw new Error("Session expired");
  }
  return response;
}
