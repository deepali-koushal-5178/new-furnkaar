import ClientHome from "@/components/ClientHome";
import { getDictionary } from "@/lib/getDictionary";

export default async function HomePage() {
  const dict = await getDictionary("en");
  return <ClientHome dict={dict} lang="en" />;
}
