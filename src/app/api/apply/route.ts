import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const company = formData.get('company') as string
    const city = formData.get('city') as string
    const jobTitle = formData.get('jobTitle') as string
    const comments = formData.get('comments') as string
    const file = formData.get('cv') as File | null

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { success: false, message: 'No file uploaded or invalid file' },
        { status: 400 }
      )
    }

    // Validate file type
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file type. Please upload PDF or DOC/DOCX' },
        { status: 400 }
      )
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size exceeds 5MB limit' },
        { status: 400 }
      )
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    // Upload the file to Sanity
    const uploadRes = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/assets/files/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': file.type,
          Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body: buffer,
      }
    )

    const uploadJson = await uploadRes.json()

    if (!uploadRes.ok) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'File upload failed', 
          error: uploadJson.error?.message || 'Unknown error' 
        }, 
        { status: 500 }
      )
    }

    const resumeAssetId = uploadJson.document._id

    // Create the job application document in Sanity
    const applicationDoc = {
      _id: `jobApp-${uuidv4()}`,
      _type: 'jobApplication',
      name,
      email,
      phone,
      company,
      city,
      jobTitle,
      comments,
      resume: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: resumeAssetId,
        },
      },
    }

    const createRes = await fetch(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-01-01/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body: JSON.stringify({
          mutations: [{ create: applicationDoc }],
        }),
      }
    )

    const createJson = await createRes.json()

    if (!createRes.ok) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to create application', 
          error: createJson.error?.message || 'Unknown error' 
        }, 
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}