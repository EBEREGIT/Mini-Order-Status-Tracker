import { Button } from "./ui/button";

export default function Pagination({
  page,
  setter,
}: {
  page: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className="flex flex-row-reverse my-5">
      <section className="flex justify-center gap-5 place-items-center">
        <Button
          onClick={() =>
            setter((prevState: number) =>
              prevState > 1 ? prevState - 1 : prevState
            )
          }
        >
          Previous
        </Button>
        <p>{page}</p>
        <Button onClick={() => setter((prevState: number) => prevState + 1)}>
          Next
        </Button>
      </section>
    </section>
  );
}
