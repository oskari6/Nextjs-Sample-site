//export const revalidate = 20; //also possible to set a universal time, individual still works

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productsResponse = await fetch("http://localhost:3001/products"); //, {cache: "no-store",}
  const products = await productsResponse.json();
  console.log({ products });
  return <h1>{children}</h1>;
}
