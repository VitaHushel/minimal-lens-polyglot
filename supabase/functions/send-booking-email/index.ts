import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, serviceType, date, time, message } = await req.json()

    // Email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Нове бронювання сесії</title>
</head>
<body>
    <h2>Нове бронювання фотосесії</h2>
    <p><strong>Ім'я:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone || 'Не вказано'}</p>
    <p><strong>Тип сесії:</strong> ${serviceType}</p>
    <p><strong>Дата:</strong> ${date}</p>
    <p><strong>Час:</strong> ${time}</p>
    <p><strong>Повідомлення:</strong> ${message || 'Не вказано'}</p>
</body>
</html>
    `

    // Send via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'bookings@vitahushelphoto.com',
        to: ['vitahushelphoto@gmail.com'],
        subject: 'Нове бронювання фотосесії',
        html: emailContent,
        reply_to: email,
      }),
    })

    if (!resendResponse.ok) {
      throw new Error(`Resend API error: ${resendResponse.status}`)
    }

    const result = await resendResponse.json()

    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})