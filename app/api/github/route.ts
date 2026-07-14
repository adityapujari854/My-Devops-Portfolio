import { NextResponse } from "next/server";
import {
  getProfile,
  getRepositories,
  getPinnedRepos,
  getRecentActivity,
  getLanguages,
} from "../../../lib/github";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") || "profile";
  const username = url.searchParams.get("username") || process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) return NextResponse.json({ error: "missing username" }, { status: 400 });

  try {
    switch (type) {
      case "profile": {
        const data = await getProfile(username);
        return NextResponse.json(data);
      }
      case "repos": {
        const data = await getRepositories(username);
        return NextResponse.json(data);
      }
      case "pinned": {
        const data = await getPinnedRepos(username);
        return NextResponse.json(data);
      }
      case "events": {
        const per = Number(url.searchParams.get("per_page") || "5");
        const data = await getRecentActivity(username, per);
        return NextResponse.json(data);
      }
      case "languages": {
        const data = await getLanguages(username);
        return NextResponse.json(data);
      }
      default:
        return NextResponse.json({ error: "unknown type" }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ error: "server error", details: String(err) }, { status: 500 });
  }
}
