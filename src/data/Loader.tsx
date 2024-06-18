import { useIsFetching } from "@tanstack/react-query";

export function Loader() {
  const isFetching = useIsFetching({
    predicate: (query) => query.status === "loading",
  });

  if (!isFetching) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900/90 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full border border-gray-200 w-12 h-12"></div>
    </div>
  );
}
