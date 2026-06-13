import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {

  const body = await request.json();

  const { error } = await supabase
    .from("estado_mundial")
    .update({
      [body.campo]: body.valor || null
    })
    .eq("id", 1);

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