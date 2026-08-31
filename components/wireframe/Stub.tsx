type StubProps = {
  title?: string;
  message?: string;
};

export function Stub({
  title = "Not yet wireframed",
  message = "This page body will be ported in a later unit.",
}: StubProps) {
  return (
    <div className="my-8 border-2 border-dashed border-black px-5 py-10 text-center">
      <h2 className="m-0 mb-2 text-lg">{title}</h2>
      <p className="my-1 text-neutral-500">{message}</p>
      <p className="my-1 text-neutral-500">
        Global chrome above and below is final; the page body belongs to its own
        wireframe unit.
      </p>
    </div>
  );
}
