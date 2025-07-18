"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigRightDash } from "lucide-react";

export default function DialogDemo() {
  const [note, setNote] = useState<string>("");

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Lets start a consultation</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Start a new consultation with a doctor.</DialogTitle>
            <DialogDescription>
              Provide your symptoms.
              <Textarea
                className="h-[120px] md:h-[180px]"
                placeholder="Please tell how you are feeling today and what symptoms you are
              experiencing."
                onChange={(e) => setNote(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4"></div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={!note}>
              Next <ArrowBigRightDash />
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
