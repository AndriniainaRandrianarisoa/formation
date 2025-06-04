
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { userService } from "@/src/services/userServices"



export default async function UserPage() {
 //await new Promise ((r) => setTimeout(r, 2000))
const res = await  userService.getUserById(1)
  console.log("🏀🍗🦖 ~ Page ~ res:", res)
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>User list</CardTitle>
        <CardDescription>User list.</CardDescription>
      </CardHeader>
      <CardContent>
       Coucou
      </CardContent>
      
    </Card>
  )
}
