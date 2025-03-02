export default async function Default({
  params,
}: {
  params: Promise<{ artist: string }>;
}): Promise<void> {
  const artist = (await params).artist;
}