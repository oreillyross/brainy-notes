type ResponseBody = Record<string, unknown> | string;

const URLS = {
  NOTES: "api/notes",
};

const wrappedFetch = async (
  ...args: [RequestInfo, RequestInit?]
): Promise<ResponseBody> => {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error(`Network response was not ok: ${res.status}`);
  }
  return res.json();
};
const post = (url: string, data?: object) => {
  wrappedFetch(url, {
    method: "POST",
    body: data ? JSON.stringify(data) : undefined,
  });
};

const addNote = (data: object) => post(URLS.NOTES, data);

export function useAPI() {
  return {
    addNote,
  };
}
