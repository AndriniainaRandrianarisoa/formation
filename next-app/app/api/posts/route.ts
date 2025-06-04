

//import { prisma } from '@/src/lib/prisma'
import prisma from '@/src/lib/prisma'
import { NextResponse } from 'next/server'



export async function GET() {
  try {
    const posts = await prisma.post.findMany()
    return NextResponse.json({datas: posts, status: true})
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 })
  }
}

  