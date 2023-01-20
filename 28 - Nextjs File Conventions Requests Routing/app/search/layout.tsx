import Search from "@/app/search/Search";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <Search />
      <div>{children}</div>
    </div>
  );
}
