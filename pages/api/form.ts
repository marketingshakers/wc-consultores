import { IFormField } from '@/lib/models/form-field'
import sg from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(404)
    return
  }

  if (!req.body) {
    res.status(505).json({
      error: 'The request must have a body'
    })
  }

  const body = (req.body as IFormField[]).map((f) => ({
    ...f,
    value: f.value.replace(new RegExp('\r?\n','g'), '<br />'),
  }))

  sg.setApiKey(process.env.SENDGRID_API_TOKEN)
  await sg
    .send({
      to: 'juanvillacortac@gmail.com', // Change to your recipient
      from: 'wc.consultores.cms@gmail.com', // Change to your verified sender
      templateId: 'd-0619067d03c3437b9a0f34337135d0f0',
      dynamicTemplateData: {
        fields: body
      }
    })
    .then(() => {
      res.status(200).json({})
    })
    .catch((error) => {
      res.status(505).json(error)
    })
}
