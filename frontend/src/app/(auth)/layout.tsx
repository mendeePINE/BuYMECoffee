import Layout from "./components/Layout";

export default function AuthLayOut({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-stone-50 w-full h-full flex">
      <Layout />
      {children}
    </div>
  );
}
