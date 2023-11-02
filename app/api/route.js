import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("address");
  let apiUrl = "";
  if (city) {
    apiUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=${city}&aqi=no`;
  } else {
    apiUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=13346&aqi=no`;
  }
  try {
    const query = await fetch(apiUrl);
    const data = await query.json();
    return NextResponse.json({ data });
  } catch (error) {
    alert(error);
  }
}
