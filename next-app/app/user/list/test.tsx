
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"



export default async function Page() {
 //await new Promise ((r) => setTimeout(r, 2000))
const res = await fetch('http://localhost:3000/api/users')
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
