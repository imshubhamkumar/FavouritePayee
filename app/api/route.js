import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

let contactList = [
    {
      id: "123",
      name: "Shyam Sundar",
      account: "ABC12345",
      bank: "HDFC",
      isFav: false,
    },
    {
      id: "235",
      name: "someone",
      account: "ABGC2321312",
      bank: "HSBC",
      isFav: true,
    },
  ];

const readEmployeesFile = () => {
  return contactList;
};

const writeLatestData = (data) => {
    contactList = data;
  return true;
};

export async function GET() {
  cookies();

  let data = readEmployeesFile();

  if (!data) {
    return NextResponse.json({ error_message: 'File Read Failed' }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request) {
  cookies();

  let data = null;

  try {
    data = await request.json();
  } catch (err) {
    // console.log(err);
  }

  if (!data?.length) {
    return NextResponse.json({ error_message: 'Wrong Paramaters' }, { status: 400 });
  }

  if (writeLatestData(data)) {
    return NextResponse.json('Success', { status: 200 });
  }

  return NextResponse.json({ error_message: 'An error occured in server side' }, { status: 500 });
}