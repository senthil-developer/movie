interface Props {
  path: string;
  params?: string;
  revalidate?: number;
}

export async function fetchData({ path, params, revalidate }: Props) {
  const response = await fetch(
    `https://api.themoviedb.org/3/${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${params}`,
    { next: { revalidate: revalidate ? revalidate : 3600 } }
  );
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await response.json();
  return data;
}
