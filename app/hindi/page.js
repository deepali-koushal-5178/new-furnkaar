import ClientHome from "@/components/ClientHome";
import { getDictionary } from "@/lib/getDictionary";

export default async function HindiPage() {
  const dict = await getDictionary("hi");
  return <ClientHome dict={dict} lang="hi" />;
}