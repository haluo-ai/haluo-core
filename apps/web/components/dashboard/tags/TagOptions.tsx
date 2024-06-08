"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Combine, Trash2 } from "lucide-react";

import DeleteTagConfirmationDialog from "./DeleteTagConfirmationDialog";
import { MergeTagModal } from "./MergeTagModal";

export function TagOptions({
  tag,
  children,
}: {
  tag: { id: string; name: string };
  children?: React.ReactNode;
}) {
  const [deleteTagDialogOpen, setDeleteTagDialogOpen] = useState(false);
  const [mergeTagDialogOpen, setMergeTagDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DeleteTagConfirmationDialog
        tag={tag}
        open={deleteTagDialogOpen}
        setOpen={setDeleteTagDialogOpen}
      />
      <MergeTagModal
        open={mergeTagDialogOpen}
        setOpen={setMergeTagDialogOpen}
        tag={tag}
      />
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setMergeTagDialogOpen(true)}
        >
          <Combine className="size-4" />
          <span>Merge</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setDeleteTagDialogOpen(true)}
        >
          <Trash2 className="size-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
