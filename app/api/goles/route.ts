import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {

  const body = await request.json();

  const { error } = await supabase
    .from("jugadores")
    .update({
      goles: body.goles,
    })
    .eq("id", body.id);

  if (error) {

    return NextResponse.json(
      {
        ok: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );

  }

  return NextResponse.json({
    ok: true,
  });

}