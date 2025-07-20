import { openai } from "@/config/OpenAiModel";
import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        { role: "system", content: JSON.stringify(AIDoctorAgents) },
        {
          role: "user",
          content:
            "User Notes/Symptoms:" +
            notes +
            ", Depends on user notes and symptoms, Please suggest list of doctors , Return Object in JSON in the format with the field 1)'additionInfo': suggest a summary  brief info what could be the issue 2) 'suggestedDoctors': list of doctor from the AIDoctorAgent list. Fields name should be as defined ",
        },
      ],
    });

    const rawResp = completion.choices[0].message;

    //@ts-ignore
    const Resp = rawResp.content
      .trim()
      .replace("```json", "")
      .replace("```", "");
    const JSONResp = JSON.parse(Resp);

    console.log("---- suggested doctor", { JSONResp });
    return NextResponse.json(JSONResp);
  } catch (e) {
    console.error(e);
    return NextResponse.json([]);
  }
}
