"use client"

import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  page,
  setter,
}: {
  page: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="flex flex-row-reverse my-2">
      <PaginationContent className="cursor-pointer">
        {/* previous button */}
        <PaginationItem
          onClick={() =>
            setter((prevState: number) =>
              prevState > 1 ? prevState - 1 : prevState
            )
          }
        >
          <PaginationPrevious />
        </PaginationItem>

        {/* current page */}
        <PaginationItem>
          <PaginationLink>{page}</PaginationLink>
        </PaginationItem>

        {/* next button */}
        <PaginationItem
          onClick={() => setter((prevState: number) => prevState + 1)}
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </section>
  );
}
