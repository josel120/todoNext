import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: 'uno'},
            { description: 'dos'},
            { description: 'tres'},
            { description: 'cuatro'},
            { description: 'cinco'},
        ]

    });

  return NextResponse.json({
    message: 'Seed Executed'
  });
}