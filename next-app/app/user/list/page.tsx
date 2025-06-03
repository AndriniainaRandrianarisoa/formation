

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"



export default async function Page() {
//  await new Promise ((r) => setTimeout(r, 3000))

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
