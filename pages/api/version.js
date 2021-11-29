// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    'Node.js version': process.version,
    'Cloud environment': process.env.CLOUD_ENV
  })
}