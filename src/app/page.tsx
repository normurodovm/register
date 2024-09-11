import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
export default async function Home() {
  const data = await getServerSession(authOptions);
  console.log(data);

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      officiis eum eaque obcaecati facilis earum cumque quaerat, assumenda,
      veritatis asperiores cupiditate possimus sint omnis expedita modi aut fuga
      nihil ab?
    </div>
  );
}
